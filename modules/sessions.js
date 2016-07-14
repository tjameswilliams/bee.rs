'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	getOpenSession : `SELECT
		s.id,
		s.created_at as session_started,
		s.name as session_name,
		b.id as current_beer,
		b.unique_code as beer_code
		FROM sessions s
		LEFT JOIN beers b ON (
			b.session_id = s.id AND
			b.tasting_in_process = 1
		)
		WHERE session_open = 1
		LIMIT 1;`,
	createSession : `INSERT INTO sessions (name,session_open) VALUES (?,1)`,
	closeSession: `UPDATE sessions SET session_open = 0 WHERE id = ?`,
	deleteSession: `DELETE FROM sessions WHERE id = ?`,
	beerStatus: `SELECT
		(
			SELECT
			COUNT(*)
			FROM beers
			WHERE session_id = ?
		) as total_beers,
		(
			SELECT
			COUNT(*)
			FROM beers
			WHERE session_id = ?
			AND tasting_complete = 1
		) as total_completed,
		(
			SELECT
			id
			FROM beers
			WHERE session_id = ?
			AND tasting_in_process = 1
			LIMIT 1
		) as current_beer
		LIMIT 1;
		`,
	tasterRoundStatus: `SELECT
		t.name,
		IF(n.id IS NULL,0,1) as complete
		FROM users t
		LEFT JOIN notes n ON (
			n.user_id = t.id AND
			n.beer_id = ?
		)
		WHERE t.session_id = ?
		AND t.user_type = 'taster'
		`
};

module.exports = class Sessions extends MySQLOb {
	constructor() {
		super(SQL);
	}
	getOpenSession(cb) {
		this.doSql('getOpenSession', cb);
	}
	createSession(session,cb) {
		this.doSql('createSession',[session.name],cb);
	}
	closeSession(sessionId,cb) {
		this.doSql('closeSession',[sessionId],cb);
	}
	deleteSession(sessionId,cb) {
		this.doSql('deleteSession',[sessionId],cb);
	}
	sessionStatus(sessionId,cb) {
		// session status should say how many beers tasted, how many beers total and
		// how many users have added tasting notes.
		var self = this;
		var res = {
			total_beers: 0,
			total_completed: 0,
			current_beer: null,
			taster_status: {
				complete: [],
				incomplete: []
			}
		};
		self.doSql('beerStatus',[sessionId,sessionId,sessionId], (err,beer_status) => {
			if( err ) throw err;
			res.total_beers = beer_status.total_beers;
			res.total_completed = beer_status.total_completed;
			res.current_beer = beer_status.current_beer;
			self.doSql('tasterRoundStatus',[res.current_beer,sessionId], (err,taster_status) => {
				if( err ) throw err;
				res.taster_status.complete = taster_status.filter(taster => taster.complete === 1);
				res.taster_status.incomplete = taster_status.filter(taster => taster.complete === 0);
				cb(res);
			});
		});
	}
}

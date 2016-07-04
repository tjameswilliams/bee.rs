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
	deleteSession: `DELETE FROM sessions WHERE id = ?`
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
}

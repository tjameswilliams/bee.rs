'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	upsertNote: `INSERT INTO notes (id,beer_id,user_id,beer_guess,rating,notes)
		VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE
		beer_guess=VALUES(beer_guess),
		rating=VALUES(rating),
		notes=VALUES(notes)`,
	getNoteForUserForBeer: `SELECT
		IF(n.beer_guess = b.id,1,0) as guessed_correct,
		b.id as beer_id,
		b.unique_code,
		b.brand as brand,
		b.name as name,
		n.user_id,
		n.id,
		n.rating,
		n.notes,
		n.beer_guess,
		g.name as guess_name,
		g.id as guess_id,
		s.session_open
		FROM notes n
		JOIN beers b ON b.id = n.beer_id
		JOIN sessions s ON s.id = b.session_id
		LEFT JOIN beers g ON g.id = n.beer_guess
		WHERE n.beer_id = ?
		AND n.user_id = ?
		LIMIT 1;`,
	getBeerOptionsForNote: `SELECT
		b.id,
		b.brand,
		b.name,
		b.type,
		IF(n.id IS NULL,0,1) as used
		FROM beers bref
		JOIN beers b ON b.session_id = bref.session_id
		LEFT JOIN notes n ON (
			n.beer_id = b.id AND
			n.user_id = ?
		)
		WHERE bref.id = ?`,
	getUserRating: `SELECT
		u.id,
		u.name,
		n.rating,
		b.session_id
		FROM notes n
		JOIN users u ON u.id = n.user_id
		JOIN beers b ON b.id = n.beer_id
		WHERE n.id = ?
		LIMIT 1;`,
	getRatings: `SELECT
		u.id,
		u.name,
		n.rating
		FROM notes n
		JOIN users u ON u.id = n.user_id
		WHERE n.beer_id = ?`,
	getUserSummary: `SELECT
		b.round_number,
		CONCAT(b.brand, ' - ', b.name, ', ', b.type) as name,
		n.notes,
		n.rating,
		(n.beer_guess = n.beer_id) as guessed_correct,
		CONCAT(bg.brand, ' - ', bg.name, ', ', bg.type) as guess_name
		FROM notes n
		JOIN beers b ON n.beer_id = b.id
		JOIN beers bg ON n.beer_guess = bg.id
		WHERE n.user_id = ?
		ORDER BY b.round_number`
};

module.exports = class Beers extends MySQLOb {
	constructor() {
		super(SQL);
	}
	upsertNote(note,cb) {
		this.doSql('upsertNote',[
			note.id,
			note.beer_id,
			note.user_id,
			note.beer_guess,
			note.rating,
			note.notes
		],cb);
	}
	getNote(beerId,userId,cb) {
		var self = this;
		this.doSql('getNoteForUserForBeer',[beerId,userId], (err,note) => {
			if( err ) throw err;
			if( !note.id ) {
				note = {};
			}
			self.doSql('getBeerOptionsForNote',[userId,beerId], (err,opts) => {
				if( err ) throw err;
				note.beer_guess_options = opts;
				cb(note);
			});
		});
	}
	getRating(noteId,cb) {
		this.doSql('getUserRating',[noteId], cb);
	}
	getRatings(beerId,cb) {
		this.doSql('getRatings',[beerId],cb);
	}
	getSummary(userId,cb) {
		this.doSql('getUserSummary',[userId],cb);
	}
}

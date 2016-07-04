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
		b.id,
		b.unique_code,
		b.brand as brand,
		b.name as name,
		n.rating,
		n.notes,
		g.name as guess_name,
		g.id as guess_id,
		s.session_open
		FROM notes n
		JOIN beers b ON b.id = n.beer_id
		JOIN sessions s ON s.id = b.session_id
		LEFT JOIN beers g ON g.id = n.beer_guess
		WHERE n.beer_id = ?
		AND n.user_id = ?
		LIMIT 1;`
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
		this.doSql('getNoteForUserForBeer',[beerId,userId], cb);
	}
}

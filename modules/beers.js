'use strict';
let MySQLOb = require('./mysqlob');

var SQL = {
	upsertBeer: `INSERT INTO beers (id,unique_code,session_id,brand,name)
		VALUES (?,?,?,?,?) ON DUPLICATE KEY UPDATE
		brand = VALUES(brand),
		name = VALUES(name);`,
	deleteBeer: `DELETE FROM beers WHERE id = ?`,
	openRound: `UPDATE beers
		SET tasting_in_process = 1
		WHERE id = ?;`,
	closeRound: `UPDATE beers
		SET tasting_complete = 1,
		tasting_in_process = 0
		WHERE id = ?;`,
	getNextRandomBeer: `SELECT
		id,
		unique_code,
		brand,
		name,
		tasting_in_process,
		tasting_complete
		FROM beers
		WHERE tasting_complete = 0
		AND session_id = ?
		ORDER BY RAND()
		LIMIT 1;`,
	getByUniqueCode: `SELECT id
		FROM beers
		WHERE unique_code = ?
		AND session_id = ? LIMIT 1;`,
	getSessionBeers: `SELECT b.*
		FROM beers b
		JOIN sessions s ON s.id = b.session_id
		WHERE s.id = ?`,
	getBeer: `SELECT *
		FROM beers b
		WHERE b.id = ?
		LIMIT 1;`
};

module.exports = class Beers extends MySQLOb {
	constructor() {
		super(SQL);
	}
	getSessionBeers(sessionId,cb) {
		this.doSql('getSessionBeers',[sessionId],cb);
	}
	generateUniqueCode(sessionId,cb) {
		var self = this;
		var generateCode = function(cb) {
			let code = '',
				possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
			for( var i=0; i < 4; i++ )
				code += possible.charAt(Math.floor(Math.random() * possible.length));
			self.doSql('getByUniqueCode',[code,sessionId],(err,res) => {
				if( res.id ) {
					generateCode(cb);
				} else {
					cb(code);
				}
			});
		};
		generateCode(cb);
	}
	upsertBeer(beer,cb) {
		this.doSql('upsertBeer',[
			beer.id,
			beer.unique_code,
			beer.session_id,
			beer.brand,
			beer.name
		], cb);
	}
	getBeer(beerId,cb) {
		this.doSql('getBeer',beerId,cb);
	}
	deleteBeer(beerId,cb) {
		this.doSql('deleteBeer',beerId,cb);
	}
	nextBeer(beerId,sessionId,cb) {
		var self = this;
		var getAndOpen = function(cb) {
			self.doSql('getNextRandomBeer',[sessionId],(err,beer) => {
				if(err) throw err;
				if( beer.id ) {
					self.doSql('openRound',[beer.id],(err,res) => {
						if(err) throw err;
						beer.tasting_in_process = 1;
						cb(beer);
					});
				} else {
					cb(false);
				}
			});
		};
		// --> if a beer ID is supplied, we open that session and advance.
		if( beerId ) {
			self.doSql('closeRound',[beerId],(err,res) => {
				getAndOpen(cb);
			});
		} else {
			getAndOpen(cb);
		}
	}
}

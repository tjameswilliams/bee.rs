'use strict';
// docs http://unitjs.com/
var test = require('unit.js');

var beers = require(__dirname+'/../modules/beers');
beers = new beers();

var sessions = require(__dirname+'/../modules/sessions');
sessions = new sessions();

describe('Testing Unique Code Generator', () => {
	it('should generate a unique code per beer per session', (done) => {
		sessions.createSession({name:'Unique Code Test'}, (err,res) => {
			if(err) throw err;
			var sessionId = res.insertId;
			// --> test by creating with a non unique code
			var beer = {
				id:null,
				unique_code:'TEST',
				session_id:sessionId,
				brand:'Allagash',
				name:'Curieux'
			};
			beers.upsertBeer(beer,(err,res) => {
				if(err) throw err;
				beers.generateUniqueCode(sessionId,(unique_code) => {
					test.string(unique_code).hasLength(4).notMatch('TEST');
					sessions.deleteSession(sessionId,(err,res) => {
						if(err) throw err;
						done();
					});
				});
			});
		});
	});
});

describe('Testing Run Full Session', () => {
	var beerList = [
		{
			brand:'Allagash',
			name:'Curieaux'
		},
		{
			brand:'Chimay',
			name:'Grand Reserve'
		},
		{
			brand:'La Trappe',
			name:'Quadrupel'
		},
		{
			brand:'North Coast',
			name:'Brother Thelonious'
		}
	];
	// --> beers need a session.
	function generate_session(cb) {
		sessions.createSession({name:'Full Suite Test'}, (err,res) => {
			if(err) throw err;
			cb(res.insertId);
		});
	}
	// --> recursively insert beers.
	var insertBeers = function(beerList,sessionId,cb) {
		if( beerList.length === 0 ) {
			cb();
		} else {
			var beer = beerList.pop();
			beer.session_id = sessionId;
			beers.generateUniqueCode(sessionId,(unique_code) => {
				beer.unique_code = unique_code;
				beers.upsertBeer(beer,(err,res) => {
					if(err) throw err;
					insertBeers(beerList,sessionId,cb);
				});
			});
		}
	};
	// --> recursively pull random beers until session is empty.
	var runBeers = function(beerId,sessionId,cb) {
		beers.nextBeer(beerId,sessionId,(beer) => {
			if( beer ) {
				test.number(beer.tasting_in_process).is(1);
				test.number(beer.tasting_complete).is(0);
				runBeers(beer.id,sessionId,cb);
			} else {
				cb();
			}
		});
	};
	it('should generate a session, insert a list of beers, start the session, pick random beers until the session is complete', (done) => {
		generate_session((sessionId) => {
			insertBeers(beerList,sessionId,() => {
				runBeers(false,sessionId,() => {
					sessions.deleteSession(sessionId, () => {
						done();
					});
				});
			});
		});
	});
});

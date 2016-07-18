'use strict';
// docs http://unitjs.com/
var test = require('unit.js');

var sessions = require(__dirname+'/../modules/sessions');
sessions = new sessions();

var users = require(__dirname+'/../modules/users');
users = new users();

var beers = require(__dirname+'/../modules/beers');
beers = new beers();

var notes = require(__dirname+'/../modules/notes');
notes = new notes();

var appContext = require(__dirname+'/../modules/applicationContext');
appContext = new appContext();

describe('Host Route Contexts', () => {
	it('Should follow the host through the lifecycle of routes.', (done) => {
		// first user opens the app.
		appContext.getRoute(null,(route) => {
			test.string(route).is('');
			// first user creates a new session
			sessions.createSession({name: 'Host Route Context Test'}, (err,res) => {
				if(err) throw err;
				var sessionId = res.insertId;
				// first user should become the host
				appContext.getRoute(null,(route) => {
					test.string(route).is('/new-host');
					users.upsertUser({
						name:'Frank',
						session_id: sessionId,
						user_type: 'host'
					}, (err,res) => {
						if(err) throw err;
						var userId = res.insertId;
						// once we know the host, they should be routed to the manifest.
						appContext.getRoute(userId,(route) => {
							test.string(route).is('/beer-manifest');
							beers.upsertBeer({
								brand:'Allagash',
								name:'Curieux',
								session_id:sessionId
							}, (err, res) => {
								if(err) throw err;
								// should still be adding beers to the manifest.
								appContext.getRoute(userId,(route) => {
									test.string(route).is('/beer-manifest');
									beers.upsertBeer({
										brand:'North Coast',
										name:'Old Stock',
										session_id:sessionId
									}, (err, res) => {
										// beer manifesting done, host will start the first session.
										beers.nextBeer(null,sessionId,(beer) => {
											appContext.getRoute(userId,(route) => {
												test.string(route).is('/host-round/'+beer.id);
												// host moves to the next beer.
												beers.nextBeer(beer.id,sessionId,(beer) => {
													appContext.getRoute(userId,(route) => {
														test.string(route).is('/host-round/'+beer.id);
														// host requests another beer, and the session is over!
														beers.nextBeer(beer.id,sessionId,(beer) => {
															test.bool(beer).isFalse();
															appContext.getRoute(userId,(route) => {
																test.string(route).is('/summary');
																sessions.deleteSession(sessionId,(err,res) => {
																	done();
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});

describe('Taster Route Contexts', () => {
	it('Should follow the taster through the lifecycle of routes.', (done) => {
		sessions.createSession({name: 'Taster Route Context Test'}, (err,res) => {
			if(err) throw err;
			var sessionId = res.insertId;
			users.upsertUser({
				name:'Sally',
				session_id: sessionId,
				user_type: 'host'
			}, (err, res) => {
				if(err) throw err;
				// a new user comes on the scene when a host has created a new session.
				appContext.getRoute(null,(route) => {
					test.string(route).is('/new-taster');
					users.upsertUser({
						name:'Bob',
						session_id: sessionId,
						user_type: 'taster'
					}, (err, res) => {
						if(err) throw err;
						var userId = res.insertId;
						appContext.getRoute(userId,(route) => {
							test.string(route).is('/please-wait');
							beers.upsertBeer({
								brand:'North Coast',
								name:'Old Stock',
								session_id:sessionId
							}, (err, res) => {
								// host may still be manifesting beers.
								appContext.getRoute(userId,(route) => {
									test.string(route).is('/please-wait');
									beers.upsertBeer({
										brand:'Deschutes',
										name:'Not the Stoic',
										session_id:sessionId
									}, (err, res) => {
										//  host finishes manifesting beers, and
										// starts a session.
										beers.nextBeer(null,sessionId,(beer) => {
											appContext.getRoute(userId,(route) => {
												test.string(route).is('/tasting-round/'+beer.id);
												beers.nextBeer(beer.id,sessionId,(beer) => {
													appContext.getRoute(userId,(route) => {
														test.string(route).is('/tasting-round/'+beer.id);
														beers.nextBeer(beer.id,sessionId,(beer) => {
															test.bool(beer).isFalse();
															// host finishes all rounds and session is complete
															appContext.getRoute(userId,(route) => {
																test.string(route).is('/summary');
																sessions.deleteSession(sessionId,(err,res) => {
																	done();
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});

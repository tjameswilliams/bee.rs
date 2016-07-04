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

describe('Notes Creation Test', () => {
	it('should create a session, user, beer and add a note.', (done) => {
		// create a session
		sessions.createSession({name:'Note Test'}, (err, res) => {
			if(err) throw err;
			var sessionId = res.insertId;
			// create a user
			users.upsertUser({
				name:'Jessica',
				user_type:'taster',
				session_id:sessionId
			}, (err,res) => {
				if(err) throw err;
				var userId = res.insertId;
				// create a beer
				beers.upsertBeer({
					brand:'Allagash',
					name:'Curieux',
					session_id: sessionId
				}, (err,res) => {
					if(err) throw err;
					var beerId = res.insertId;
					notes.upsertNote({
						beer_id: beerId,
						user_id: userId,
						beer_guess: beerId,
						rating: 5,
						notes: 'Tastes like drinking pure sunshine.'
					}, (err,res) => {
						if(err) throw err;
						notes.getNote(beerId,userId, (err,note) => {
							if(err) throw err;
							test.number(note.guessed_correct).is(1);
							test.number(note.rating).is(5);
							test.string(note.notes).is('Tastes like drinking pure sunshine.');
							sessions.deleteSession(sessionId,(err,res) => {
								if(err) throw err;
								done();
							});
						});
					});
				});
			});
		});
	});
});

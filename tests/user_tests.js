'use strict';
// docs http://unitjs.com/
var test = require('unit.js');

var sessions = require(__dirname+'/../modules/sessions');
sessions = new sessions();

var users = require(__dirname+'/../modules/users');
users = new users();

describe('Create Taster', () => {
	it('should create a session and add a user to the session.', (done) => {
		var user = {
			name: 'Charley',
			user_type: 'taster'
		};
		sessions.createSession({name:'User Creation Test'}, (err,res) => {
			if(err) throw err;
			var sessionId= res.insertId;
			user.session_id = sessionId;
			users.upsertUser(user,(err,res) => {
				if(err) throw err;
				var userId = res.insertId;
				test.number(userId);
				users.getUser(userId,(err,user) => {
					if(err) throw err;
					test.string(user.name).is('Charley');
					test.string(user.user_type).is('taster');
					sessions.deleteSession(sessionId,(err,res) => {
						if(err) throw err;
						done();
					});
				});
			});
		});
	});
});

describe('Create Host', () => {
	it('should create a session and add a user to the session.', (done) => {
		var user = {
			name: 'Donald',
			user_type: 'host'
		};
		sessions.createSession({name:'Host Creation Test'}, (err,res) => {
			if(err) throw err;
			var sessionId= res.insertId;
			user.session_id = sessionId;
			users.upsertUser(user,(err,res) => {
				if(err) throw err;
				var userId = res.insertId;
				test.number(userId);
				users.getHost(sessionId,(err,host) => {
					if(err) throw err;
					test.string(host.name).is('Donald');
					test.string(host.user_type).is('host');
					sessions.deleteSession(sessionId,(err,res) => {
						if(err) throw err;
						done();
					});
				});
			});
		});
	});
});

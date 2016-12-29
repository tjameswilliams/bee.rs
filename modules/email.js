'use strict';
let MySQLOb = require('./mysqlob');
let jade = require('jade');
let sessions = require('./sessions');
sessions = new sessions();
let notes = require('./notes');
notes = new notes();
let beers = require('./beers');
beers = new beers();
let users = require('./users');
users = new users();

module.exports = class Email {
	getSessionRollupForUser(userId,cb) {
		var globals = {
			session:null,
			leaderboard:null,
			results:null,
			summary: null
		};
		users.getUser(userId, (err, user) => {
			if( err ) throw err;
			var sessionId = user.session_id;
			sessions.getSession(sessionId, (err,session) => {
				if( err ) throw err;
				globals.session = session;
				sessions.leaderboard(sessionId, (err,leaderboard) => {
					if( err ) throw err;
					globals.leaderboard = leaderboard;
					notes.getSummary(userId, (err,summary) => {
						if( err ) throw err;
						globals.summary = summary;
						beers.getResults(sessionId, (err,results) => {
							if( err ) throw err;
							globals.results = results;
							cb(globals);
						});
					});
				});
			});
		});
	}
	generateSessionEmailForUser(userId,cb) {
		this.getSessionRollupForUser(userId,(sessionRollup) => {
			cb(jade.renderFile(__dirname+'/../templates/email_template.jade', sessionRollup));
		});
	}
}

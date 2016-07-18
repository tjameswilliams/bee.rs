'use strict';
// http://unitjs.com/
var test = require('unit.js');

var sessions = require(__dirname+'/../modules/sessions');
sessions = new sessions();

describe('Testing Sessions Model', () => {
	// there should be no sessions to begin with
	it('sessions suite', (done) => {
		sessions.getOpenSession((err,res) => {
			if( err ) throw err;
			// test that there are no open sessions
			test.array(res).is([]);
			// test session creation
			sessions.createSession({name:'Beer Tasting 2016'}, (err,res) => {
				if(err) throw err;
				sessions.getOpenSession((err,res) => {
					if(err) throw err;
					var session = res;
					test.object(session);
					test.string(session.session_name).is('Beer Tasting 2016');
					test.date(session.session_started);
					// test closing the session
					sessions.closeSession(session.id, (err,res) => {
						if(err) throw err;
						sessions.getOpenSession((err,res) => {
							if(err) throw err;
							test.array(res).is([]);
							sessions.deleteSession(session.id, (err,res) => {
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

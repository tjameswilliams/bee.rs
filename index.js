var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	path = require('path'),
	fs = require('fs');

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/dist/app/')));

io.on('connection', (socket) => {

	// user routes.
	socket.on('users:getUser', (userId,cb) => {
		var users = require(__dirname+'/modules/users');
		users = new users();
		users.getUser(userId,(err,user) => {
			if(err) throw err;
			cb(user);
		});
	});

	socket.on('users:getUsers', (cb) => {
		var users = require(__dirname+'/modules/users');
		users = new users();
		users.getUsers((err,users) => {
			if(err) throw err;
			cb(users);
		});
	});

	socket.on('users:createUser', (user,cb) => {
		var users = require(__dirname+'/modules/users');
		users = new users();
		user.ip_address = socket.handshake.address;
		users.upsertUser(user,(err,res) => {
			if(err) throw err;
			cb(res);
			users.getUser(res.insertId,(err,user) => {
				if(err) throw err;
				if( user.user_id !== 'host' ) {
					io.sockets.emit('users:userAdded', user);
				}
			});
		});
	});

	// context routes.
	socket.on('appContext:getRoute', (userId) => {
		var appContext = require(__dirname+'/modules/applicationContext');
		appContext = new appContext();
		appContext.getRoute(userId, (route) => {
			socket.emit('route:redirect', route);
		});
	});

	// context routes.
	socket.on('sessions:startRoute', (cb) => {
		var appContext = require(__dirname+'/modules/applicationContext');
		appContext = new appContext();
		appContext.getRoute(null, (route) => {
			cb(route);
		});
	});

	socket.on('sessions:createSession', (session,cb) => {
		var sessions = require(__dirname+'/modules/sessions');
		sessions = new sessions();
		sessions.createSession(session,(err,res) => {
			if(err) throw err;
			cb({id:res.insertId});
			socket.emit('route:redirect', '/new-host');
			socket.broadcast.emit('route:redirect', '/new-taster');
			socket.broadcast.emit('sessions:setSession', session);
		});
	});

	socket.on('sessions:getOpenSession', (cb) => {
		var sessions = require(__dirname+'/modules/sessions');
		sessions = new sessions();
		sessions.getOpenSession((err,session) => {
			if(err) throw err;
			cb(session);
		});
	});

	socket.on('sessions:advanceSession', (data,cb) => {
		var beers = require(__dirname+'/modules/beers');
		beers = new beers();
		beers.nextBeer(data.beer_id,data.session_id, (beer) => {
			// --> Broadcast the advancement to all users.
			var route = beer ? '/tasting-round/'+beer.id : 'summary';
			socket.broadcast.emit('route:redirect', route);
			cb(beer);
		});
	});

	socket.on('sessions:sessionStatus', (sessionId,cb) => {
		var sessions = require(__dirname+'/modules/sessions');
		sessions = new sessions();
		sessions.sessionStatus(sessionId,(status) => {
			cb(status);
		});
	});

	socket.on('sessions:getLeaderBoard', (sessionId,cb) => {
		var sessions = require(__dirname+'/modules/sessions');
		sessions = new sessions();
		sessions.leaderboard(sessionId,(err,leaderboard) => {
			if( err ) throw err;
			cb(leaderboard);
		});
	});

	socket.on('sessions:closeSession', (sessionId,cb) => {
		var sessions = require(__dirname+'/modules/sessions');
		sessions = new sessions();
		sessions.closeSession(sessionId,(err,res) => {
			if( err ) throw err;
			cb();
		});
	});

	socket.on('beers:getBeers', (sessionId,cb) => {
		var beers = require(__dirname+'/modules/beers');
		beers = new beers();
		beers.getSessionBeers(sessionId, (err,beers) => {
			if( err ) throw err;
			cb(beers);
		});
	});

	socket.on('beers:getBeer', (beerId,cb) => {
		var beers = require(__dirname+'/modules/beers');
		beers = new beers();
		beers.getBeer(beerId, (err,beer) => {
			if( err ) throw err;
			cb(beer);
		});
	});

	socket.on('beers:deleteBeer', (beerId,cb) => {
		var beers = require(__dirname+'/modules/beers');
		beers = new beers();
		beers.deleteBeer(beerId, (err,res) => {
			if( err ) throw err;
			cb(res);
		});
	});

	socket.on('beers:saveBeer', (beer,cb) => {
		var beers = require(__dirname+'/modules/beers');
		beers = new beers();
		if( !beer.id ) {
			beers.generateUniqueCode(beer.session_id,(code) => {
				beer.unique_code = code;
				beers.upsertBeer(beer, (err,res) => {
					if(err) throw err;
					cb(res);
				});
			});
		} else {
			beers.upsertBeer(beer, (err,res) => {
				if(err) throw err;
				cb(res);
			});
		}
	});

	socket.on('notes:getNote', (data,cb) => {
		var notes = require(__dirname+'/modules/notes');
		notes = new notes();
		notes.getNote(data.beer_id,data.user_id,(note) => {
			cb(note);
		});
	});

	socket.on('notes:save', (note,cb) => {
		var notes = require(__dirname+'/modules/notes');
		notes = new notes();
		notes.upsertNote(note,(err,res) => {
			if( err ) throw err;
			cb();
			var id = note.id ? note.id : res.insertId;
			notes.getRating(id,(err,rating) => {
				if( err ) throw err;
				io.sockets.emit('notes:ratingAdded',rating);
				var sessions = require(__dirname+'/modules/sessions');
				sessions = new sessions();
				sessions.sessionStatus(rating.session_id,(status) => {
					io.sockets.emit('sessions:broadcastStatus',status);
				});
			});
		});
	});

	socket.on('notes:getRatings', (beerId,cb) => {
		var notes = require(__dirname+'/modules/notes');
		notes = new notes();
		notes.getRatings(beerId,(err,ratings) => {
			if(err) throw err;
			cb(ratings);
		});
	});

	socket.on('notes:getSummary', (userId,cb) => {
		var notes = require(__dirname+'/modules/notes');
		notes = new notes();
		notes.getSummary(userId,(err,summary) => {
			if(err) throw err;
			cb(summary);
		});
	});
});

app.get('*', function (req, res) {
	res.set('Content-Type', 'text/html');
  res.send(fs.readFileSync(__dirname+'/dist/app/index.html'));
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

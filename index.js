var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	path = require('path'),
	fs = require('fs');

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/dist/dev/')));

app.get('/', function (req, res) {
	res.set('Content-Type', 'text/html');
  res.send(fs.readFileSync(__dirname+'/dist/dev/index.html'));
});

io.on('connection', (socket) => {

	// user routes.
	socket.on('users:getUser', (userId,cb) => {
		var users = require(__dirname+'/modules/users');
		users = new users();
		users.getUser(userId,(user) => {
			cb(user);
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
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

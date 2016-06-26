var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/dist/dev/')));

app.get('/', function (req, res) {
	res.set('Content-Type', 'text/html');
  res.send(fs.readFileSync(__dirname+'/dist/dev/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

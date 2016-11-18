var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 3000;

/* * DATE SERVER * */
var date = new Date();
var options = { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
var time = date.toLocaleTimeString("en-us", options);
/* * * */

app.get( '/', function(req, res) {
	res.status(200).send(`<h3>Hola mundo!! XD</h3>`);
});

/* * * listen * * * */
server.listen(port , function() {
	console.log(`Server = http://192.168.0.4:${port} || ${time}`);
});
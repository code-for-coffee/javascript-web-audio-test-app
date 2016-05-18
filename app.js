var appName = "ExpressJS Boilerplate";
var express = require('express');
var app = express();
var listeningPort = 5000; // port 5000 is required by Heroku

app.use(express.static(__dirname + '/Resources'));
app.use(express.static(__dirname + '/Views'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(process.env.PORT || listeningPort);
console.log(appName + " is being served on localhost:" + listeningPort);

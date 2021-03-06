/**
* app.js
* -
* Setup server, connect to database
*/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var api = require('./routes/api');

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', api);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.port || 3000);
console.log('<--------------- App is running ---------------->');

module.exports = app;

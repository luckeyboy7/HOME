
//load packages
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

//app To use bodyParser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//router를 사용 
app.use(app.router);
//정적 페이지 사용 --javascript,stylesheets,images 등
app.use(express.static(path.join(__dirname, 'public')));

//[S]db connection
var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
	console.log('Connected to mongodb server');
});

mongoose.connect('mongodb://username:password@host:port/database?options...');

//[E]db connection

app.title ='Test HomePage'; 

var User = require('./models/user.js');

var indexPage = require('./routes/index.js')(app);
var memberPage = require('./routes/member/join.js')(app,User);

//run server
var webServer = app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

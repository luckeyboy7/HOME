// * Module dependencies.

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//router를 사용 
app.use(app.router);
//정적 페이지 사용 --javascript,stylesheets,images 등
app.use(express.static(path.join(__dirname, 'public')));


app.title ='Test HomePage'; 


var indexPage = require('./routes/index.js')(app);

var webServer = app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

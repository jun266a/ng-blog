'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routeUser = require('./routes/routeUser');
const routeArticle = require('./routes/routeArticle');
const routeCategory = require('./routes/routeCategory');
const routeComment = require('./routes/routeComment');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//app.use(cookieParser());
app.use(express.static('./webapp'));
	
app.use('/user',routeUser);
app.use('/article',routeArticle);
app.use('/category',routeCategory);
app.use('/comment',routeComment);


app.listen(80,function(err){
	if(err){
		console.log(err);
	}
	console.log("server is started!");
});
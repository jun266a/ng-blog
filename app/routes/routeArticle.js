'use strict';

const express = require('express');
const router = express.Router();

const article = require('../dao/articleDao');

router.post('/insert',function(req,res){
	//req.body用于表单from提交
	console.log(req.body);
	console.log(req.query);
	article.insert(value,function(results){
		res.json(results);
	});
});
router.post('/all',function(){});
router.post('/replace',function(){});

module.exports = router;
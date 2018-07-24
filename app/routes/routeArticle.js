'use strict';

const express = require('express');
const router = express.Router();

const article = require('../dao/articleDao');
const artiView = require('../dao/articleView');

router.post('/insert',function(req,res){
	article.insert(req.body,function(results){
		if(results){
			res.json({
				status : 1,
				statusText : '保存成功！'
			});
		}
	});
});
router.post('/all',function(req,res){
	artiView.query('SELECT * FROM articleView WHERE ? AND ?',req.body,function(results){
		res.json(results);
	});
});
router.post('/select',function(req,res){
	artiView.select(req.body,function(results){
		res.json(results);
	});
});
router.post('/replace',function(){});

module.exports = router;
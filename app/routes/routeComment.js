'use strict';

const express = require('express');
const router = express.Router();

const comment = require('../dao/commentDao');

router.post('/all',function(req,res){
	comment.select(req.body,function(results){
		res.json(results);
	});
});

router.post('/insert',function(req,res){
	comment.insert(req.body,function(results){
		res.json(results);
	});
});

router.post('/update',function(req,res){
	comment.update(req.body,function(results){
		res.json(results);
	});
});

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();

const category = require('../dao/categoryDao');
const cateView = require('../dao/categoryView');

router.post('/all',function(req,res){
	category.all(function(results){
		res.json(results);
	});
});

router.post('/select',function(req,res){
	console.log(req.body);
	cateView.select(req.body,function(results){
		res.json(results);
	});
});

module.exports = router;
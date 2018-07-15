'use strict';

const express = require('express');
const router = express.Router();

const category = require('../dao/categoryDao');

router.post('/all',function(req,res){
	category.all(function(results){
		res.json(results);
	});
});

module.exports = router;
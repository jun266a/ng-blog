'use strict';

const express = require('express');
const router = express.Router();

const article = require('../dao/articleDao');

router.post('/insert',function(req,res){
	console.log(req.body);
	article.insert(req.body,function(results){
		if(results){
			res.json({
				status : 1,
				statusText : '保存成功！'
			});
		}
	});
});
router.post('/all',function(){});
router.post('/replace',function(){});

module.exports = router;
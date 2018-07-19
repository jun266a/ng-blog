'use strict';

const express = require('express');
const router = express.Router();

const user = require('../dao/userDao');

router.post('/insert',function(req,res){
	let values = req.body;
	user.select({username : values.username},function(results){
		if(results.length == 0){
			user.insert(values,function(results){
				res.end('注册成功！');
			});
		}else{
			res.end('该用户名已存在！');
		}
	});
});
router.post('/select',function(req,res){
	user.select({username : req.body.username},function(results){
		if(results.length == 0){
			res.json({
				status : 0,
				statusText : '该用户名不存在！'
			});
		}else{
			if(results[0].password == req.body.password){
				res.json({
					UID : results[0].id,
					status : 1,
					statusText : '登录成功'
				});
			}else{
				res.json({
					status : 0,
					statusText : '密码或者账号错误！'
				});
			}
		}
	});
});
router.post('/replace',function(req,res){
	user.replace(req.body,function(results){
		res.json(results);
	});
});

module.exports = router;
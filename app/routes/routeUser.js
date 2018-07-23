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
	console.log(req.body);
	user.select({username : req.body.username},function(results){
		if(results.length == 0){
			res.json({
				status : 0,
				statusText : '该用户名不存在！'
			});
		}else{
			if(results[0].password == req.body.password){
				res.json({
					user : { 
						UID : results[0].id,
						name : results[0].username
					},
					status : 1,
					statusText : '登录成功!'
				});
			}else{
				res.json({
					status : 0,
					statusText : '密码错误！'
				});
			}
		}
	});
});
router.post('/update',function(req,res){
	console.log(req.body);
	user.update(req.body,function(results){
		if(results.length == 0){
			res.json({
				status : 0,
				statusText : '修改密码失败！'
			});
		}else{
			res.json({
				status : 1,
				statusText : '修改密码成功！'
			});
		}
	});
});

module.exports = router;
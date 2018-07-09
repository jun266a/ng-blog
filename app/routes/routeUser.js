'use strict';

const express = require('express');
const router = express.Router();

const user = require('../dao/userDao');

router.post('/insert',function(req,res){
	user.select(req.query.user.username,function(results){
		if(!results){
			user.insert(req.query.user,function(results){
//				res.json(results);
				res.end('注册成功！');
			});
		}else{
			res.end('该用户名已存在！');
		}
	});
});
router.post('/select',function(req,res){
	user.select(req.query.user.username,function(results){
		if(!results){
			res.end('该用户名不存在！');
		}else{
			if(results[0].password == req.query.user.pasword){
				res.end('登录成功！');
			}else{
				res.end('密码或者账号错误！')
			}
		}
	});
});
router.post('/replace',function(req,res){
	user.replace(req.query.user,function(results){
		res.json(results);
	});
});

module.exports = router;
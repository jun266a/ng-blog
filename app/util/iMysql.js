'use strict';

const mysql = require('mysql');

let iMysql = {
	CONFIG :  {
		HOST : '127.0.0.1',
		USER : 'root',
		PASSWORD : '123',
		DATABASE : 'NGBLOG',
	},
	VIEWS : {
		CATEGORY : 'categoryView',
		ARTICLE : 'articleView'
	},
	TABLES : {
		ARTICLE : 'article',
		CATEGORY : 'category',
		USER : 'user',
	},
	query : function sqlback(querySql,values,callback){
		//2.获取和数据库的链接
		const connection = mysql.createConnection({
			host : this.CONFIG.HOST,
			user : this.CONFIG.USER,
			password : this.CONFIG.PASSWORD,
			database : this.CONFIG.DATABASE,
		});
		//3.启动链接
		connection.connect(function(err){
			if (err) {
			    console.error('连接错误: ' + err.stack);
			    return;
		  	}
		  	console.log('连接ID ' + connection.threadId);
		});
		if(!querySql) return ;
		connection.query(querySql,values,function(err,results,fields){
			if(err){
	    		console.error('查询错误: ' + err.stack);
			    return;
		    }
			callback(results);
		});
		connection.end(function(err) {
			if(err){
				console.error('关闭错误: ' + err.stack);
			    return;
		    }else{
		    	console.log('连接关闭');
		    }
		});
	},
};

module.exports = iMysql;

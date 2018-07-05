'use strict';

const iMysql = require('../util/iMysql');

let baseDao = {
	TABLE : iMysql.TABLES.ADMIN,
	query : function(sql,values,callback){
		iMysql.query(sql,values,function(results){
			callback(results);
		});
	},
	insert : function(values,callback){
		let insertSql = 'INSERT INTO ' + this.TABLE +' SET ? ';
		this.query(insertSql,values,callback);
	},
	delete : function(values,callback){
		let deleteSql = 'DELETE FROM ' + this.TABLE +' WHERE ?';
		this.query(deleteSql,values,callback);
	},
	select : function(values,callback){
		let selectSql = 'SELECT * FROM ' + this.TABLE +' WHERE ?';
		this.query(selectSql,values,callback);
	},
	all : function(callback){
		let selectSql = 'SELECT * FROM ' + this.TABLE ;
		this.query(selectSql,null,callback);
	},
	update : function(values,callback){
		//TODO update的偏差错误
		let updateSql = 'REPLACE ' + this.TABLE +' SET ? ';
		this.query(updateSql,values,callback);
	}
};
module.exports = baseDao;
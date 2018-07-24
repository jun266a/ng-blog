'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let commentDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.COMMENT
});
module.exports = commentDao;
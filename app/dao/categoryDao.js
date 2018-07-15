'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let categoryDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.CATEGORY
});
module.exports = categoryDao;
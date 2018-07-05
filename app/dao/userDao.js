'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let userDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.USER
});
module.exports = userDao;
'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let articleDao = Object.assign({},iDao,{
	TABLE : iMysql.TABLES.ARTICLE
});
module.exports = articleDao;
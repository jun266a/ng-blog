'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let categoryView = Object.assign({},iDao,{
	TABLE : iMysql.VIEWS.CATEGORY
});
module.exports = categoryView;
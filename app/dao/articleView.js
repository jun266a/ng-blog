'use strict';

const iDao = require('../util/iDao');
const iMysql = require('../util/iMysql');

let articleView = Object.assign({},iDao,{
	TABLE : iMysql.VIEWS.ARTICLE
});
module.exports = articleView;
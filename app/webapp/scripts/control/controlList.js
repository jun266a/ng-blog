(function(angular){
	var app = angular.module('module.control.list',['ngRoute','module.service.article']);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/list',{
				controller : 'controlList',
				templateUrl : './views/viewList.html'
			});
	}]);
	app.controller('controlList',['$scope','serviceArticle',function($scope,serviceArticle){
		$scope.list = serviceArticle.get();
	}]);
})(angular);

(function(angular){
	var app = angular.module('module.control.edit',['ngRoute','module.service.article']);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/edit',{
			controller : 'controlEdit',
			templateUrl : './views/viewEdit.html'
		})
	}]);
	app.controller('controlEdit',['$scope','serviceArticle',function($scope,serviceArticle){
		$scope.list = serviceArticle.get();
		$scope.save = function(article){
			article.UID = 31;
			serviceArticle.put(article);
		}
	}]);
})(angular);

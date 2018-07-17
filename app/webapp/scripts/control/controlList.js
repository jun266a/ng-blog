(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/list',{
				controller : 'controlList',
				templateUrl : './views/viewList.html'
			});
	}]);
	app.controller('controlList',[
		'$scope',
		'serviceArticle',
		'serviceCategory',
		function($scope,serviceArticle,serviceCategory){
			serviceCategory.get(7,function(data){
				$scope.categories = data;
				console.log($scope.categories);
			});
			serviceArticle.get(7,function(data){
				$scope.articles = data;
				console.log($scope.articles);
			});
		}
	]);
})(angular);

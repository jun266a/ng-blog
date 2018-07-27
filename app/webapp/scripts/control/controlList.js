(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
		'ngCookies',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/list/:category',{
				controller : 'controlList',
				templateUrl : './views/viewList.html'
			});
	}]);
	app.controller('controlList',[
		'$scope',
		'$location',
		'$routeParams',
		'serviceArticle',
		'serviceCategory',
		function($scope,$location,$routeParams,serviceArticle,serviceCategory){
        	$scope.category = $routeParams.category;
			$scope.articles = serviceArticle.getArticles([{category : $scope.category},{statu : 1}]);
		}
	]);
})(angular);

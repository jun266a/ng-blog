(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
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
		'$routeParams',
		'serviceArticle',
		function($scope,$routeParams,serviceArticle){
        	$scope.category = $routeParams.category;
			$scope.articles = serviceArticle.getArticles([{categoryname : $scope.category},{statu : 1}]);
		}
	]);
})(angular);

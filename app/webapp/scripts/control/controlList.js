(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/list/:status',{
				controller : 'controlList',
				templateUrl : './views/viewList.html'
			});
	}]);
	app.controller('controlList',[
		'$scope',
		'$location',
		'serviceArticle',
		'serviceCategory',
		function($scope,$location,serviceArticle,serviceCategory){
        	$scope.$location = $location;
        	$scope.$watch("$location.path()",function (now, old) {
	            $scope.path = now;
	        })
			serviceCategory.get(7,function(data){
				$scope.categories = data;
				console.log($scope.categories);
			});
			$scope.articles = serviceArticle.get(7);
		}
	]);
})(angular);

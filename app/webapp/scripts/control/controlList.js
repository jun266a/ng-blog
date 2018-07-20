(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
		'ngCookies',
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
		'$cookieStore',
		'serviceArticle',
		'serviceCategory',
		function($scope,$location,$cookieStore,serviceArticle,serviceCategory){
			$scope.user = $cookieStore.get('user');
        	$scope.$location = $location;
        	$scope.$watch('$location.path()',function (now, old) {
	            $scope.path = now;
	        });
        	if(!$cookieStore.get($scope.user.UID)){
        		$scope.categories = serviceCategory.get($scope.user.UID);
        	}else{
        		$scope.categories = $cookieStore.get($scope.user.UID);
        	}
			console.log($scope.categories);
			$scope.articles = serviceArticle.get($scope.user.UID);
		}
	]);
})(angular);

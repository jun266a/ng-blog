(function(angular){
	var app = angular.module('module.control.user',['ngRoute','module.service.user']);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user',{
			controller : 'controlUser',
			templateUrl : 'views/viewUser.html'
		})
	}]);
	app.controller('controlUser',['$scope','serviceUser',function($scope,serviceArticle){
		$scope.user = serviceUser.get();
	}]);
})(angular);

(function(angular){
	var app = angular.module('module.control.user',['ngRoute','module.service.user']);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user',{
			controller : 'controlUser',
			templateUrl : 'views/viewUser.html'
		})
	}]);
	app.controller('controlUser',['$scope','serviceUser',function($scope,serviceUser){
		$scope.user = 'signin';
		$scope.switch = function(value){
			$scope.user = value;
			console.log($scope.user);
		};
		$scope.signup = function(user){
			if(confirmPassword == user.password){
				serviceUser.put(user);
			}
		};
	}]);
})(angular);

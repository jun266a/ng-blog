(function(angular){
	var app = angular.module('module.control.user',['ngRoute','module.service.user']);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user',{
			controller : 'controlUser',
			templateUrl : 'views/viewUser.html'
		})
	}]);
	app.controller('controlUser',['$scope','serviceUser',function($scope,serviceUser){
		$scope.status = 'login';
		$scope.switch = function(value){
			$scope.status = value;
		};
		$scope.signin = function(user){
			serviceUser.get(user);
			
		};
		$scope.signup = function(user,confirm){
			if(user&&confirm){
				if(confirm.password == user.password){
					serviceUser.put(user);
					$scope.status = 'login';
				}else{
					alert(confirm.password+'请确认密码'+user.password);
				}
			}
		};
	}]);
})(angular);

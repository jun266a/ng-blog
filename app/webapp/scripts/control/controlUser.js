(function(angular){
	var app = angular.module('module.control.user',[
		'ngRoute',
		'ngCookies',
		'module.service.user'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user/:status',{
			controller : 'controlUser',
			templateUrl : 'views/viewUser.html'
		})
	}]);
	app.controller('controlUser',[
		'$scope',
		'$routeParams',
		'$location',
		'$cookieStore',
		'serviceUser',
		function($scope,$routeParams,$location,$cookieStore,serviceUser){
			$scope.status = $routeParams.status;
			$scope.user = $cookieStore.get('user');
			if($scope.user){
				$location.path('/user/profile');
			}
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
		}
	]);
})(angular);

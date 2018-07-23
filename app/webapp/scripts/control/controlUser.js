(function(angular){
	var app = angular.module('module.control.user',[
		'ngRoute',
		'ngCookies',
		'ngAnimate',
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
		'serviceUser',
		function($scope,$routeParams,$location,serviceUser){
			$scope.status = $routeParams.status;
			$scope.user = serviceUser.getUser();
			if($scope.user){
				$location.path('/user/profile');
			}
			$scope.signin = function(user){
				serviceUser.get(user,function(status){
					alert(status.text);
				});
				$location.path('/user/profile');
				$scope.user = serviceUser.getUser();//待解决
			};
			$scope.signup = function(user,confirm){
				if(user&&confirm){
					if(angular.equals(confirm.password,user.password)){
						serviceUser.put(user);
						$scope.status = 'login';
					}else{
						alert(confirm.password+'请确认密码'+user.password);
					}
				}
			};
			$scope.signout = function(){
				serviceUser.removeUser();
			};
			$scope.changepwd = function(params){
				if(angular.equals(params.confirm,params.now)){
					serviceUser.get({
						username : $scope.user.name,
						password : params.old
					},function(status){
						if(status.statu != 0){
							serviceUser.update([
								{password : params.now},
								{id : $scope.user.UID}
							])
						}else{
							alert(status.text);//'密码错误！'
						}
					});
				}
			};
			$scope.invoke = function(){
				$scope.modal = true;
			};
			$scope.dismiss = function(){
				$scope.modal = false;
			};
		}
	]);
})(angular);

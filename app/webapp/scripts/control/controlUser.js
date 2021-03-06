(function(angular){
	var app = angular.module('module.control.user',[
		'ngRoute',
		'ngCookies',
		'ngAnimate',
		'module.service.user'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user/profile/:status',{
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
				$location.path('/user/profile/home');
			}
			$scope.signin = function(user){
				serviceUser.get(user,function(status){
					alert(status.text);
					$location.path('/user/profile/home');
				});
				$scope.user = serviceUser.getUser();//待解决
			};
			$scope.signup = function(user,confirm){
				if(user&&confirm){
					if(angular.equals(confirm.password,user.password)){
						serviceUser.put(user);
						$location.path('/user/profile/login');
					}else{
						alert(confirm.password+'请确认密码'+user.password);
					}
				}
			};
			$scope.signout = function(){
				serviceUser.removeUser();
				alert('注销成功！');
				$location.path('/user/profile');
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
			$scope.toast = function(){
				$scope.modal = !$scope.modal;
			};
		}
	]);
})(angular);

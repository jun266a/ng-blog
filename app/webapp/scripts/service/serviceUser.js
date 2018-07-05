(function(angular){
	var app = angular.module('module.service.user',[]);
	app.service('serviceUser',['$http',function($http){
		this.put = function(user){
			$http({
				method : 'post',
				url : 'user/insert',
				params : user
			}).then(function successCallback(res){
				console.log(res);
			},function errorCallback(res){
				console.log(res);
			})
		};
	}]);
})(angular);

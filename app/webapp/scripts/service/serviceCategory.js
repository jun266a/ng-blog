(function(angular){
	var app = angular.module('module.service.category',[]);
	app.service('serviceCategory',['$http',function($http){
		this.all = function(callback){
			$http.post('category/all',null)
			.then(function successCallback(res){
				callback(res.data);
			},function errorCallback(res){
				console.log(res);
			});
		};
		this.get = function(UID,callback){
			$http.post('category/select',{user:UID})
			.then(function successCallback(res){
				callback(res.data);
			},function errorCallback(res){
				console.log(res);
			});
		};
	}]);
})(angular);
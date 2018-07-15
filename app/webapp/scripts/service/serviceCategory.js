(function(angular){
	var app = angular.module('module.service.category',[]);
	app.service('serviceCategory',['$http',function($http){
		this.get = function(callback){
			$http.post('category/all',null)
			.then(function successCallback(res){
				callback(res.data);
			},function errorCallback(res){
				console.log(res);
			});
		};
	}]);
})(angular);
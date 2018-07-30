(function(angular){
	var app = angular.module('module.service.category',['ngCookies',]);
	app.service('serviceCategory',['$http','$cookieStore',function($http,$cookieStore){
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
				var categories = [];
				angular.forEach(res.data,function(item){
					this.push({
						name : item.name,
						text : item.text
					});
				},categories);
				callback({categories});
			},function errorCallback(res){
				console.log(res);
			});
		};
	}]);
})(angular);
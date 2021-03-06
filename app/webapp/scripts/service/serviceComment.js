(function(angular){
	var app = angular.module('module.service.comment',[]);
	app.service('serviceComment',['$http',function($http){
		this.all = function(intent,callback){
			$http.post('comment/all',intent)
			.then(function successCallback(res){
				callback(res.data);
			},function errorCallback(res){
				console.log(res.data);
			});
		};
		this.put = function(article,comment){
			$http.post('comment/insert',{article,comment})
			.then(function successCallback(res){
				console.log(res.data);
			},function errorCallback(res){
				console.log(res.data);
			});
		};
		this.update = function(comment,vote){
			$http.post('comment/update',[{vote},{id : comment}])
			.then(function successCallback(res){
				console.log(res.data);
			},function errorCallback(res){
				console.log(res.data);
			});
		};
	}]);
})(angular);
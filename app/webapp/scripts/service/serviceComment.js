(function(angular){
	var app = angular.module('module.service.comment',[]);
	app.service('serviceComment',['$http',function($http){
		this.all = function(article,callback){
			$http.post('comment/all',{article})
			.then(function successCallback(res){
				callback(res.data);
				console.log(res.data);
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
		this.update = function(comment,count){
			$http.post('comment/update',[{count},{id : comment}])
			.then(function successCallback(res){
				console.log(res.data);
			},function errorCallback(res){
				console.log(res.data);
			});
		};
	}]);
})(angular);
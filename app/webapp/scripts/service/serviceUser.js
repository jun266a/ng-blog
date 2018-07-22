(function(angular){
	var app = angular.module('module.service.user',['ngCookies']);
	app.service('serviceUser',['$http','$location','$cookieStore',function($http,$location,$cookieStore){
		this.put = function(user){
			$http.post('user/insert',user)
			.then(function successCallback(res){
				console.log(res.data);
				alert(res.data);
			},function errorCallback(res){
				console.log(res.data);
				alert(res.data);
			});
		};
		this.get = function(user,callback){
			$http.post('user/select',user)
			.then(function successCallback(res){
				switch (res.data.status){
					case 1:	
						$cookieStore.put('user',res.data.user);
						break;
					default:
						break;
				}
				callback({
					statu : res.data.status,
					text : res.data.statusText
				});
			},function errorCallback(res){
				console.log(res.data);
				alert(res.data);
			});
		};
		this.removeUser = function(){
			$cookieStore.remove('user');
		}
		this.replace = function(user){
			console.log(user);
			$http.post('user/replace',user)
			.then(function successCallback(res){
				console.log(res.data);
				alert(res.data.statusText);
			},function errorCallback(res){
				console.log(res.data);
				alert(res.data);
			});
		};
		this.getUser = function(){
			return $cookieStore.get('user');
		};
	}]);
})(angular);

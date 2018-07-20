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
		this.get = function(user){
			$http.post('user/select',user)
			.then(function successCallback(res){
				switch (res.data.status){
					case 0:	
						alert(res.data.statusText);
						break;
					case 1:	
						$cookieStore.put('user',res.data.user);
						alert(res.data.statusText);
						$location.path('/user/profile');
						break;
					default:
						break;
				}
			},function errorCallback(res){
				console.log(res.data);
				alert(res.data);
			});
		};
	}]);
})(angular);

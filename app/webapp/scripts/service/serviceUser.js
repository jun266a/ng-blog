(function(angular){
	var app = angular.module('module.service.user',[]);
	app.service('serviceUser',['$http',function($http){
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
						window.sessionStorage.setItem('UID',res.data.UID);
						alert(res.data.statusText);
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

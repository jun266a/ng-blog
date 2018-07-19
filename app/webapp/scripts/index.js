(function(angular){
	var app = angular.module('module.index',[
		'ngRoute',
		'module.control.list',
		'module.control.edit',
		'module.control.user'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo : '/user/login'});
	}]);
	app.run(['$rootScope','$location',function($rootScope,$location){
		// 防止FQ
		$rootScope.$on('$routeChangeStart',function(){
			//检查登录标记，过滤所有路径
			var UID = window.sessionStorage.getItem('UID');
			//广播
			$rootScope.$broadcast('UID', UID);
			//登录或者注册页面不过滤
			var USER = $location.path().startsWith('/user');
			if(!UID&&!USER){
				//强制跳转到登录或者注册页面
				$location.path('/user/login')
			}
		});
	}]);
})(angular);

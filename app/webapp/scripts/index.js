(function(angular){
	var app = angular.module('module.index',[
		'ngRoute',
		'ngCookies',
		'module.control.list',
		'module.control.edit',
		'module.control.user'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo : '/user/login'});
	}]);
	app.run([
		'$rootScope',
		'$location',
		'$cookieStore',
		function($rootScope,$location,$cookieStore){
			// 防止FQ
			$rootScope.$on('$routeChangeStart',function(event,current,pre){
				//检查登录标记，过滤所有路径
				var USER = $cookieStore.get('user');
				//登录或者注册页面不过滤
				var PATH = $location.path().startsWith('/user');
				if(!PATH&&!USER){
					//强制跳转到登录或者注册页面
					$location.path('/user/login')
				}else{
					//广播
					//$rootScope.$broadcast('UIDE', UID);
				}
			});
		}
	]);
})(angular);

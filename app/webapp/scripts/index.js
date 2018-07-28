(function(angular){
	var app = angular.module('module.index',[
		'ngRoute',
		'ngCookies',
		'module.control.list',
		'module.control.post',
		'module.control.edit',
		'module.control.user',
		'module.control.article'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo : '/user/profile/login'});
	}]);
	app.run([
		'$rootScope',
		'$location',
		'$cookieStore',
		function($rootScope,$location,$cookieStore){
			// 防止FQ
			$rootScope.$on('$routeChangeStart',function(event,current,pre){
				//检查登录标记
				$rootScope.USER = $cookieStore.get('user');
				//过滤关于用户的所有路径
				var PATH = $location.path().startsWith('/user');
				//登录或者注册页面不过滤
				var PROFILE = $location.path().startsWith('/user/profile');
				if(PATH&&!$rootScope.USER&&!PROFILE){
					//强制跳转到登录页面
					$location.path('/user/profile/login')
				}
				$rootScope.$location = $location;
				//规避数据绑定的方法
				$rootScope.$watch('$location.path()',function (now, old) {
		            $rootScope.path = now;
		        });
			});
		}
	]);
})(angular);

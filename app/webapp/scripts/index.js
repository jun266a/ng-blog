(function(angular){
	var app = angular.module('module.index',[
		'ngRoute',
		'module.control.list',
		'module.control.edit',
		'module.control.user'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo : '/user'});
	}]);
})(angular);

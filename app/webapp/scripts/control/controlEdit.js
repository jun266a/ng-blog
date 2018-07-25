(function(angular){
	var app = angular.module('module.control.edit',[
		'ngRoute',
		'ngCookies',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user/edit',{
			controller : 'controlEdit',
			templateUrl : './views/viewEdit.html'
		})
	}]);
	app.controller('controlEdit',[
		'$scope',
		'serviceUser',
		'serviceArticle',
		'serviceCategory',
		function($scope,serviceUser,serviceArticle,serviceCategory){
			$scope.user = serviceUser.getUser();
			console.log($scope.user );
			serviceCategory.all(function(data){
				$scope.categories = data;
			});
			$scope.save = function(article){
				article.user = $scope.user.UID;
				article.date = new Date().toLocaleDateString();
				article.statu = 0;
				console.log(article);
				serviceArticle.put(article);
			}
		}
	]);
})(angular);

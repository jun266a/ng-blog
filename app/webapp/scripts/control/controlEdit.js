(function(angular){
	var app = angular.module('module.control.edit',[
		'ngRoute',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/edit',{
			controller : 'controlEdit',
			templateUrl : './views/viewEdit.html'
		})
	}]);
	app.controller('controlEdit',[
		'$scope',
		'serviceArticle',
		'serviceCategory',
		function($scope,serviceArticle,serviceCategory){
			$scope.$on('UID',function(e,m){
				//未完成
				$scope.UID = m;
			});
			serviceCategory.all(function(data){
				$scope.categories = data;
			});
			$scope.save = function(article){
				article.user = $scope.UID;
				article.date = new Date().toLocaleDateString();
				article.statu = 0;
				console.log(article);
//				serviceArticle.put(article);
			}
		}
	]);
})(angular);

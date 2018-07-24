(function(angular){
	var app = angular.module('module.control.article',[
		'ngRoute',
		'module.service.article',
		'module.service.comment'
	]);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/article/:id',{
			controller : 'controlArticle',
			templateUrl : './views/viewArticle.html'
		});
	}]);
	app.controller('controlArticle',[
		'$scope',
		'$routeParams',
		'serviceArticle',
		'serviceComment',
		function($scope,$routeParams,serviceArticle,serviceComment){
			serviceArticle.get($routeParams.id,function(data){
				$scope.article = data[0];
				$scope.all();
			});
			$scope.all = function(){
				serviceComment.all($scope.article.id,function(data){
					$scope.comments = data;
				});
			};
			$scope.commit = function(comment){
				serviceComment.put($scope.article.id,comment);
				$scope.all();
			};
			$scope.append = function(comment,count){
				serviceComment.update(comment,++count);
				$scope.all();
			};
		}
	]);
})(angular);

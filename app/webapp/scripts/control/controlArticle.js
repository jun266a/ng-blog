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
			//加载当前博客的所有评论
			$scope.all = function(){
				serviceComment.all($scope.article.id,function(data){
					$scope.comments = data;
				});
			};
			serviceArticle.get($routeParams.id,function(data){
				$scope.article = data[0];
				$scope.all();
			});
			$scope.commit = function(comment){
				serviceComment.put($scope.article.id,comment);
				$scope.all();
			};
			$scope.vote = function(comment,vote){
				serviceComment.update(comment,++vote);
				$scope.all();
			};
			//根据评论的票数决定样式
			$scope.color = function(vote){
				if (vote>=1 && vote<3) {
					return 'btn-default';
				}else if(vote>=3 && vote<6){
					return 'btn-success';
				}else if(vote>=6 && vote<10){
					return 'btn-info';
				}else{
					return 'btn-primary';
				}
			};
		}
	]);
})(angular);

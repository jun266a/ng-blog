(function(angular){
	var app = angular.module('module.control.edit',[
		'ngRoute',
		'ngCookies',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user/edit/:article',{
			controller : 'controlEdit',
			templateUrl : './views/viewEdit.html'
		})
	}]);
	app.controller('controlEdit',[
		'$scope',
		'$routeParams',
		'serviceUser',
		'serviceArticle',
		'serviceCategory',
		function($scope,$routeParams,serviceUser,serviceArticle,serviceCategory){
			$scope.user = serviceUser.getUser();
			//angular.isNumber($scope.$eval(str or num))
			//这是‘唯一’成功的区别字符串和数字的方式，不论是Number()、parseInt()、$parse()[注入]都不能很好的区分
			//
			//根据路由参数博客的id值查询数据，填充到博客编辑页面上
			if(angular.isNumber($scope.$eval($routeParams.article))){
				serviceArticle.get($routeParams.article,function(data){
					$scope.article = data;
					$scope.article.category = $scope.article.category.id;
				});
			}
			serviceCategory.all(function(data){
				$scope.categories = data;
			});
			$scope.post = function(article,statu){
				article.user = $scope.user.UID;
				article.date = article.date? article.date :new Date().toLocaleDateString();
				article.statu = statu;
				serviceArticle.put(article);
			};
		}
	]);
})(angular);

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
		'$location',
		'serviceUser',
		'serviceArticle',
		'serviceCategory',
		function($scope,$routeParams,$location,serviceUser,serviceArticle,serviceCategory){
			$scope.user = serviceUser.getUser();
			//angular.isNumber($scope.$eval(str or num))
			//这是‘唯一’成功的区别字符串和数字的方式，不论是Number()、parseInt()、$parse()[注入]都不能很好的区分
			//
			//根据路由参数博客的id值查询数据，填充到博客编辑页面上
			if(angular.isNumber($scope.$eval($routeParams.article))){
				serviceArticle.get({id : $routeParams.article},function(data){
					$scope.article = data;
					$scope.article.category = $scope.article.category.id;
				});
			}
			serviceCategory.all(function(data){
				$scope.categories = data;
			});
			$scope.save = function(article,statu){
				article.user = $scope.user.UID;
				article.date = article.date? article.date :new Date().toLocaleDateString();
				article.statu = statu;
				id = article.id;
				if(id){
					//根据博客的id，区别提交是插入还是更新
					//当有博客的id时，提交是更新
					delete article.id;
					serviceArticle.update(article,id);
					$location.path('/user/post/all');
				}else{
					//当没有博客的id时，提交是出插入
					serviceArticle.put(article);
					$location.path('/user/post/all');
				}
			};
		}
	]);
})(angular);

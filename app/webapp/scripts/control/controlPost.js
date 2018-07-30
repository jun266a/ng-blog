(function(angular){
	var app = angular.module('module.control.post',[
		'ngRoute',
		'ngCookies',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/user/post/:status',{
				controller : 'controlPost',
				templateUrl : './views/viewPost.html'
			});
	}]);
	app.controller('controlPost',[
		'$scope',
		'$location',
		'$routeParams',
		'serviceUser',
		'serviceArticle',
		'serviceCategory',
		function($scope,$location,$routeParams,serviceUser,serviceArticle,serviceCategory){
			$scope.user = serviceUser.getUser();
        	$scope.status = $routeParams.status;
        	//将监听路由状态部分迁移到index.js，由根域监听
	        //检查用户的分类user.categories，
	        if(angular.isUndefined($scope.user.categories)){
	        	//没有就去请求
	        	serviceCategory.get($scope.user.UID,function(results){
	        		//将请求到的分类数据更新到用户数据上
	        		serviceUser.updateUser(results);
	        	});
	        }
	        $scope.categories = $scope.user.categories;
	        switch ($scope.status){
	        	case 'all':
	        		$scope.statu = 1;
	        		break;
	        	case 'draft':
	        		$scope.statu = 0;
	        		break;
	        	case 'deleted':
	        		$scope.statu = -1;
	        		break;
	        	default:
	        		break;
	        }
			$scope.articles = serviceArticle.getArticles([{user :$scope.user.UID},{statu : $scope.statu}]);
		}
	]);
})(angular);

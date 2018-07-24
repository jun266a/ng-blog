(function(angular){
	var app = angular.module('module.control.list',[
		'ngRoute',
		'ngCookies',
		'module.service.article',
		'module.service.category'
	]);
	app.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/list/:status',{
				controller : 'controlList',
				templateUrl : './views/viewList.html'
			});
	}]);
	app.controller('controlList',[
		'$scope',
		'$location',
		'$routeParams',
		'serviceUser',
		'serviceArticle',
		'serviceCategory',
		function($scope,$location,$routeParams,serviceUser,serviceArticle,serviceCategory){
			$scope.user = serviceUser.getUser();
        	$scope.$location = $location;
        	$scope.status = $routeParams.status;
        	$scope.$watch('$location.path()',function (now, old) {
	            $scope.path = now;
	        });
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
					$scope.articles = serviceArticle.get([{user :$scope.user.UID},{statu : 1}]);
	        		break;
	        	case 'draft':
					$scope.articles = serviceArticle.get([{user :$scope.user.UID},{statu : 0}]);
	        		break;
	        	case 'deleted':
					$scope.articles = serviceArticle.get([{user :$scope.user.UID},{statu : -1}]);
	        		break;
	        	default:
	        		break;
	        }

		}
	]);
})(angular);

(function(angular){
	var app = angular.module('module.service.article',[]);
	app.service('serviceArticle',['$http',function($http){
		this.get = function(){
			
		};
		this.put = function(article){
			$http({
				method : 'post',
				url : 'article/insert',
				params : article
			}).then(function successCallback(res){
				console.log(res);
			},function errorCallback(res){
				
			})
		};
	}]);
})(angular);

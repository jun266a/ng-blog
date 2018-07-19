(function(angular){
	var app = angular.module('module.service.article',[]);
	app.service('serviceArticle',['$http',function($http){
		var articles = [];
		this.get = function(UID){
			articles = [];
			$http.post('article/select',{user:UID})
			.then(function successCallback(res){
				angular.forEach(res.data,function(item){
					this.push({
						id : item.id,
						title : item.title,
						category : {
							cate : item.category,
							name : item.name
						},
						date : item.date,
						user : {
							id : item.user,
							name : item.username
						},
						statu : item.statu
					});
				},articles);
			},function errorCallback(res){
				console.log(res);
			});
			return articles;
		};
		this.put = function(article){
			$http.post('article/insert',article)
			.then(function successCallback(res){
				switch (res.data.status){
					case 0:	
						alert(res.data.statusText);
						break;
					case 1:	
						alert(res.data.statusText);
						break;
					default:
						break;
				}
			},function errorCallback(res){
				console.log(res);
			});
		};
	}]);
})(angular);

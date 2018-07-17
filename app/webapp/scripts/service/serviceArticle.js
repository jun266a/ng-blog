(function(angular){
	var app = angular.module('module.service.article',[]);
	app.service('serviceArticle',['$http',function($http){
		this.get = function(UID,callback){
			$http.post('article/select',{user:UID})
			.then(function successCallback(res){
				var arr = [];
				angular.forEach(res.data,function(item){
					arr.push({
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
				});
				callback(arr);
				console.log(arr);
			},function errorCallback(res){
				console.log(res);
			});
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

(function(angular){
	var app = angular.module('module.service.article',[]);
	app.service('serviceArticle',['$http',function($http){
		var articles = [];
		this.getArticles = function(select){
			articles = [];
			$http.post('article/all',select)
			.then(function successCallback(res){
				angular.forEach(res.data,function(item){
					this.push({
						id : item.id,
						title : item.title,
						category : {
							id : item.category,
							name : item.categoryname,
							text : item.categorytext
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
		this.get = function(intent,callback){
			articles = [];
			$http.post('article/select',intent)
			.then(function successCallback(res){
				angular.forEach(res.data,function(item,index,array){
					this.push({
						id : item.id,
						title : item.title,
						category : {
							id : item.category,
							name : item.categoryname,
							text : item.categorytext
						},
						date : item.date,
						content : item.content,
						user : {
							id : item.user,
							name : item.username
						},
						statu : item.statu
					});
				},articles);
				callback(articles[0]);
			},function errorCallback(res){
				console.log(res);
			})
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
		this.update = function(article,id){
			$http.post('article/update',[article,{id}])
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

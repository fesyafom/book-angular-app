app.service('DataService', function($http){
	return {
		getBooksList: function(callback){
			$http.get('inc/book-list.json').success(callback);
		},
		getAuthors: function(callback){
			$http.get('inc/authors-list.json').success(callback);
		}
	}
});
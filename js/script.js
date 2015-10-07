var app = angular.module('App',['ngRoute']);

app.controller('BooksList', function(DataService){
	var vm = this;
	DataService.getBooksList(function(questions){
		vm.list = questions;
	});
});

app.controller('Books', function(DataService, $routeParams){
	var vm = this;
	DataService.getBooksList(function(questions){
		vm.list = questions;
		for(var i in vm.list){
			if(vm.list[i].id === $routeParams.id){
				vm.book = vm.list[i];
				break;
			}
		}
	});
});

app.controller('Author', function(DataService, $routeParams){
	var vm = this;
	DataService.getAuthors(function(questions){
		vm.list = questions;
		for(var i in vm.list){
			if(vm.list[i].id === $routeParams.id){
				vm.author = vm.list[i];
				break;
			}
		}
	});
});

app.controller('Authors', function(DataService){
	var vm = this;
	DataService.getAuthors(function(questions){
		vm.list = questions;
	});

	vm.subMenu = function(event){
		var elem = angular.element(event.target).next('.drop');
		if(elem.hasClass('active')){
			elem.removeClass('active');
		} else {
			elem.addClass('active');
		}
	}
});

app.controller('CategoryList', function(DataService, $routeParams){
	var vm = this;
	DataService.getBooksList(function(questions){
		vm.list = [];
		for(var i in questions){
			if(questions[i].categoryID === $routeParams.id){
				vm.list.push(questions[i]);
			}
		}
	});
});

app.controller('Header', function($location){
	var vm = this;
	vm.isCurrentPage = function(url){
		return $location.path() === url
	}
});

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'tpl/book-list.html'
		}).
		when('/author-list', {
			templateUrl: 'tpl/author-list.html'
		}).
		when('/book/:id', {
			templateUrl: 'tpl/book.html'
		}).
		when('/author/:id', {
			templateUrl: 'tpl/author.html'
		}).
		when('/category/:id', {
			templateUrl: 'tpl/category.html'
		}).
		otherwise({
			templateUrl: 'tpl/404.html'
		});
});
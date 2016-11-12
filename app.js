var app = angular.module('plunker', ['ngMaterial', 'ngRoute', 'ui.router']);
app.config(function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url:'/home',
		templateUrl: 'questions.html',
		controller: 'MainCtrl'
	})
	// .state('questions', {
	// 	templateUrl: 'questions.html',
	// 	controller: 'MainCtrl'
	// })
	.state('madlib', {
		templateUrl: 'madlib.html',
		controller: 'MainCtrl'
	});

	$locationProvider.html5Mode(true);
	
});
app.controller('MainCtrl', function($scope) {
	var vm = this;
	vm.data = {
		
	};
	vm.madlibbing = function () {

	};
  
	
	vm.onChange = function(cbState) {
		if (cbState === "Female") {
				vm.sex = "she";
				vm.sex2 = "her";
			}else {
				vm.sex = "he";
				vm.sex2 = "his";
			}
	};
  vm.name = 'World';
  vm.femaleName = "Nancy";
});

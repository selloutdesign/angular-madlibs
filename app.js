var app = angular.module('plunker', ['ngMaterial', 'ngRoute', 'ui.router', 'ngMessages']);
app.config(function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url:'/',
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
app.controller('MainCtrl', function($scope, $state) {
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

  vm.reset = function() {
  	vm.femaleName = "";
  	vm.jobTitle = "";
	vm.tediousTask = "";
	vm.dirtyTask = "";
	vm.celebrity = "";
	vm.uselessSkill = "";
	vm.uselessSkill = "";
	vm.adjective = "";
	vm.obnoxiousCelebrity = "";
	vm.dirtyTask = "";
	vm.hugeNumber = "";
	$state.go('home');
  };

 

  vm.submit = function(madlib) {
  	vm.formValid = madlib.$valid;
  	console.log(madlib.$valid);
  	if( madlib.$valid ) {
  	    console.log('The form is valid');
  	    $state.go('madlib');
  	} else {
  	    console.log('The form is invalid');
  	}
  };

});



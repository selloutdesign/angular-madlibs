var app = angular.module('plunker', ['ngMaterial']);

app.controller('MainCtrl', function($scope) {
	var vm = this;
	vm.data = {
		
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

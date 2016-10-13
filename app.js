var app = angular.module('plunker', ['ngMaterial']);

app.controller('MainCtrl', function($scope) {
	$scope.data = {
		
	};
  
	
	$scope.onChange = function(cbState) {
		if (cbState === "Female") {
				$scope.sex = "she";
				$scope.sex2 = "her";
			}else {
				$scope.sex = "he";
				$scope.sex2 = "his";
			}
	};
  $scope.name = 'World';
  $scope.femaleName = "Nancy";
});

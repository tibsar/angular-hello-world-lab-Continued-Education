function MainController($scope){
	$scope.name = 'Sara Tibbetts'; 
	$scope.email = 'sara.tibbetts@mail.com'; 
	$scope.phone = '01234567890'; 

}

angular
	.module('app')
	.controller('MainController', MainController);
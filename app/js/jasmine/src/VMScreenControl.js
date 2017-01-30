var respObject={
	  "status":"OK",
	  "name":"Critical VMs",
	  "description":"All my business-critical VMs.",
	  "path":"/TINTRI/CRITICAL-VMs",
	  "no_of_vms":"16",
	  "no_of_error_vms":"2"
}



var vmScreenModule = angular.module('vmScreenModule', []);


vmScreenModule.directive('vmScreen', function () {
    return {
		
        restrict: 'E',
		scope: {},
        templateUrl: "VMScreen.html",
        controller: ['$scope', function ($scope) {   		
                $scope.status = (respObject.status)?respObject.status.toUpperCase():respObject.status;
                $scope.name=respObject.name;
				$scope.description = respObject.description;
				$scope.path = respObject.path;
				$scope.numOfVMs = respObject.no_of_vms;
				$scope.numOfErrors = respObject.no_of_error_vms;
           
        }]
    };
});

vmScreenModule.config(['$locationProvider', function($locationProvider) {
  
    $locationProvider.html5Mode(true);
}]);
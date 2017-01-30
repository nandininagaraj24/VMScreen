/*var testingModule = angular.module('testingModule', []);

testingModule.controller('$scope','testingCntrl',function($scope){

	$scope.status="hello";
})*/
describe('directives', function() {

  beforeEach(module('vmScreenModule'));

  var element;
  var outerScope;
  var innerScope;

/*  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<vm-screen></vm-screen>');
debugger
    outerScope = $rootScope;
    $compile(element)(outerScope);

    innerScope = element.isolateScope();

    outerScope.$digest();
  }));*/

 

    it('should be rendered', function() {
		debugger
      var $scope = {};
		var controller = $controller('vmScreenModule.controller', { $scope: $scope });
		expect($scope.status).toBe('OK');
    });

  
});
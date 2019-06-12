var myApp = angular.module("rootApp", ['Menu']);

myApp.controller("CtrlTwo", function ($scope) {

    $scope.inputData = "angularjs";

    $scope.changeUpperCase = function () {
        $scope.inputData = $scope.inputData.toUpperCase();
    };
});

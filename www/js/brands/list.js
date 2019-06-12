myApp.controller("BrandsController", function ($scope) {
        $scope.inputData = "Tutorials Park";

        $scope.reverseData = function () {
            $scope.inputData = $scope.inputData.split("").reverse().join("");
        }
    });

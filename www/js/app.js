angular.module('myApp', [])
.controller('UserController', function($scope, $http) {
    $scope.toolbarTitle = 'List Users';
    return $http({
        url: 'http://localhost/api/v1/user',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    }).
    then(function(data, status, headers, config) {
        console.log(data);
        $scope.users = data;

    }),
    function(data, status, headers, config) {

    };

});
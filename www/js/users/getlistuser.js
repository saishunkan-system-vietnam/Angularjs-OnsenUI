myApp
.controller("UserController", function ($scope, $http) {
    $scope.toolbarTitle = 'List Users';

    return $http({
        url: 'http://localhost/api/v1/user',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imh1bmdodDExODhAZ21haWwuY29tIiwibmFtZSI6Ikh1bmdIVCJ9.Tnmx_FNfQYUOX-QVUux9paDJ3di55tBnGME7vI2vtA0',
        },
    }).then(function (response) {
        var url = response.data.payload.baseUrl;
        if (response.data.payload.lstUser.length === 0) {
            $scope.label = 'No results were found!';
        }
        console.log(response.data.payload);
        $scope.users = response.data.payload.lstUser;
        $scope.imgAvatar = url + '/';
        $scope.noImg = url.replace('/uploads/files/users', '/img/not-available.jpg');
    }),
    function (error) {
        $scope.error = ('Search error: ', error);
    };
});

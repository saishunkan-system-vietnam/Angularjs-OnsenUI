myApp.controller('BrandEditController', function ($scope, $http) {
    var data = $scope.myNavigator.topPage.data;
    $http({
        url: 'http://localhost/api/v1/brand/view/' + data.id,
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imh1bmdodDExODhAZ21haWwuY29tIiwibmFtZSI6Ikh1bmdIVCJ9.Tnmx_FNfQYUOX-QVUux9paDJ3di55tBnGME7vI2vtA0',
        },
    }).then(function (res) {
        if (res.data) {
            var brands = res.data.payload.brand;
            $scope.name = brands.brand_name;
        }
    });

    $scope.onSave = function () {
        ons.notification.confirm({
            message: 'Are you sure you want to continue?',
            callback: function (idx) {
                if (idx === 1) {
                    $http({
                        url: 'http://localhost/api/v1/brand/edit',
                        method: 'POST',
                        data: { id: data.id, brand_name: $scope.name },
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imh1bmdodDExODhAZ21haWwuY29tIiwibmFtZSI6Ikh1bmdIVCJ9.Tnmx_FNfQYUOX-QVUux9paDJ3di55tBnGME7vI2vtA0',
                        },
                    }).then(function (res) {
                        var _message = "";
                        var message = res.data.payload.message;
                        if (res.data['0'] === 200) {
                            _message = message
                            document.querySelector('ons-navigator').resetToPage('brandList.html');
                            myNavigator.popPage();
                        } else {
                            var obj = message;
                            if (typeof obj === 'object') {
                                for (const key in obj) {
                                    for (const k in obj[key]) {
                                        mes = key + ": " + obj[key][k];
                                        _message += _message !== "" ? "<br>" + mes : mes;
                                    }
                                }
                            } else {
                                _message = message;
                            }
                        }
                        ons.notification.toast(_message, { timeout: 3000 });
                    });
                }
            }
        });
    }
});
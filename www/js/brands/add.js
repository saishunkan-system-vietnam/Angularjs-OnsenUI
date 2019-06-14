myApp.controller('BrandAddController', function ($scope, $http) {
    $scope.onSave = function () {
        $http({
            url: 'http://localhost/api/v1/brand/add',
            method: 'POST',
            data: { brand_name: $scope.name },
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
});
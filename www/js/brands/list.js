myApp.controller("BrandsController", function ($scope, $http) {
    $http({
        url: 'http://localhost/api/v1/brand',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imh1bmdodDExODhAZ21haWwuY29tIiwibmFtZSI6Ikh1bmdIVCJ9.Tnmx_FNfQYUOX-QVUux9paDJ3di55tBnGME7vI2vtA0',
        },
    }).then(function (res) {
        if (res.data) {
            $scope.brands = res.data.payload.lstBrands;
        }
    });

    $scope.onDelete = function (id) {       
        ons.notification.confirm({
                message: 'Are you sure you want to delete?',
                callback: function (idx) {
                    if (idx === 1) {
                        $http({
                            url: 'http://localhost/api/v1/brand/delete',
                            method: 'POST',
                            data: { id: id },
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
                                var btn=document.getElementById(id);
                                var row=btn.parentNode.parentNode.rowIndex;
                                document.getElementById("myTable").deleteRow(row);                         
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



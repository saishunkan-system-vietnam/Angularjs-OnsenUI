var myApp = angular.module("rootApp", ['onsen']);

ons.ready(function() {
    console.log("Onsen UI is ready!");
});
if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

myApp.controller('diaLog', function ($scope, $window) {
    $scope.ShowConfirm = function () {
        if ($window.confirm("Please confirm?")) {
            $scope.Message = "You clicked YES.";
        } else {
            $scope.Message = "You clicked NO.";
        }
    }
});

myApp.directive("confirmPopupText",confirmPopupText);
confirmPopupText.$inject = ['$uibModal', '$compile', '$parse'];
function confirmPopupText (  $modal,   $compile, $parse){
    var directive = {};
    directive.restrict = 'A';
    directive.link= function(scope, elem, attrs) {

        // get reference of ngClick func
        var model = $parse(attrs.ngClick);

        // remove ngClick and handler func
        elem.prop('ng-click', null).off('click');

        elem.bind('click' , function(e) {
            e.stopImmediatePropagation();
            console.log('Clicked');

            $modal.open({
                template: '<div class="modal-header">'+attrs.confirmPopupHeader+'</div>'+'<div class="modal-body">'+attrs.confirmPopupText+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" data-ng-click="ok()">Yes</button>'+'<button class="btn btn-warning" data-ng-click="cancel()">No</button>'+'</div>',
                controller: function($scope, $uibModalInstance) {
                    $scope.ok = function () {
                        $uibModalInstance.close();

                        // this line will invoke ngClick func from outer scope
                        model(scope);
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            });

        });
    };
    return directive;
}

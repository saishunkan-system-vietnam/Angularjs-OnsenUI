var myApp = angular.module("rootApp", ['onsen']);

ons.ready(function() {
    console.log("Onsen UI is ready!");
});
if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

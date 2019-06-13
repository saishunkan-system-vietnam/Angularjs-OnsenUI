myApp.controller('Menu', function($scope) {
    $scope.load = function(page) {
        mySplitter.content.load(page)
            .then(function() {
                mySplitter.left.close();
            });
    };
});

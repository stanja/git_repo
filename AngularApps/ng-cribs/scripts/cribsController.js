angular
    .module('ngCribs')
    .controller('cribsController', ['$scope', 'cribsFactory', function ($scope, cribsFactory) {

       /* var self = this;
        self.cribsFactory = {};*/

        cribsFactory.getCribs()
            .then(function (response) {
                console.log(response.data);
                $scope.cribs = (response.data);
                console.log($scope.cribs);
            }, function (error) {
                console.log(error);
            })

    }]);



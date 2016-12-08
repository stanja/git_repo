angular
    .module('ngCribs')
    .controller('cribsController', ['$scope', 'cribsFactory', function ($scope, cribsFactory) {

        $scope.cribs;
        cribsFactory.getCribs()
            .then(function (response) {
                $scope.cribs = (response.data);
                console.log($scope.cribs);
            }, function (error) {
                console.log(error);
            })
        /* inicijalizovali smo vrednosti za min i max priceInfo kako nam stranica ne bi bila prazna dok ne izaberemo vrednosti u drop baru*/
        $scope.priceInfo = {
            min: 0,
            max: 1000000
        }

        /* addCrib function - za dodavanje nove nekretnine na web stranici*/
        $scope.newListing = {};

        $scope.addCrib = function (newListing) {
            newListing.image = 'default-crib';
            $scope.cribs.push(newListing);
            $scope.newListing = {};
        }

        /* editCrib function - za editovanje postojecih podataka u nekretninama*/
        $scope.existingListing = {};

        $scope.editCrib = function (crib) {
            $scope.editListing = true;
            $scope.existingListing = crib;
        }

        /* saveCribEdit function - snimanje editovanih u postojecim nekretninama na buttonu Save*/
        $scope.saveCribEdit = function () {
            $scope.existingListing = {};
            $scope.editListing = false;
        }
        /* deleteCribEdit function - brisanje citave nekretne */
        $scope.deleteCribEdit = function (listing) {
             var index = $scope.cribs.indexOf(listing);
             $scope.cribs.splice(index, 1);
             $scope.existingListing = {};
             $scope.editListing = false;
        }
    }]);



angular
    .module('ngCribs')
    .factory('cribsFactory', ['$http', function ($http) {

        var cribsFactory = {};
        cribsFactory.getCribs = function () {
            return $http.get('http://localhost:8000/data/data.json')
        }
        return cribsFactory;

    }]);
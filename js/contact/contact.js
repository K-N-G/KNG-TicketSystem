"use strict";

angular.module("KNGSoftware.contact",['KNGSoftware.authentication'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact',{
            templateUrl: 'js/contact/contact.html',
            controller: 'contactController'
        });
    }])
    .controller('contactController',['$scope','authentication',function($scope,authentication){
        $scope.contact = {
            "name": "contact"
        };
        $scope.isLogged = authentication.hasLoggedUser();
    }]);
"use strict";

angular.module("KNGTicketSystem.contact",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact',{
            templateUrl: 'js/contact/contact.html',
            controller: 'contactController'
        });
    }])
    .controller('contactController',['$scope',function($scope){
        $scope.contact = {
            "name": "contact",
        };
    }]);
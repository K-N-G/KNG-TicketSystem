"use strict";

angular.module("KNGSoftware.dashboard",[])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard',{
            templateUrl: 'js/ticketSystem/dashboard.html',
            controller: 'dashboardController'
        });
    }])
    .controller('dashboardController',['$scope','authentication',function($scope,authentication){
        $scope.dashboard = {
            "name": "dashboard"
        };
        $scope.isLogged = authentication.hasLoggedUser;
    }]);
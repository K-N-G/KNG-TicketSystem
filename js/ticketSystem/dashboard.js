"use strict";

angular.module("KNGSoftware.dashboard",[])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard',{
            templateUrl: 'js/ticketSystem/dashboard.html',
            controller: 'dashboardController'
        });
    }])
    .controller('dashboardController',['$scope',function($scope){
        $scope.dashboard = {
            "name": "dashboard"
        };
    }]);
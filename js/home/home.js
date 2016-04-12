"use strict";

angular.module("KNGSoftware.home",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home',{
            templateUrl: 'js/home/home.html',
            controller: 'homeController'
        });
    }])
    .controller('homeController',['$scope',function($scope){
        $scope.home = {
            "name": "home"
        };
    }]);
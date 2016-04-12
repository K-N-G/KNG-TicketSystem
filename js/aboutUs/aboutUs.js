"use strict";

angular.module("KNGSoftware.aboutUs",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/aboutUs',{
            templateUrl: 'js/aboutUs/aboutUs.html',
            controller: 'aboutUsController'
        });
    }])
    .controller('aboutUsController',['$scope',function($scope){
        $scope.aboutUs = {
            "name": "aboutUs"
        };
    }]);
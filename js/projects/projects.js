"use strict";

angular.module("KNGSoftware.projects",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects',{
            templateUrl: 'js/projects/projects.html',
            controller: 'projectsController'
        });
    }])
    .controller('projectsController',['$scope',function($scope){
        $scope.projects = {
            "name": "projects"
        };
    }]);
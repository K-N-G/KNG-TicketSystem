"use strict";

angular.module("KNGSoftware.KNGProjects",['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/KNGProjects',{
            templateUrl: 'js/saitProjects/KNGProjects.html',
            controller: 'projectsController'
        });
    }])
    .controller('KNGProjectsController',['$scope',function($scope){
        $scope.projects = [
            {
                "h3": "Online магазин за машини и инструменти",
                "href": "http://goodprice.bg",
                "src": ".../../picture/goodprice.png",
                "alt": "Goodprice logo"
            },
            {
                "h3": "Online магазин за красота",
                "href": "http://goodface.eu",
                "src": ".../../picture/goodface.png",
                "alt": "Goodface logo"
            },
            {
                "h3": "Българския форум",
                "href": "http://forum-bulgaria.eu",
                "src": ".../../picture/forum-bulgaria.png",
                "alt": "Forum Bulgaria logo"
            }
        ];
    }]);
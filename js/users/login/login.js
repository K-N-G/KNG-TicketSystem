"use strict";

angular.module("KNGSoftware.login",['KNGSoftware.authentication'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login',{
            templateUrl: 'js/users/login/login.html',
            controller: 'loginController'
        });
    }])
    .controller('loginController',[
        '$scope',
        'authentication',
        function($scope,authentication){
        $scope.login = function(user){
            authentication.loginUser(user)
                .then(function(loginUser){
                    console.log(loginUser);
                });
        };
    }]);
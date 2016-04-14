"use strict";

angular.module("KNGSoftware.register",['KNGSoftware.authentication'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register',{
            templateUrl: 'js/users/register/register.html',
            controller: 'registerController'
        });
    }])
    .controller('registerController',[
        '$scope',
        'authentication',
        function($scope,authentication){
        $scope.register = function(user){
            authentication.registerUser(user)
                .then(function(registerUser){
                  console.log(registerUser);
                });
        };
    }]);
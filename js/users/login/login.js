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
        '$location',
        'notifyService',
        function($scope,authentication,$location,notifyService){
        $scope.login = function(user){
            authentication.loginUser(user)
                .then(function(responce){
                    sessionStorage['authToken'] = responce.access_token;
                    notifyService.showInfo('Login successfull');
                    $location.path('/dashboard');
                },
                function (error) {
                    notifyService.showError('Login failed', error);
                });


        };
            $scope.isLogged = authentication.hasLoggedUser();
    }]);
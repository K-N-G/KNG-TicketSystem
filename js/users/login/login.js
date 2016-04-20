"use strict";

angular.module("KNGSoftware.login",[])
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
        'identity',
        function($scope,authentication,$location,notifyService,identity){
        $scope.login = function(user){
            authentication.loginUser(user)
                .then(function (responce) {
                    sessionStorage['authToken'] = responce.access_token;
                    notifyService.showInfo('Login successfull');
                    identity.getCurrentUser()
                        .then(
                        function(data){
                            sessionStorage['currentUser'] = JSON.stringify(data);
                            $location.path('/dashboard')
                        },
                        function(error){
                            console.log(error);
                        }
                    )
                },
                function (error) {
                    notifyService.showError('Login failed', error);
                });


        };
            $scope.isLogged = identity.hasLoggedUser();
            $scope.isAdmin = identity.isAdmin();
            console.log($scope.isLogged);
            console.log($scope.isAdmin);
    }]);
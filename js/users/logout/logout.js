"use strict";

angular.module("KNGSoftware.logout",['KNGSoftware.authentication'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/logout',{
            templateUrl: 'js/users/logout/logout.html',
            controller: 'logoutController'
        });
    }])
    .controller('logoutController',[
        '$scope',
        'authentication',
        '$location',
        'notifyService',
        'identity',
        function($scope,authentication,$location,notifyService,identity){
            $scope.logout = function(){
                authentication.logout()
                    .then(
                    function success(){
                        sessionStorage.clear();
                        notifyService.showInfo('Logout successfull');
                        $location.path('/login');
                    },
                    function error(error){
                        notifyService.showError('Logout unsuccessfull', error);
                    }
                )
            };

            $scope.isLogged = identity.hasLoggedUser();

            $scope.isAdmin = identity.isAdmin();
        }
    ]);
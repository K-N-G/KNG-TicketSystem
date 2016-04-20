"use strict";

angular.module('KNGSoftware.identity', [])
    .factory('identity', ['BASE_URL', '$q', '$http',
        function (BASE_URL, $q, $http) {

            function getCurrentUser(){
                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: BASE_URL + 'users/me',
                    headers: {'Authorization': 'Bearer ' + sessionStorage.authToken}
                };
                $http(request)
                    .then(function (data) {
                        deferred.resolve(data.data);
                    }, function (error) {
                        deferred.reject(error)
                    });
                return deferred.promise;
            }

            var isAdministrator = function(){
                var currentUser = undefined;
                getCurrentUser()
                    .then(
                    function(data){
                        currentUser = data.isAdmin;
                    }
                );
                return currentUser;
            };

            function isAdmin (){
                if (sessionStorage['currentUser']){
                    var current = JSON.parse(sessionStorage.currentUser);
                    return current.isAdmin;
                }
            }

            function hasLoggedUser() {
                return sessionStorage.authToken !== undefined;
            }

            return {
                hasLoggedUser: hasLoggedUser,
                getCurrentUser: getCurrentUser,
                isAdmin: isAdmin
            }
        }]);
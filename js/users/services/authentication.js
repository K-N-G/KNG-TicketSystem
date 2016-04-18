"use strict";

angular.module("KNGSoftware.authentication",[])
    .factory('authentication', [
        '$http',
        'BASE_URL',
        '$q',
        function ($http, BASE_URL,$q) {

        function registerUser(user){
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: BASE_URL + 'Account/Register',
                data: {
                    'Email': user.email,
                    'Password': user.password,
                    'ConfirmPassword': user.confirmPassword
                },
                headers: {'Content-Type': 'application/json'}
            };
            $http(request)
                .then(function(responce){
                    deferred.resolve(responce);
                },
                function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function loginUser(user){
            var deferred = $q.defer();
            var loginData = "grant_type=password&username=" + user.username + "&password=" + user.password;
            var request = {
                method: 'POST',
                url: BASE_URL + 'Token',
                data: loginData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            };
            $http(request)
                .then(function (responce){
                    deferred.resolve(responce.data);
                },
                function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function logout(){
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: BASE_URL + 'Account/Logout',
                headers:{'Authorization': 'Bearer ' + sessionStorage.authToken}
            };
            $http(request)
                .then(function (responce){
                    deferred.resolve(responce.data);
                },
                function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function hasLoggedUser() {
            return sessionStorage.authToken !== undefined;
        }

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
                    }, function (err) {
                        deferred.reject(err)
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

        return{
            registerUser: registerUser,
            loginUser: loginUser,
            logout: logout,
            hasLoggedUser: hasLoggedUser,
            getCurrentUser: getCurrentUser,
            isAdmin: isAdmin
        }

    }]);
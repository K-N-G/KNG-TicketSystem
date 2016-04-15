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

        return{
            registerUser: registerUser,
            loginUser: loginUser,
            logout: logout
        }

    }]);
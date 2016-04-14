"use strict";

angular.module("KNGSoftware.authentication",[])
    .factory('authentication', [
        '$http',
        'BASE_URL',
        '$q',
        function ($http, BASE_URL,$q) {

        function registerUser(user){
            var deferred = $q.defer();
            $http.post(BASE_URL + 'Account/Register',user)
                .then(function(response){
                    deferred.resolve(response.data);
                },function(error){

                });

            return deferred.promise;
        }
        function loginUser(user){
            var deferred = $q.defer();

            $http.post(BASE_URL + 'Token',user)
                .then(function(response){
                    deferred.resolve(response.data);
                },function(){

                });

            return deferred.promise;
        }

        function logout(){

        }

        return{
            registerUser: registerUser,
            loginUser: loginUser,
            logout: logout
        }

    }]);
"use strict";

angular.module("KNGSoftware.identity",[])
    .factory('identity',[function(){
        function hasLoggedUser() {
            return sessionStorage.authToken !== undefined;
        };

        return {
            hasLoggedUser: hasLoggedUser

        };

       /* var accessToken = 'accessToken';
        var username = 'username';
        return{
            getCurrentUser: function(){
                return{
                    username: username
                }
            },
            isAuthenticated: function(){
                return true;
            }
        }*/
    }]);
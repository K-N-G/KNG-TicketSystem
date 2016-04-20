angular.module('KNGSoftware.adminService', [])
    .factory('adminService', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL){

            function makeAdmin(userId) {
                var deferred = $q.defer();
                var request = {
                    method: 'PUT',
                    url: BASE_URL + 'Users/makeadmin',
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.authToken,
                        'Content-Type': 'application/json'
                    },
                    data: {'UserId': userId}
                };
                $http(request)
                    .then(
                    function success(data) {
                        deferred.resolve(data);
                    },
                    function error(err) {
                        deferred.reject(err);
                    }
                );
                return deferred.promise;
            }

            function getAllUsers() {
                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: BASE_URL + 'Users/',
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                console.log("vliza");
                $http(request)
                    .then(
                    function success(data) {
                        deferred.resolve(data);
                        console.log(data);
                    },
                    function error(error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            }

            return {
                makeAdmin: makeAdmin,
                getAllUsers: getAllUsers
            }
        }]);
angular.module('KNGSoftware.projectService', [])
    .factory('projectService', [
        '$http', '$q', 'BASE_URL',
        function($http, $q, BASE_URL){
            function getProjectById(id){
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'projects/' + id,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
                    .then(
                    function success(data){
                        deferred.resolve(data);
                    },
                    function error(error){
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }

            function getProjectIssues(projectId){
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'projects/' + projectId + '/Issues',
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
                    .then(
                    function success(data){
                        deferred.resolve(data);
                    },
                    function error(error){
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }

            return {
                getProjectById: getProjectById,
                getProjectIssues: getProjectIssues
            }
        }
    ]);
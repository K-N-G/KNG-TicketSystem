angular.module('KNGSoftware.allProjectService', [])
    .factory('allProjectsService', ['$http', '$q', 'BASE_URL',
        function ($http, $q, BASE_URL) {
            getAllProject = function (projectsParams) {
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'projects?filter=&pageSize=' + projectsParams.pageSize + '&pageNumber=' + projectsParams.pageNumber,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
                    .then(
                    function success(data) {
                        deferred.resolve(data);
                    },
                    function err(err) {
                        deferred.reject(err);
                    }
                );

                return deferred.promise;
            };
            return {
                getAllProjects: getAllProject
            }
        }]);
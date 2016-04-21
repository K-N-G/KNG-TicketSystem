angular.module('KNGSoftware.dashboardService', [])
    .factory('dashboardService', [
        '$http', '$q', 'BASE_URL',
        function ($http, $q, BASE_URL) {

            function getUserIssues(pageParams){
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'issues/me?orderBy=DueDate desc&pageSize=' + pageParams.pageSize + '&pageNumber=' + pageParams.pageNumber,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
                    .then(
                    function success(data){
                        deferred.resolve(data.data);
                    },
                    function error(err){
                        deferred.resolve(err);
                    }
                );

                return deferred.promise;
            }

            function getUserProjectsWhereIsLead(pageParams){
                var deferred = $q.defer();
                var id = JSON.parse(sessionStorage['currentUser']).Id;
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'projects?filter=Lead.Id="' + id + '"&pageSize='+pageParams.pageSize + '&pageNumber=' + pageParams.pageNumber,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
                    .then(
                    function success(data){
                        deferred.resolve(data.data);
                    },
                    function error(err){
                        deferred.resolve(err);
                    }
                );

                return deferred.promise;
            }

            return{
                getUserIssues: getUserIssues,
                getUserProjects: getUserProjectsWhereIsLead
            }
        }]);
angular.module('KNGSoftware.issueService', [])
    .factory('issuePageService', [
        '$http', '$q', 'BASE_URL',
        function ($http, $q, BASE_URL) {
            function getIssueById(issueId) {
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'Issues/' + issueId,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
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

            function getIssueComments (issueId){
                var deferred = $q.defer();
                var requestData = {
                    method: 'GET',
                    url: BASE_URL + 'Issues/' + issueId + '/comments',
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
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

            function changeIssueStatus (issueId, statusId){
                var deferred = $q.defer();
                var requestData = {
                    method: 'PUT',
                    url: BASE_URL + 'Issues/' + issueId + '/changestatus?statusid=' + statusId,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    }
                };
                $http(requestData)
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

            function addComment (comment, issueId){
                var deferred = $q.defer();
                var requestData = {
                    method: 'POST',
                    url: BASE_URL + 'Issues/' + issueId + '/comments',
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken
                    },
                    data:{'Text': comment}
                };
                $http(requestData)
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

            return {
                getIssueById: getIssueById,
                changeIssueStatus: changeIssueStatus,
                getIssueComments: getIssueComments,
                addComment: addComment
            }
        }
    ]);
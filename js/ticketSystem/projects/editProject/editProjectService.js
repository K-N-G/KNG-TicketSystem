angular.module('KNGSoftware.editProjectService', [])
    .factory('editProjectService', [
        '$http', '$q', 'BASE_URL',
        function($http, $q, BASE_URL){
            function editProject(project){
                var deferred = $q.defer();
                var dataLabels = '';
                project.Labels.forEach(function(label, index) {
                    dataLabels += '&labels[' + index + '].Name=' + label.trim();
                });
                var dataPriorities='';
                project.Priorities.forEach(function(priority, index) {
                    dataPriorities += '&priorities[' + index + '].Name=' + priority.trim();
                });
                var data = 'Name=' + project.Name +
                    '&Description=' + project.Description +
                    dataLabels + dataPriorities +
                    '&LeadId=' + project.LeadId;
                var requestData = {
                    method: 'PUT',
                    url: BASE_URL + 'projects/' + project.Id,
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.authToken,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data
                };
                $http(requestData)
                    .then(
                    function success(data){
                        deferred.resolve(data);
                    },
                    function error (error){
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }

            return {
                editProject: editProject
            }
        }
    ]);
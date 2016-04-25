angular.module('KNGSoftware.allProject', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/projects', {
                controller: 'AllProjectsController',
                templateUrl: 'js/ticketSystem/projects/allProject/allProject.html',
                access: {
                    requiresAdmin: true
                }
            })
    }])
    .controller('AllProjectsController', [
        '$scope', 'allProjectsService', 'notifyService',
        function ($scope, allProjectsService, notifyService) {
            $scope.projectsParams = {
                pageSize: 10,
                pageNumber: 1
            };

            $scope.getAllProjects = function () {
                allProjectsService.getAllProjects($scope.projectsParams)
                    .then(
                    function success (data) {
                        $scope.projects = data.data.Projects;
                        $scope.projectsCount = data.data.TotalPages * $scope.projectsParams.pageSize;
                    },
                    function error(error){
                        notifyService.showError('Something went wrong', error);
                    }
                );
            };

            $scope.getAllProjects();
        }]);
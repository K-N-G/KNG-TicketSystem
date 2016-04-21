angular.module('KNGSoftware.project', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/projects/:id', {
                controller: 'ProjectController',
                templateUrl: 'js/ticketSystem/projects/project/project.html',
                access: {
                    requiresLoggedUser: true
                }
            })
    }])
    .controller('ProjectController', [
        '$scope', '$routeParams', 'projectService', 'identity', 'notifyService',
        function ($scope, $routeParams, projectService, identity, notifyService) {
            getProjectById = function (id) {
                projectService.getProjectById(id)
                    .then(
                    function success(project) {
                        $scope.project = project.data;
                        identity.setProjectLeader($scope.project.Id)
                            .then(
                            function success(){
                                $scope.isProjectLeader = identity.isProjectLeader();
                            }
                        );
                    },
                    function error(err) {
                        notifyService.showError('Cannot load this project', err)
                    }
                )
            };

            getProjectIssues = function (projectId) {
                projectService.getProjectIssues(projectId)
                    .then(
                    function success(issues) {
                        $scope.projectIssues = issues.data;
                    },
                    function error(err) {
                        notifyService.showError('Cannot load issues for this project', err);
                    }
                )
            };

            getProjectById($routeParams.id);
            getProjectIssues($routeParams.id);
        }]);
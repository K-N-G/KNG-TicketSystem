angular.module('KNGSoftware.projectEdit', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/projects/edit/:id', {
                controller: 'ProjectEditController',
                templateUrl: 'js/ticketSystem/projects/editProject/editProject.html',
                access: {
                    requiresLoggedUser: true
                }
            })
    }])
    .controller('ProjectEditController', [
        '$scope', '$routeParams', '$location', 'projectService', 'notifyService',
        function ($scope, $routeParams, $location, projectService, notifyService) {
            $scope.allUsers();

            $scope.editProject = function(){
                if (typeof $scope.currentLabels==='string'){
                    $scope.currentLabels = getArrayOfWords($scope.currentLabels);
                }
                if (typeof $scope.currentPriorities==='string'){
                    $scope.currentPriorities = getArrayOfWords($scope.currentPriorities);
                }

                var projectForEdit = {
                    Id: $scope.project.Id,
                    Description: $scope.project.Description,
                    Labels: $scope.currentLabels,
                    Priorities: $scope.currentPriorities,
                    Name: $scope.project.Name,
                    LeadId: $scope.project.Lead.Id
                };

                projectService.editProject(projectForEdit)
                    .then(
                    function success(){
                        notifyService.showInfo('Project successfully edited');
                        $location.path('projects/' + $scope.project.Id);
                    },
                    function error(err){
                        notifyService.showError('Project is not edited', err);
                    }
                );
            };

            function getProjectById (id) {
                projectService.getProjectById(id)
                    .then(
                    function success(project) {
                        $scope.project = project.data;
                        $scope.currentLabels = [];
                        $scope.currentPriorities = [];
                        $scope.project.Labels.forEach(function(label){
                            $scope.currentLabels.push(label.Name);
                        });
                        $scope.project.Priorities.forEach(function(priority){
                            $scope.currentPriorities.push(priority.Name);
                        })
                    },
                    function error(err) {
                        notifyService.showError('Cannot load this project', err)
                    }
                )
            }

            function getArrayOfWords(str){
                return str.split(',');
            }

            getProjectById($routeParams.id);
        }]);
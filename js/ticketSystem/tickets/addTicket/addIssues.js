angular.module('KNGSoftware.addIssues', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/projects/add-issue/:id', {
            controller: 'AddIssueController',
            templateUrl: 'js/ticketSystem/tickets/addTicket/addIssues.html',
            access: {
                requiresLoggedUser: true
            }
        })
    }])
    .controller('AddIssueController', [
        '$scope', '$routeParams', '$location', 'addIssueService', 'projectService', 'notifyService',
        function($scope, $routeParams, $location, addIssueService, projectService, notifyService){

            projectService.getProjectById($routeParams.id)
                .then(
                function success (project){
                    $scope.projectPriorities = project.data.Priorities;
                },
                function err(err){
                    notifyService.showError('Cannot load current project at the moment', err);
                }
            );

            $scope.addIssue = function(){
                var issueToAdd = {
                    Title: $scope.addIssue.Title,
                    Description: $scope.addIssue.Description,
                    DueDate: $scope.addIssue.DueDate.toISOString(),
                    ProjectId: $routeParams.id,
                    AssigneeId: $scope.addIssue.AssigneeId,
                    PriorityId: $scope.addIssue.PriorityId,
                    Labels: $scope.addIssue.Labels.split(',')
                };
                addIssueService.addIssue(issueToAdd)
                    .then(
                    function success(){
                        $location.path('projects/' + $routeParams.id )
                    },
                    function error(err){
                        notifyService.showError('Cannto add issue', err);
                    }
                )
            }
        }
    ]);
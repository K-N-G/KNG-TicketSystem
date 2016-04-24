angular.module('KNGSoftware.addProject', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/project/add', {
            controller: 'AddProjectController',
            templateUrl: 'js/ticketSystem/projects/addProject/addProject.html',
            access: {
                requiresAdmin: true
            }
        })
    }])
    .controller('AddProjectController', [
        '$scope', '$location', 'addProjectService', 'notifyService',
        function($scope, $location, addProjectService, notifyService){

            $scope.addProject = function(project){
                project.labels = getArrayOfWords(project.labels);
                project.priorities = getArrayOfWords(project.priorities);
                addProjectService.addProject(project)
                    .then(
                    function success(data){
                        notifyService.showInfo('Successfully add project');
                        $location.path('projects/' + data.data.Id);
                    },
                    function error(error){
                        notifyService.showError('Cannot add this project', error);
                    }
                )
            };

            function getArrayOfWords(str){
                return str.split(',');
            }
        }]);
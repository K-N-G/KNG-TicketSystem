"use strict";

angular.module("KNGSoftware.dashboard",[])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard',{
            templateUrl: 'js/ticketSystem/dashboard.html',
            controller: 'dashboardController'
        });
    }])
    .controller('dashboardController',[
        '$scope',
        'authentication',
        'notifyService',
        'identity',
        'dashboardService',
        function ($scope, authentication, notifyService, identity, dashboardService) {
        $scope.isLogged = authentication.hasLoggedUser();
        $scope.hasLoggedUser = identity.hasLoggedUser;
        $scope.isAdmin = identity.isAdmin;

        $scope.issuesParams = {
            pageSize: 10,
            pageNumber: 1
        };

        $scope.projectsParams = {
            pageSize: 7,
            pageNumber: 1
        };

        $scope.getUserIssues = function () {
            dashboardService.getUserIssues($scope.issuesParams)
                .then(
                function success(data) {
                    $scope.userIssues = data.Issues;
                    $scope.issuesCount = data.TotalPages * $scope.issuesParams.pageSize;
                },
                function error(err) {
                    notifyService.showError('Cannot load issues at the moment', err);
                }
            )
        };

        $scope.getAssociatedProjects = function(){
            dashboardService.getUserProjects($scope.projectsParams)
                .then(
                function success(projects){
                    $scope.projectsCount = projects.TotalPages * $scope.projectsParams.pageSize;
                    $scope.projectsWhereLead = projects.Projects;
                },
                function error(err){
                    console.log(err);
                }
            );
        };

        if ($scope.hasLoggedUser()) {
            $scope.getUserIssues();
            $scope.getAssociatedProjects();
        }
    }]);
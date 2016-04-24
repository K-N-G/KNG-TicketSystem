'use strict';

angular.module('KNGSoftware', [
    'ngRoute',
    'KNGSoftware.home',
    'KNGSoftware.aboutUs',
    'KNGSoftware.services',
    'KNGSoftware.projects',
    'KNGSoftware.authentication',
    'KNGSoftware.identity',
    'KNGSoftware.login',
    'KNGSoftware.register',
    'KNGSoftware.logout',
    'KNGSoftware.changePassword',
    'KNGSoftware.dashboard',
    'KNGSoftware.dashboardService',
    'KNGSoftware.notifyService',
    'KNGSoftware.contact',
    'KNGSoftware.admin',
    'KNGSoftware.adminService',
    'KNGSoftware.project',
    'KNGSoftware.projectService',
    'KNGSoftware.projectEdit',
    'KNGSoftware.editProjectService',
    'KNGSoftware.addProject',
    'KNGSoftware.addProjectService'


])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');


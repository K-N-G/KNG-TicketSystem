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
    'KNGSoftware.notifyService',
    'KNGSoftware.contact',
    'KNGSoftware.adminService',
    'KNGSoftware.admin'


])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');


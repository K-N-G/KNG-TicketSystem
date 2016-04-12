'use strict';

angular.module('KNGSoftware', [
    'ngRoute',
    'KNGSoftware.home',
    'KNGSoftware.aboutUs',
    'KNGSoftware.services',
    'KNGSoftware.projects',
    //'KNGSoftware.ticketSystem',
    'KNGSoftware.contact'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);


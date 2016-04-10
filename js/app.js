'use strict';

angular.module('KNGTicketSystem', [
    'ngRoute',
    'KNGTicketSystem.home',
    'KNGTicketSystem.contact'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);


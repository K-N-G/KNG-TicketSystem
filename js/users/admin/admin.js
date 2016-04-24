angular.module('KNGSoftware.admin', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin', {
            controller: 'adminController',
            templateUrl: 'js/users/admin/admin.html'
        })
    }])
    .controller('adminController', [
        '$scope',
        'adminService',
        'notifyService',
        'dashboard',
        function ($scope, adminService, notifyService,dashboard) {
            $scope.allUsers();

            $scope.makeAdmin = function (userId) {
                adminService.makeAdmin(userId)
                    .then(
                    function success() {
                        $scope.allUsers();
                        notifyService.showInfo('Successfully made this user admin');
                    }
                )
            };

        }]);
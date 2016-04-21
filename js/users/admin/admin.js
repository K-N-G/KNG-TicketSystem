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
        function ($scope, adminService, notifyService) {


            $scope.makeAdmin = function (userId) {
                adminService.makeAdmin(userId)
                    .then(
                    function success() {
                        $scope.allUsers();
                        notifyService.showInfo('Successfully made this user admin');
                    }
                )
            };

            $scope.allUsers = function(){
                adminService.getAllUsers()
                    .then(
                    function success(data){
                        $scope.users = data.data;
                    },
                    function error(err){
                        console.log(err);
                    }
                );
            };
            $scope.users = $scope.allUsers();
        }]);
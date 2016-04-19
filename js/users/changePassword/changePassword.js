angular.module('KNGSoftware.changePassword', ['KNGSoftware.authentication'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/profile/password', {
            templateUrl: 'js/users/changePassword/changePassword.html',
            controller: 'changePasswordController'
        })
    }])
    .controller('changePasswordController', [
        '$scope',
        'authentication',
        'notifyService',
        function($scope, authentication, notifyService){
            $scope.changeUserPassword = function(data){
                authentication.changePassword(data)
                    .then(
                    function success(){
                        notifyService.showInfo('Password successfully changed.');
                    },
                    function error(err){
                        notifyService.showError('Something went wrong', err);
                    }
                )
            };
        }]);
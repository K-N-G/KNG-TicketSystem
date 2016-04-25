angular.module('KNGSoftware.issueDirectives', [])
    .directive('ngComments', [function(){
        return {
            restrict: 'A',
            templateUrl: 'js/ticketSystem/tickets/ticket/comments.html'
        }
    }])
    .directive('ngStatusTable', [function(){
        return {
            restrict: 'A',
            templateUrl: 'js/ticketSystem/tickets/ticket/statusTable.html'
        }
    }])
    .directive('ngIssueInfo', [function(){
        return {
            restrict: 'A',
            templateUrl: 'js/ticketSystem/tickets/ticket/issueInfo.html'
        }
    }]);
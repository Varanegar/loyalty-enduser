(function () {
    'use strict';

    angular
           .module('membersApp')
           .controller('logincontroller', logincontroller);

    logincontroller.$inject = ['$scope', '$http', '$location', 'authenticationService'];

    function logincontroller($scope, $http, $location, authenticationService) {

        $scope.email = '';
        $scope.password = '';

        $scope.flLoading = false;

        //$scope.dsRestorelnk = function () {
        //    return $scope.email == '';
        //}

        (function initController() {
            // reset login status
            authenticationService.clearCredentials();
        })();


        $scope.requestRestorePassCode = function () {
            debugger
            $location.path('/restorePassCode');
        }

        $scope.login = function () {

            $scope.flLoading = true;

            authenticationService.login($scope.email, $scope.password, function (response) {
                authenticationService.setCredentials($scope.email, $scope.password, response.data.access_token);

                $scope.flLoading = false;

                $location.path('/');
            });
        }
    }
})();

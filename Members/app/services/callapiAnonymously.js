
angular.module('membersApp')
       .service('$callApiAnonymously', function () {

           this.call = function ($http, url, method, success, fail) {

               $http({
                   method: method,
                   url: url,

               }).then(success, function fail(response) {
                   //$scope.myWelcome = response.statusText;

                   return fail;

               });
           }
       });


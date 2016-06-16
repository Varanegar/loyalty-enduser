﻿
angular.module('membersApp')
       .config(function ($routeProvider) {
           $routeProvider
           .when("/login", {
               templateUrl: "partials/login.htm",
               controller: "logincontroller"

           })
           .when("/restorePassword", {
               templateUrl: "partials/restorePassword.htm",
               controller: "restorePasswordcontroller"
           })
           .otherwise({
               redirectTo: "/",
           })
       });
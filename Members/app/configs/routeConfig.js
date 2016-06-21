﻿
angular.module('membersApp')
       .config(function ($routeProvider) {

           $routeProvider
           .when("/login", {
               templateUrl: "partials/login.htm",
               controller: "logincontroller"
           })
           .when("/restorePassword/:uid", {
               templateUrl: "partials/restorePassword.htm",
               controller: "restorePasswordcontroller"
           })
           .when("/signup", {
               templateUrl: "partials/signup.htm",
               controller: "signupcontroller"
           })
           .when("/users", {
                templateUrl: "partials/users.htm",
                controller: "userscontroller",
           })
           .when("/editCustomer", {
               templateUrl: "partials/customer/editCustomer.html",
               controller: "customercontroller",
           })
            .when("/customers", {
                templateUrl: "partials/customer/customers.html",
                controller: "customercontroller",
            })

           .otherwise({
               redirectTo: "/",
           })
       });
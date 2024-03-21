import angular from "angular";
import ngRoute from "angular-route";
import controllers from "./controllers.module";

/**
 * Routes module initialize
 */

const routesModule = angular.module('routesModule', [ngRoute, controllers.name]);

routesModule.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .when('/tours', {
            templateUrl: "views/tours.html",
            controller: "ToursController"
        })
        .when('/about', {
            templateUrl: "views/about.html",
            controller: "AboutController"
        })
        .when('/contacts', {
            templateUrl: "views/contact-us.html",
            controller: "ContactController"
        })
        .when('/tours/:slug-:id', {
            templateUrl: "views/tour-details.html",
            controller: "DetailController"
        })
        .when('/login', {
            templateUrl: "views/login.html",
            // controller: "DetailController"
        })
        .when('/sign-up', {
            templateUrl: "views/sign-up.html",
            // controller: "DetailController"
        })
        .otherwise({
            templateUrl: "views/_/404.html"
        });
}]);

export default routesModule;
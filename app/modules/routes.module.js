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
    .when('/about', {
        templateUrl: "views/about.html",
        controller: "AboutController"
    })
}]);

export default routesModule;
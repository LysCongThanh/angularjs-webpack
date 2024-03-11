// Import AngularJS and ngRoute module
import angular from "angular";
import ngRoute from "angular-route";
import angularCSS from "angular-css";

// Import custom modules
import routesModule from "./modules/routes.module";
import directivesModule from "./modules/directives.module";

// Create the main AngularJS module 'myApp'
const app = angular.module('myApp', []);

/**
 * Apply ngRoute package
 * Add ngRoute module as a dependency to the main app module.
 * This allows the usage of ngRoute functionalities, such as routing.
 */
app.requires.push(ngRoute);

/**
 * Routes loading
 * Add the routesModule as a dependency to the main app module.
 * This ensures that the routes defined in routesModule are available for the app.
 */
app.requires.push(routesModule.name);

/**
 * Directives loading
 * Add the directivesModule as a dependency to the main app module.
 * This ensures that the directives defined in directivesModule are available for the app.
 */
app.requires.push(directivesModule.name);

/**
 * 
 */
app.requires.push(angularCSS);

/**
 * Configs loading
 * Configure the app by enabling HTML5 mode for clean URLs.
 * This configuration enhances the user experience by providing cleaner and more readable URLs.
 */
app.config(['$locationProvider', ($locationProvider) => {
    // Enable HTML5 Mode for cleaner URLs
    $locationProvider.html5Mode(true);
}]);

/**
 * App constructor
 */
app.run(['$css', ($css) => {
    $css.add('./assets/css/soft-design-system.css');
    $css.add('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
    $css.add('./assets/css/nucleo-svg.css')
}])
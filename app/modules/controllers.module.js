import angular from "angular";
import controllers from "../controllers/controllers";

const controllersModule = angular.module('controllersModule', []);

controllersModule.controller('HomeController', controllers.HomeController);
controllersModule.controller('AboutController', controllers.AboutController);

export default controllersModule;
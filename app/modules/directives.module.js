import angular from "angular";
import kernel from "../directives/directives";

const directives = angular.module('directives', []);

directives.directive('headerDirective', kernel.HeaderDirective);
directives.directive('navDirective', kernel.NavDirective);

export default directives;
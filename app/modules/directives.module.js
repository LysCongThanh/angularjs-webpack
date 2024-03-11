import angular from "angular";
import headerDirective from "../directives/header.directive";

const directives = angular.module('directives', []);

directives.directive('headerDirective', headerDirective);

export default directives;
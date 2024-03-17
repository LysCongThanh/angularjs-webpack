import angular from "angular";
import kernel from "../directives/directives";

const directives = angular.module('directives', []);

directives.directive('headerDirective', kernel.HeaderDirective);
directives.directive('navDirective', kernel.NavDirective);
directives.directive('footerDirective', kernel.FooterDirective)
directives.directive('headingText', kernel.HeadingText);
export default directives;
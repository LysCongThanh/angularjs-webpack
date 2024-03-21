import angular from "angular";
import controllers from "../controllers/controllers";
import Typed from "typed.js";

const controllersModule = angular.module('controllersModule', []);

controllersModule.controller('HomeController', controllers.HomeController);
controllersModule.controller('ToursController', controllers.ToursController);
controllersModule.controller('AboutController', controllers.AboutController);
controllersModule.controller('ContactController', controllers.ContactController);
controllersModule.controller('DetailController', controllers.DetailController)

controllersModule.controller('AboutHeaderController', ($timeout) => {
    $timeout(function () {
        new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 30,
            backSpeed: 30,
            loop: true
        });
    });
})

controllersModule.controller('NavController', ($scope, $location) => {
    $scope.navigateHandler = () => {
        $location.path('/tours');
    }
});

export default controllersModule;
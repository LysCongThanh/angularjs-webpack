const HomeController = ($scope, $css) => {
    document.title = "Trang chủ";
    $scope.title = "Trang chủ";

    $css.add('./assets/css/soft-design-system.css');

}

export default HomeController;
import headerTemplate from "../views/blocks/header.html";

const HeaderDirective = () => {
    return {
        restrict: "E",
        template: headerTemplate
    }
}

export default HeaderDirective;
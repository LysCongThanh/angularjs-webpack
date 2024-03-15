import headerTemplate from "../views/blocks/header.html";
import navTemplate from "../views/blocks/nav.html";

const NavDirective = () => {
    return {
        restrict: "E",
        template: navTemplate
    }
}

const HeaderDirective = () => {
    return {
        restrict: "E",
        template: headerTemplate
    }
}

const directives = {
    HeaderDirective,
    NavDirective
}

export default directives;
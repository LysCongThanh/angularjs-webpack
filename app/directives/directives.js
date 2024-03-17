import headerTemplate from "../views/blocks/header.html";
import navTemplate from "../views/blocks/nav.html";
import footerTemplate from "../views/blocks/footer.html";
import headingTextTemplate from "../views/components/heading-text.html";

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

const FooterDirective = () => {
    return {
        restrict: "E",
        template: footerTemplate
    }
}

const HeadingText = () => {
    return {
        restrict: "E",
        template: headingTextTemplate
    }
}

const directives = {
    HeaderDirective,
    NavDirective,
    FooterDirective,
    HeadingText
}

export default directives;
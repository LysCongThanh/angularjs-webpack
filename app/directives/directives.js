import headerTemplate from "../views/blocks/header.html";
import navTemplate from "../views/blocks/nav.html";
import footerTemplate from "../views/blocks/footer.html";
import headingTextTemplate from "../views/components/heading-text.html";
import contactUsTemplate from "../views/components/contact-us.html";
import toursHeaderTemplate from "../views/blocks/tours-header.html";
import aboutHeaderTemplate from "../views/blocks/about-header.html";
import headerStickyTemplate from "../views/blocks/header-sticky.html";
import footerBasicTemplate from "../views/blocks/footer-basic.html";

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

const HeaderStickyDirective = () => {
    return {
        restrict: "E",
        template: headerStickyTemplate
    }
}

const ToursHeaderDirective = () => {
    return {
        restrict: "E",
        template: toursHeaderTemplate
    }
}

const AboutHeaderDirective = () => {
    return {
        restrict: "E",
        template: aboutHeaderTemplate
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
        scope: {
            title: '@',
            content: '@'
        },
        template: headingTextTemplate
    }
}

const ContactUs = () => {
    return {
        restrict: "E",
        template: contactUsTemplate
    }
}

const directives = {
    HeaderDirective,
    NavDirective,
    FooterDirective,
    HeadingText,
    ContactUs,
    ToursHeaderDirective,
    AboutHeaderDirective,
}

export default directives;
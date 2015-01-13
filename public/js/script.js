angular.module('ngup', ['router'])
    .controller("indexController", package.controller.index)
    .controller("headerController", package.controller.header)
    .controller("footerController", package.controller.footer)
    .controller("htttController", package.controller.teamHTTT)
    .controller("110001npController", package.controller.team110001NP)
    .directive("profile", package.directive.profile);
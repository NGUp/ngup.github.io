angular.module('ngup', ['router'])
    .controller("indexController", package.controller.index)
    .controller("headerController", package.controller.header)
    .controller("htttController", package.controller.teamHTTT)
    .directive("profile", package.directive.profile);
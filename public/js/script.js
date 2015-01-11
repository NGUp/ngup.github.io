var ngup = angular.module('ngup', ['ngRoute']);

ngup.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'view/index.html',
            controller  : 'mainController'
        })

        .when('/httt', {
            templateUrl : 'view/httt.html',
            controller  : 'aboutController'
        })

        .when('/110001np', {
            templateUrl : 'view/110001np.html',
            controller  : 'contactController'
        });
});
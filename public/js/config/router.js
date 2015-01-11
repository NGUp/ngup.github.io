angular.module('router', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'view/index.html',
                controller  : 'indexController'
            })

            .when('/httt', {
                templateUrl : 'view/httt.html',
                controller  : 'htttController'
            })

            .when('/110001np', {
                templateUrl : 'view/110001np.html',
                controller  : '110001npController'
            })

            .otherwise('/');
    })
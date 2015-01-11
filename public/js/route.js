(function() {
	angular.module("route", ["ngRoute"])
		.config(function($routeProvider) {
			$routeProvider
				.when("/", {
					templateUrl: "view/index.html",
					controller: "indexController"
				})

				.when("/httt", {
					templateUrl: "view/httt.html",
					controller: "htttController"
				})

				.when("/110001NP", {
					templateUrl: "view/110001np.html",
					controller: "indexController"
				});
		});
})();
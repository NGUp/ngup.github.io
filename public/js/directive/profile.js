package.directive.profile = function() {
	return {
		scope: {
			name: '@',
			id: '@',
			birthday: '@',
			avatar: '@',
			summary: '@',
			email: '@',
			link: '@',
			visitHomePage: '@'
		},
		controller: package.controller.team110001NP,
		replace: true,
		restrict: 'E',
		templateUrl: 'view/profile.html'
	}
}
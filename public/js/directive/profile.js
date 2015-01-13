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
		controller: package.controller.profile,
		replace: true,
		restrict: 'E',
		templateUrl: 'view/profile.html'
	}
}
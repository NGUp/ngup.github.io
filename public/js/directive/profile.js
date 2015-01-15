package.directive.profile = function() {
	return {
		scope: {
			name: '@',
			id: '@',
			alias: '@',
			birthday: '@',
			summary: '@',
			email: '@',
			link: '@'
		},
		controller: package.controller.profile,
		replace: true,
		restrict: 'E',
		templateUrl: 'view/profile.html'
	}
}
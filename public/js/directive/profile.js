package.directive.profile = function() {
	return {
		scope: {
			name: '@',
			id: '@',
			birthday: '@',
			avatar: '@',
			summary: '@',
			email: '@'
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'view/profile.html'
	}
}
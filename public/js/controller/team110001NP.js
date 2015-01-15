package.controller.team110001NP = function($scope) {
	$.getJSON('/data/ngup.json', function(data) {
		// Initialize package.team.team110001NP
		package.team.team110001NP = data.team110001NP;
		package.team.teamHTTT = data.teamHTTT;

		// For first page load
		$scope.team110001NP = package.team.team110001NP;
		$scope.teamHTTT = package.team.teamHTTT;
	}).error(function(data) {
		console.log(data);
	});

	// Initialize for ngRepeat
	$scope.team110001NP = package.team.team110001NP;
};
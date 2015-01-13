package.controller.teamHTTT = function($scope) {
	$.getJSON('/data/ngup.json', function(data) {
		// Initialize package.team.team110001NP
		package.team.teamHTTT = data.teamHTTT;
		package.team.team110001NP = data.team110001NP;

		// For first page load
		$scope.teamHTTT = package.team.teamHTTT;
		$scope.team110001NP = package.team.team110001NP;
    }).error(function(data) {
    	console.log(data);
    });

    // Initialize for ngRepeat
    $scope.teamHTTT = package.team.teamHTTT;
}
package.controller.team110001NP = function($scope, $location) {
	$.getJSON('/data/ngup.json', function(data) {
		$scope.people = data.team110001NP;
    }).error(function(data) {
    	console.log(data);
    });
}
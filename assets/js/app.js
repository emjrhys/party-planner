angular.module('lego', [])

.controller('mainCtrl', function($scope) {
	var apiKey = '85sxht8kfrf85keus8du5z8u';
	var url = 'http://api.walmartlabs.com/v1/search?apiKey=85sxht8kfrf85keus8du5z8u&query=ipod&categoryId=3944';


	$scope.items = []; 
	$scope.cart = [];

	$.ajax({
	  url: url,
	  dataType: "jsonp",
	  success: function (data) {
	  	console.log(data);
	    $scope.items = data.items;
	    $scope.$apply();
	  }
	});

	$scope.addToCart = function(idx) {
		$scope.cart.push($scope.items[idx]);
		$scope.items.splice(idx, 1);
	}
});
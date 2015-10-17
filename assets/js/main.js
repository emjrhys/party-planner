var apiKey = '85sxht8kfrf85keus8du5z8u';
// var url = 'http://api.walmartlabs.com/v1/feeds/items?apiKey=85sxht8kfrf85keus8du5z8u&categoryId=3944';
var url = 'http://api.walmartlabs.com/v1/taxonomy?apiKey=' + apiKey

$.getJSON(url, function(data) {
	console.log(data);
});
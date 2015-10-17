var apiKey = '85sxht8kfrf85keus8du5z8u';
var url = 'http://api.walmartlabs.com/v1/feeds/items?apiKey=' + apiKey + '&categoryId=3891_532459_1019843';
// var url = 'http://api.walmartlabs.com/v1/taxonomy?apiKey=' + apiKey

$.getJSON(url, function(data) {
	console.log(data);
});
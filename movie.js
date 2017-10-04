'use strict'
const request = require('request');

module.exports.get = function get(movieTitle) {

	const Env = require("./env");
	const apiId = Env.apiId;
	const apiKey = Env.apiKey;

	const apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + apiId + "&q="+movieTitle+"movie&linksite=imdb.com";

	request(apiUrl, (error, response, body) => {

		if (error) throw error;

		var bodyObject = JSON.parse(body);
		var items = bodyObject.items;
		console.log(items[0].title, items[0].formattedUrl, items[0].snippet);

	});

};
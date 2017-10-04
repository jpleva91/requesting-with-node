'use strict'
var movie = require("./movie");

const readline = require('readline');

var threeFavoriteMovies = [];

const rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout

});

rl.question('What is your favorite movie?  Type Here: ', (answer1) => {

	rl.question('What is your second favorite movie?  Type Here: ', (answer2) => {

		rl.question('What is your third favorite movie?  Type Here: ', (answer3) => {

			threeFavoriteMovies.push(answer1);
			threeFavoriteMovies.push(answer2);
			threeFavoriteMovies.push(answer3);
			
			threeFavoriteMovies.forEach(function(film){
				movie.get(film);
			});
		})
	})
})


/*
	Input:
	movies - list of movie times in minutes
	flightLength - duration of the flight in minutes
	Output:
	boolean, true if there exists TWO different movies that add up EXACTLY to the flightLength, and false otherwise
	Examples:
	flightLength 160
	movies [80, 110, 40] => false
	[80, 110, 80] => true
	[20, 30, 110, 40, 50] => true
*/

/*
	Big O notation
	let n be the length of the input array (movies)
	O(some function of n) 

	O(1) - constant
	O(n) - linear
	O(n^2) - quadratic
	O(2^n) - exponential
*/
function findMovies(duration, movieArray){
	const movieObj = {}

	for(let i = 0; i < movieArray.length; i++){
		newDuration = duration - movieArray[i]
		if (movieObj[newDuration]){
	 		return true; 
		}
		movieObj[movieArray[i]] = 'any truthy value'
	}

	return false;
}

// console.log(findMovies(60,[20, 30, 110, 40, 50] )) //true
// console.log(findMovies(60,[80, 110, 40] )) //false
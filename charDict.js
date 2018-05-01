
//https://www.geeksforgeeks.org/dynamic-programming-set-32-word-break-problem/

var Promise = require('bluebird');

function dictionaryContains(word) {
	// var dictionary = ["mobile","samsung","sam","sung","man","mango", "icecream","and","go","i","like","ice","cream"];
	dictionary = ["he", "hell", "hello", "of", "for", "or"];

	return (dictionary.indexOf(word) != -1);
}

function matrix(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

function getWordArr(str) {

	return new Promise(function (resolve, reject) {
		// Create 2D array to hold allowed words
		//arr2D[start][end]
		var arr2D = matrix(str.length, str.length, 0);

		var counter = 0;

		//Iterate over all combinations to populate valid words.
		for (var start = 0; start <= str.length; start++) {

			// Want to only populate the upper half of the matrix
			for (var end = start + 1; end <= str.length; end++) {
				counter++;
				// console.log(counter);
				var testWord = str.slice(start, end);
				if (dictionaryContains(testWord)) {
					// Word is contained, update start/end combo
					arr2D[start][end - 1] = 1;
				}

				// Manually counts last element
				if (counter == (str.length * (str.length + 1)) / 2) {
					return resolve(arr2D);
				}
			}
		}
	});
}

function checkWordArrForCompleteMatch(arr) {
	// Arr is an array of 1s where starts and ends exist
	// arr[start][end]

	// Start at whole word
	checkWordArrForCompleteMatchStartEnd(arr, 0, arr[0].length);


	// For a start-end pair, I need to find


}

function checkWordArrForCompleteMatchStartEnd(arr, start, end) {

	// console.log('start',start,'end',end);
	if (start >= end) return true;
	// If start's end is a 1, then yay!
	if(arr[start][end-1] == 1) {
		// console.log('start',start,'end',end, 'yay');
		return true;
	}

	//arr[start][end]
	// Check entire "start-end"
	var range = end - start + 1;

	// Iterate through sub matrix
	var validEnds = [];
	for (var i = start; i < range; i++) {
		if(arr[start][i] == 1) {
			validEnds.push(i)
		}
	}

	console.log(validEnds);

	validEnds.forEach(function(elem) {
		if(checkWordArrForCompleteMatchStartEnd(arr,elem+1,arr[0].length)) {
			console.log('wedidit');
			return true;
		};
	})

}



getWordArr("hellforhello")
	.then(function (arr) {
		checkWordArrForCompleteMatch(arr);
	});
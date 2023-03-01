const perf = require('execution-time')();
//#######################################
// Question 1
//#######################################
// RESULTS
// 0:       68.479 μs
// 1:       18.167 μs
// 2:       11.741 μs
// 3:       8.969 μs
// 4:       8.858 μs
// 5:       8.062 μs
// 6:       8.602 μs
// 7:       5.422 μs
// 8:       8.385 μs
// 9:       91.666 μs
//#######################################

const addToZero = (values) => {
	var isZero = false;
	let sortedValues = values.sort();
	sortedValues.forEach((value, index) => {
		let focusValue = value; 
		sortedValues.forEach((additiveValue, additiveIndex) => {
			if (additiveIndex != index) {
				let result = focusValue + additiveValue
				if (result === 0) { 
					isZero = true; // rturn true
				}
			}
		})
	})
	return isZero;
}

equalsZero = addToZero([]);
// -> False
console.log(`equalsZero ${equalsZero}`);

equalsZero = addToZero([1]);
// -> False
console.log(`equalsZero ${equalsZero}`);


equalsZero = addToZero([1, 2, 3]);
// -> False
console.log(`equalsZero ${equalsZero}`);


// ** tested function
for(var i = 0; i < 10; i ++) {
	perf.start();                     // Starts timer
	equalsZero = addToZero([1, 2, 3, -2]);
	// -> True
	//console.log(`equalsZero ${equalsZero}`);
	let result = perf.stop();
	console.log(`${i}: \t ${result.preciseWords}`);
}

//#######################################
// Question 2
//#######################################
// RESULTS
// 0:       11.856 μs
// 1:       4.289 μs
// 2:       6.485 μs
// 3:       7.188 μs
// 4:       6.114 μs
// 5:       3.448 μs
// 6:       3.197 μs
// 7:       4.857 μs
// 8:       4.597 μs
// 9:       5.311 μs
//#######################################

const hasUniqueChars = (word) => {
	var isUnique = true;
	[...word].forEach((focusLetter, focusIndex) => {
		[...word].forEach((compareLetter, compareIndex) => {
			if (focusIndex != compareIndex) {
				if (focusLetter === compareLetter) {
					isUnique = false;
				}
			}
		});
	});

	return isUnique;

}
let hasUniqueCharsResult;

hasUniqueCharsResult = hasUniqueChars("Monday");
// -> True
console.log(`hasUniqueCharsResult: ${hasUniqueCharsResult}`);

for(var i = 0; i < 10; i ++) {
	perf.start();                     // Starts timer
	// function here

	// ** tested function
	hasUniqueCharsResult = hasUniqueChars("Moonday");
	// -> False

	//
	let result = perf.stop();
	console.log(`${i}: \t ${result.preciseWords}`);
}

//#######################################
// Question 3
//#######################################
// RESULTS
// 0:       20.841 μs
// 1:       16.013 μs
// 2:       14.833 μs
// 3:       15.214 μs
// 4:       11.286 μs
// 5:       13.21 μs
// 6:       14.222 μs
// 7:       13.31 μs
// 8:       42.044 μs
// 9:       10.974 μs
//#######################################

const isPangram = (sentence) => {
	const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
	const compareSentence = [...new Set([...sentence.toLowerCase()])].sort().filter(function(letter){return alphabet.includes(letter)});
	let isPangram = true;

	alphabet.forEach((alphabetLetter) => {
		isPangram = compareSentence.includes(alphabetLetter)

	})
	return isPangram;

}

var isPangramResult;
isPangramResult = isPangram("The quick brown fox jumps over the lazy dog!");
// -> True
console.log(`isPangramResult: ${isPangramResult}`);


// ** tested function
for(var i = 0; i < 10; i ++) {
	perf.start();                     // Starts timer
	isPangramResult = isPangram("I like cats, but not mice");
	let result = perf.stop();
	console.log(`${i}: \t ${result.preciseWords}`);
}

//#######################################
// Question 4
//#######################################
// RESULTS
// 0:       134.021 μs
// 1:       6.79 μs
// 2:       4.006 μs
// 3:       5.525 μs
// 4:       13.705 μs
// 5:       5.803 μs
// 6:       6.633 μs
// 7:       3.552 μs
// 8:       6.422 μs
// 9:       10.983 μs
//#######################################

const findLongestWord = (words) => {
	let longest = 0;
	words.forEach((word) => {
		const wordLength = [...word].length;
		if (longest < wordLength) {
			longest = wordLength
		}
	})
	return longest
}

// -> 5

for(var i = 0; i < 10; i ++) {
	perf.start();                     // Starts timer
	const longest = findLongestWord(["hi", "hello"]);
	let result = perf.stop();
	console.log(`${i}: \t ${result.preciseWords}`);
}
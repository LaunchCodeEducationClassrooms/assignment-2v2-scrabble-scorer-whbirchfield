// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

  let userWord = '';
function initialPrompt() {
   userWord = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   return userWord;
};

function simpleScore (word){
  word = word.toUpperCase();
  let num = 0;
  for (i=0; i<word.length; i++){
    num +=1;
  }
  return `Your simple word score is ${num}!`;
}

function vowelBonusScore (word){
  word = word.toUpperCase();
  let num = 0;
  for (i = 0; i<word.length; i++){
    if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U'){
      num = num + 3;
    } else {
      num = num + 1;
    }
  } return `Your word score with the vowel bonus is ${num}!`;
}

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   //initialPrompt();
   console.log(vowelBonusScore(initialPrompt(userWord)));
   console.log(simpleScore(initialPrompt(userWord)));
   console.log(oldScrabbleScorer(initialPrompt(userWord)));
}


//console.log(vowelBonusScore(initialPrompt(userWord)));
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


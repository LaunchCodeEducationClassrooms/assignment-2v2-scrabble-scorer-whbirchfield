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

const scoringAlgorithms = [{name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction: function simpleScore(word){return userWord}}, {name: 'Bonus Vowels', description: 'Vowels are 3 pts. consonants are 1 pt.', scoringFunction: function vowelBonusScore(word){return userWord}}, {name: 'Scrabble', description: 'The traditional scoring algorithm', scoringFunction: function oldScrabbleScorer(word){return userWord}}];

let scoringOption = 0;
function scorerPrompt() {
  scoringOption = input.question("0 - for Simple Scorer\n1 - for Vowel Bonus Scorer or\n2 - for Scrabble Scorer?\nPick a scoring option from above: ");
  return scoringOption
  }

function transform() {};

let newPointStructure;

function runProgram() {

  scorerPrompt()


  if (scoringOption == 0){
    console.log(simpleScore(initialPrompt(userWord)));
  }if (scoringOption == 1){
    console.log(vowelBonusScore(initialPrompt(userWord)));
  }if (scoringOption == 2){
    console.log(oldScrabbleScorer(initialPrompt(userWord)));
  }else{
    scorerPrompt();
  }
}


console.log(scoringAlgorithms);

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


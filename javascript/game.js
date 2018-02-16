// create an array of words
const word = ['horse', 'jail','gun','wanted'];
// choose words randomly
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let AttemptsLeft = 10;
let hint = [];
let possible = [];
// Dom manipulation
let docUnderScore = document.getElementById('underScore');
let docRightGuess = document.getElementById('rightGuess');
let docWrongGuess = document.getElementById('wrongGuess');
let docHint = document.getElementById('hint');
let docPossible = document.getElementById('possible');
let docAttempts = document.getElementById('Attempts');
// Main
// ===========================================================
console.log(chosenWord);
// create underscores based on length of word
let generateUnderscore = () => {
	for( let i = 0; i < chosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;  
}
// get users guess
document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	console.log(keyword);
// if users guess is right
	if (chosenWord.indexOf(keyword) > -1) {
	//add to right words array
	  rightWord.push(keyword);
	//replace underscore with right letter
	  underScore[chosenWord.indexOf(keyword)] = keyword;
	  docUnderScore.innerHTML = underScore.join('  ');
	  docRightGuess.innerHTML = rightWord.join('');
	// checks to see if user word matches guesses
	if(underScore.join('') == chosenWord) {
		alert('You Win');
	}
	// gives hint of what word is chosen
	if(randNum == [0]){
		docHint.innerHTML = "Cowboys rode a?";
	}
	if(randNum == [1]){
		docHint.innerHTML = "When outlaws were caught they were put in?";
	}
	if(randNum == [2]){
		docHint.innerHTML = "Cowboys carried a?   For saftey ";
	}
	if(randNum == [3]){
		docHint.innerHTML = "When someone commited a crime and weren't caught they were?";
	}
	}
	else{
	  AttemptsLeft --;
	  wrongWord.push(keyword);
	  docWrongGuess.innerHTML = wrongWord;
	}
	if(AttemptsLeft == 7){
	  docPossible.innerHTML = "Could be something we use to shoot, or somthing we can ride. ";
	}
	if(AttemptsLeft == 3){
	  docPossible.innerHTML = "Could be a place where criminals go, or they could have their face on a... ? Poster";
	}
	if(AttemptsLeft >= 0){
	  docAttempts.innerHTML = AttemptsLeft;
	}
	if(AttemptsLeft == 0){
		alert('You Loose');
	}
});
//generate underscore user insert letter
docUnderScore.innerHTML = generateUnderscore().join(' ');


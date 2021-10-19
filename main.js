window.addEventListener('load', init);
//globals
// available levels
const levels =
{
    easy: 5,
    medium: 3,
    hard: 2,
}
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;


// dom elemenets
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word')
const currentDisplay = document.querySelector('#current-word-display');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];



//init game 


function init() {

    // show number of secids in ui
    seconds.innerHTML = currentLevel;

    // load word from array
    showWord(words);
    // start matchhing on word wordInput
    wordInput.addEventListener('input', startMatch);
    //call countdown
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50);
}
//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }
    if (score == -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value == currentWord.innerHTML) {
        message.innerHTML = 'correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//pick and show randomn words
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    // output random word
    currentWord.innerHTML = words[randIndex];
}


function countdown() {
    // make sure time is not run out
    if (time > 0) {
        // decrease the timme
        time--;
    }
    else if (time === 0) {
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;

}
// check game status 
function checkStatus() {
    if (!isPlaying && time == 0) {
        message.innerHTML = 'game over!!!';
        score = -1;
    }
}

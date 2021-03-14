const hiddenWordsArr = ["FATHER", "SNOW", "CHIPS", "DATA", "CAR", "BICYCLE",
  "SUNSET", "LETTER", "KEYBOARD", "DOG", "BIRD", "HOME", "BOOK", "FIREWORKS",
  "SMARTPHONE", "RESTAURANT", "BUTTERFLY"];

let secretWord = '';
let maxWrong = 6;
let failsCount = 0;
let guessed = [];
let wordStatus = null;
let resetBtn = document.getElementsByClassName('reset')[0];

resetBtn.addEventListener('click', reset)

function keyboardLetters() {
  document.getElementById('keyboard').innerHTML = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map(letter =>
    `
      <button
        class="letter"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');
}
keyboardLetters();

function randomWord() {
  secretWord = hiddenWordsArr[Math.floor(Math.random() * hiddenWordsArr.length)];
}
randomWord();

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (secretWord.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (secretWord.indexOf(chosenLetter) === -1) {
    failsCount++;
    updateMistakes();
    checkIfGameLost();
    changePicture();
  }
}

function changePicture() {
  document.getElementById('hangmanPicture').src = 'pictures/' + failsCount + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === secretWord) {
    document.getElementById('keyboard').innerHTML = 'BRAVO! You are smart!';
  }
}

function checkIfGameLost() {
  if (failsCount === maxWrong) {
    document.getElementById('showGuess').innerHTML = 'The secret word was: ' + secretWord;
    document.getElementById('keyboard').innerHTML = 'Try again? ';
  }
}

function guessedWord() {
  wordStatus = secretWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('showGuess').innerHTML = wordStatus;
}
guessedWord();

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = failsCount;
}
maxWrong = document.getElementById('maxWrong').innerHTML;

function reset() {
  failsCount = 0;
  guessed = [];
  document.getElementById('hangmanPicture').src = 'pictures/0.jpg';
  randomWord();
  guessedWord();
  updateMistakes();
  keyboardLetters();
}




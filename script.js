const hiddenWordsArr = ["FATHER", "SNOW", "CHIPS", "DATA", "CAR", "BICYCLE",
  "SUNSET", "LETTER", "KEYBOARD", "DOG", "BIRD", "HOME", "BOOK", "FIREWORKS",
  "SMARTPHONE", "RESTAURANT", "BUTTERFLY"];

let secretWord = '';
let maxWrong = 6;
let failsCount = 0;
let guessed = [];
let wordStatus = null;

function generateButtons() {
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
generateButtons();

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
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = 'pictures/' + failsCount + '.jpg';
}



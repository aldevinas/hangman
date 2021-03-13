let maxWrong = 6;
let mistakes = 0;
let answer = '';
let guessed = [];
let wordStatus = null;

const hiddenWords = ["father", "snow", "chips", "data", "car", "bicycle",
  "sun", "letter", "keyboard", "dog", "bird", "home", "book", "fireworks",
  "smartphone", "restaurant"];

let SecretWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
let lettersContainer = document.getElementsByClassName('lettersContainer')[0];

function generateLetters() {
  let letter = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map(letter =>
    lettersContainer.innerHTML +=
    `
      <div 
        class="letter"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </div>
    `).join('');
  document.getElementById('keyboard').innerHTML = letter;
}
generateLetters()
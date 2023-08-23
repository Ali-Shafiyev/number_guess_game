const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

guessButton.addEventListener('click', makeGuess);
guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    makeGuess();
  }
});

function makeGuess() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    message.style.color = 'green';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Try a higher number.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Try a lower number.';
    message.style.color = 'red';
  }

  guessInput.value = ''; 
}

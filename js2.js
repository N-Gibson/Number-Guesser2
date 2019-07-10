// Gloabal Variables
var minNumber = 1;
var maxNumber = 100;
var minNumberDisplay = document.querySelector('#min-number-display');
var maxNumberDisplay = document.querySelector('#max-number-display');
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var updateButton = document.querySelector('#update-button');
var guessDisplay1 = document.querySelector('#player-1-guess-display');
var guessDisplay2 = document.querySelector('#player-2-guess-display');
var player1Guess = document.querySelector('#player-1-guess');
var player2Guess = document.querySelector('#player-2-guess');
var submitButton = document.querySelector('#submit-button');
var player1Name = document.querySelector('#player-1-name');
var player2Name = document.querySelector('#player-2-name');
var challenger1 = document.querySelectorAll('.challenger-1');
var challenger2 = document.querySelectorAll('.challenger-2');
var player1Hint = document.querySelector('#player-1-hint');
var player2Hint = document.querySelector('#player-2-hint');
var resetButton = document.querySelector('#reset-button');
var clearButton = document.querySelector('#clear-button');
var randomNum;
var player1Hint = document.querySelector('#player-1-hint');
var player2Hint = document.querySelector('#player-2-hint');
var rightSection = document.querySelector('.section__right');
var name1ErrorDiv = document.querySelector('.div__name-1-error');
var name2ErrorDiv = document.querySelector('.div__name-2-error');
var guess1ErrorDiv = document.querySelector('.div__guess-1-error');
var guess2ErrorDiv = document.querySelector('.div__guess-2-error');
var minError = document.querySelector('.div__min-range-error');
var maxError = document.querySelector('.div__max-range-error');


// Event Listeners
updateButton.addEventListener('click', updateHandler);
submitButton.addEventListener('click', submitHandler);
rightSection.addEventListener('click', deleteCard);
// resetButton.addEventListener('click', resetGame);
// clearButton.addEventListener('click', clearGame);
// minRange.addEventListener('keyup', checkRange);
// maxRange.addEventListener('keyup', checkRange);
// minRange.addEventListener('keyup', hasGuessInput);
// maxRange.addEventListener('keyup', hasGuessInput);
// player1Name.addEventListener('keyup', hasGuessInput);
// player1Guess.addEventListener('keyup', hasGuessInput);
// player2Name.addEventListener('keyup', hasGuessInput);
// player2Guess.addEventListener('keyup', hasGuessInput);

// Functions on page load
randomNumber(minNumber, maxNumber)
console.log(randomNum)

// Event listener functions
function submitHandler() {
  submitNameError(player1Name.value, name1ErrorDiv, player1Name);
  submitNameError(player2Name.value, name2ErrorDiv, player2Name);
  submitGuessError(player1Guess.value, guess1ErrorDiv, player1Guess);
  submitGuessError(player2Guess.value, guess2ErrorDiv, player2Guess);
  changeNames();
  playerFeedbackHandler();
  clearInputs(player1Guess, player2Guess);
}

function updateHandler() {
  updateRangeErrors()
}

function randomNumber(minNum, maxNum) {
  return randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

function clearInputs(element1, element2) {
  element1.value = "";
  element2.value = "";
}

function updateRange() {
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);

  randomNumber(min, max);
  updateRangeDom(minRange.value, maxRange.value);
  clearInputs(minRange, maxRange);
}

function updateRangeDom(min, max) {
  minNumberDisplay.innerText = min;
  maxNumberDisplay.innerText = max;
}

function errorsOn(location, border) {
  location.style.visibility = 'visible';
  border.style = 'border: 2px solid #F74D9B';
}

function errorsOff(location, border) {
  location.style.visibility = 'hidden';
  border.style = 'border: 2px solid #EAEAEA';
}

function updateRangeErrors() {
  minNumber = Number(minRange.value);
  maxNumber = Number(maxRange.value);
  if(minNumber === 0 || maxNumber === 0 || minNumber > maxNumber) {
    errorsOn(minError, minRange);
    errorsOn(maxError, maxRange);
  } else {
    errorsOff(minError, minRange);
    errorsOff(maxError, maxRange);
    updateRange();
    console.log(randomNum);
  }
}

function submitNameError(name, errorDiv, errorLocation) {
  if(name === '') {
    errorsOn(errorDiv, errorLocation);
  } else {
    errorsOff(errorDiv, errorLocation);
  } 
}

function submitGuessError(guess, guessDiv, guessLocation,) {
  var minDisplay = parseInt(minNumberDisplay.innerText); 
  var maxDisplay = parseInt(maxNumberDisplay.innerText);
  if(guess > maxDisplay || guess < minDisplay || guess === '') {
    errorsOn(guessDiv, guessLocation);
  } else {
    errorsOff(guessDiv, guessLocation);
    updateGuess();
  }
}

function playerFeedback(playerGuess, playerHint, playerGuess1, playerName, secondPlayerName, winnerName) {
  // debugger;
  if(parseInt(playerGuess.value) > (randomNum)) {
    playerHint.innerText = ('That\'s too high');
  } else if(parseInt(playerGuess.value) < (randomNum)) {
    playerHint.innerText = ('That\'s too low');
  } else {
    playerHint.innerText = ('BOOM!!!');
    appendCard(playerGuess1, playerName, secondPlayerName, winnerName);
  }
}

function appendCard(playerGuess1, playerName, secondPlayerName, winnerName) {
  if(playerGuess1.value == randomNum) {
    rightSection.insertAdjacentHTML ('afterbegin', `<article class="section__right-card">
    <div class="card-header">
      <p class="card__challengers">${playerName.value}</p>
      <p>VS</p>
      <p class="card__challengers">${secondPlayerName.value}</p>
    </div>
    <h4 class="card__winner-name">${winnerName.value}</h4>
    <p class="card__winner">WINNER</p>
    <div class="card-footer">
      <p class="card-footer__game-data"><span>47 </span>GUESSES</p>
      <p><span>1.3m </span>MINUTES</p>
      <p class="card__delete-button">X</p>
    </div>
  </article>`);
  winnerRandmNumber();
  } else {
    return;
  }
}

function deleteCard(e) {
  if(e.target.closest('.card__delete-button')) {
    e.target.closest('.section__right-card').remove()
  }
}

function updateGuess() {
  if(player1Guess.value === '' || player2Guess.value === '') {
    return;
  } else {
  guessDisplay1.innerText = player1Guess.value;
  guessDisplay2.innerText = player2Guess.value;
  }
}

function changeNames() {
  if(player1Name.value === "" || player2Name.value === "") {
    return;
  } else {
  for(var i = 0; i < challenger1.length; i++) {
      challenger1[i].innerText = player1Name.value;
  }

  for(var i = 0; i < challenger2.length; i++) {
    challenger2[i].innerText = player2Name.value;
    }
  }
}

function winnerRandmNumber() {
  if (player1Guess.value == randomNum || player2Guess.value == randomNum) {
  minNumber = parseInt(minNumberDisplay.innerText) -10;
  maxNumber = parseInt(maxNumberDisplay.innerText) +10;
  randomNumber(minNumber, maxNumber);
  updateRangeDom(minNumber, maxNumber);
  console.log(randomNum);
  } else {
    return;
  }
}

function playerFeedbackHandler() {
  guess1 = Number(player1Guess.value);
  guess2 = Number(player2Guess.value);
  if(guess1 === 0 || guess2 === 0) {
    return;
  } else if(guess1 > parseInt(maxNumberDisplay.innerText) || guess2 > parseInt(maxNumberDisplay.innerText)) {
    return
  } else if(guess1 < parseInt(minNumberDisplay.innerText) || guess2 < parseInt(minNumberDisplay.innerText)) {
    return;
  } else {
  playerFeedback(player1Guess, player1Hint, player1Guess, player1Name, player2Name, player1Name);
  playerFeedback(player2Guess, player2Hint, player2Guess,  player2Name, player1Name, player2Name);
  }
}
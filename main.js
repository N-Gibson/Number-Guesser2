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

// Event Listeners
updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitHandler);
resetButton.addEventListener('click', resetGame);
clearButton.addEventListener('click', clearGame);

// Functions on page load
randomNumber(minNumber, maxNumber);
console.log(randomNum);

// Functions
function submitHandler() {
  displayGuess();
  updateNames();
  playerFeedback(player1Guess, player1Hint);
  playerFeedback(player2Guess, player2Hint);
  clearInputs(player1Guess, player2Guess);
}

function randomNumber(minNum, maxNum) {
  return randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

function updateRange() {
  var isGoodRange = isRangeGood();

  if(isGoodRange) {
    minNumberDisplay.innerText = minRange.value;
    maxNumberDisplay.innerText = maxRange.value;

    var minInt = parseInt(minNumberDisplay.innerText);
    var maxInt = parseInt(maxNumberDisplay.innerText);

    clearInputs(minRange, maxRange);
    randomNumber(minInt, maxInt);
    console.log(randomNum);//logs new random number for testing
  }
}

function isRangeGood(){
  var minInt = parseInt(minRange.value);
  var maxInt = parseInt(maxRange.value);

  if((Number.isInteger(minInt)) && (Number.isInteger(maxInt))) {
    if(minInt < maxInt) {
      return true;
    } else {
      //user entered min >= max
      clearInputs(minRange, maxRange);
      alert("bad range");
      return false;
    }
  } else {
    //user entered e
    clearInputs(minRange, maxRange);
    alert("non int");
    return false;
  }
}

function clearInputs(element1, element2) {
  element1.value = "";
  element2.value = "";
}

function displayGuess() {
  var isGoodInt = isGoodGuess(player1Guess);
  var isGoodInt2 = isGoodGuess(player2Guess);

  badInputHandler(player1Guess, isGoodInt);
  badInputHandler(player2Guess, isGoodInt2);

  if(isGoodInt && isGoodInt2) {
    updateGuesses();
  }
}

function isGoodGuess(element) {
  var elementInt = parseInt(element.value);
  var minInt = parseInt(minNumberDisplay.innerText);
  var maxInt = parseInt(maxNumberDisplay.innerText);

  if(Number.isInteger(elementInt) && (elementInt >= minInt) && (elementInt <= maxInt)) {
    return true;
  } else {
    if(!(Number.isInteger(elementInt))) {
    return false;
    }
  }
}

function badInputHandler(element, isGood) {
  if(isGood) {
    element.style.border = "1px #ccc solid";
  } else {
    element.style.border = "2px #ED458B solid";
  }

  checkGuesses();
}


function updateGuesses(){
  checkNames();
  checkGuesses();
  updateBorders();


  if(player1Name.value === "" || player2Name.value === "") {
    return;
  } else {
    guessDisplay1.innerText = player1Guess.value;
    guessDisplay2.innerText = player2Guess.value;
  }
}

function updateBorders() {
  if(player1Name.value === "" || player2Name.value === "") {
    
    if(player1Name.value === "") {
      player1Name.style.border = "2px #DD1972 solid";
    } else {
      player1Name.style.border = "1px #ccc solid";
    }

    if(player2Name.value === "") {
      player2Name.style.border = "2px #DD1972 solid";
    } else {
      player2Name.style.border = "1px #ccc solid";
    }
  } else {

      if(player1Name !== "") {
        player1Name.style.border = "1px #ccc solid";
      }

      if(player2Name.value !== "") {
        player2Name.style.border = "1px #ccc solid";
      }
    }
}

function updateNames(){
  checkNames();
  checkGuesses();
  updateBorders();
  if(player1Guess.value === "" && player2Guess.value === "") {
    return;
   } else {
    changeNames();
   }
}

function changeNames() {
  if(player1Name.value === "" && player2Name.value === "") {
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

function clearGame() { 
  clearInputs(minRange, maxRange);
  clearInputs(player1Name, player1Guess);
  clearInputs(player2Name, player2Guess);
  guessDisplay1.innerText = "-";
  guessDisplay2.innerText = "-";
  player1Hint.innerText = "-";
  player2Hint.innerText = "-";
}

function resetGame() {
  clearGame();
  minNumberDisplay.innerText = "1";
  maxNumberDisplay.innerText = "100";
  for(var i = 0; i < challenger1.length; i++) {
    challenger1[i].innerText = "Challenger 1";
  }
  for(var i = 0; i < challenger2.length; i++) {
    challenger2[i].innerText = "Challenger 2";
  }
  randomNumber(1,100);
}

function playerFeedback(playerGuess, playerHint) {
  if(Number(playerGuess.value) > (randomNum)) {
    playerHint.innerText = ('That\'s too high');
  } else if(Number(playerGuess.value) < (randomNum)) {
    playerHint.innerText = ('That\'s too low');
  } else {
    playerHint.innerText = ('BOOM!!!');
    appendCard(player1Guess, player1Name, player2Name, player1Name);
    appendCard(player2Guess, player1Name, player2Name, player2Name);
  }

}

function appendCard(playerGuess, player1Name, player2Name, winnerName) {
  if(Number(playerGuess.value) === randomNum) {
    rightSection.insertAdjacentHTML ('afterbegin', `<article class="section__right-card">
    <div class="card-header">
      <p class="card__challengers">${player1Name.value}</p>
      <p>VS</p>
      <p class="card__challengers">${player2Name.value}</p>
    </div>
    <h4 class="card__winner-name">${winnerName.value}</h4>
    <p class="card__winner">WINNER</p>
    <div class="card-footer">
      <p class="card-footer__game-data"><span>47 </span>GUESSES</p>
      <p><span>1.3m </span>MINUTES</p>
      <p class="card__delete-button">X</p>
    </div>
  </article>`)
  } else {
    return;
  }
}

function checkNames() {
  if(player1Name.value === "") {
    name1ErrorDiv.style.visibility = "visible";
  } else {
    name1ErrorDiv.style.visibility = "hidden";
  }

  if(player2Name.value === "") {
    name2ErrorDiv.style.visibility = "visible";
  } else {
    name2ErrorDiv.style.visibility = "hidden";
  }
}

function checkGuesses(){
  if(player1Guess.value === "") {
    guess1ErrorDiv.style.visibility = "visible";
  } else if((player1Name.value === "") && (player1Guess.value === "")) {
    return;
  } else {
    guess1ErrorDiv.style.visibility = "hidden";
  } 

  if(player2Guess.value === "") {
    guess2ErrorDiv.style.visibility = "visible";
  } else if((player2Name.value) === "" && (player2Guess.value === "")) {
    return;
  } else {
    guess2ErrorDiv.style.visibility = "hidden";
  }
}


function checkRange(){
  var maxInt = parseInt(maxNum.value);
  var minInt = parseInt(minNum.value);

  if(minInt >= maxInt) {
    
  }
}
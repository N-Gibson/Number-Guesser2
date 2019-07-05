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

updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitHandler);
randomNumber(minNumber, maxNumber);

function submitHandler() {
  displayGuess();
  updateNames();
}

function updateRange() {
	minNumberDisplay.innerText = minRange.value;
	maxNumberDisplay.innerText = maxRange.value;
  var minInt = parseInt(minNumberDisplay.innerText);
  var maxInt = parseInt(maxNumberDisplay.innerText);
  clearInputs(minRange, maxRange);
  randomNumber(minInt, maxInt);
}

function clearInputs(element1, element2) {
  element1.value = "";
  element2.value = "";
}

function displayGuess() {
  if(player1Guess.value === "" || player2Guess === "") {
    if(player1Guess.value === "") {
      player1Guess.style.border = "2px #DD1972 solid";
    }

    if(player2Guess.value === "") {
      player2Guess.style.border = "2px #DD1972 solid";
    }
    
  } else {
  guessDisplay1.innerText = player1Guess.value;
  guessDisplay2.innerText = player2Guess.value;
  clearInputs(player1Guess, player2Guess);
  }
}

function updateNames() {
  if(player1Name.value === "" || player2Name.value === "") {
    
    if(player1Name.value === "") {
      player1Name.style.border = "2px #DD1972 solid";
    }

    if(player2Name.value === "") {
      player2Name.style.border = "2px #DD1972 solid";
    }
  } else {

  for(var i = 0; i < challenger1.length; i++) {
    challenger1[i].innerText = player1Name.value;
  }

  for(var i = 0; i < challenger2.length; i++) {
    challenger2[i].innerText = player2Name.value;
    }
  }
}

function randomNumber(minNum, maxNum) {
  var randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum); 
  console.log(randomNum);
}



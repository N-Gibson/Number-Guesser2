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
// var player1GuessNum;
// var player2GuessNum;

updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitHandler);
randomNumber(minNumber, maxNumber);
console.log(this.randomNum);


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
    } else {
      player1Guess.style.border = "1px #ccc solid";
    }

    if(player2Guess.value === "") {
      player2Guess.style.border = "2px #DD1972 solid";
    } else {
      player2Guess.style.border = "1px #ccc solid";
    }

  } else {
      
      if(player1Guess.value !== ""){
        player1Guess.style.border = "1px #ccc solid";
      }

      if(player2Guess.value !== ""){
        player2Guess.style.border = "1px #ccc solid";
      }

      var player1GuessNum = parseInt(player1Guess.value);
      var player2GuessNum = parseInt(player2Guess.value);

      guessDisplay1.innerText = player1Guess.value;
      guessDisplay2.innerText = player2Guess.value;
      clearInputs(player1Guess, player2Guess);
      
      if(player1GuessNum === randomNum) {
        player1Hint.innerText = "BOOM!";
        //trigger new card
        //reset game
      } else if(player1GuessNum > randomNum) {
        player1Hint.innerText = "that's too high";
      } else {
        player1Hint.innerText = "that's too low";
      }

      if(player2GuessNum === this.randomNum) {
        player2Hint.innerText = "BOOM!";
        //trigger new card
        //reset game
      } else if(player2GuessNum > this.randomNum) {
        player2Hint.innerText = "that's too high";
      } else {
        player2Hint.innerText = "that's too low";
      }
  }
}

function updateNames() {
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
  return this.randomNum = randomNum;
}



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
// var randomNum = 0;
var player1Hint = document.querySelector('#player-1-hint');
var player2Hint = document.querySelector('#player-2-hint');
var player1GuessNum;
var player2GuessNum;
var rightSection = document.querySelector('.section__right');

updateButton.addEventListener('click', updateRange);
submitButton.addEventListener('click', submitHandler);
randomNumber(minNumber, maxNumber);
console.log(randomNum);


function submitHandler() {
  displayGuess();
  updateNames();
  playerFeedback(player1Guess, player1Hint);
  playerFeedback(player2Guess, player2Hint);
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

      this.player1GuessNum = parseInt(this.player1Guess.value);
      this.player2GuessNum = parseInt(this.player2Guess.value);
      guessDisplay1.innerText = player1Guess.value;
      guessDisplay2.innerText = player2Guess.value;
      // clearInputs(player1Guess, player2Guess);
      
      if(this.player1GuessNum > this.randomNum) {
        this.player1Hint.innerText = "that's too high";
      } else {
        this.player1Hint.innerText = "that's too low";
      }

      if(this.player2GuessNum > this.randomNum) {
        this.player2Hint.innerText = "that's too high";
      } else {
        this.player2Hint.innerText = "that's too low";
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
  randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum); 
  return randomNum;
}

function playerFeedback(playerGuess, playerHint) {
  if(Number(playerGuess.value) > (randomNum.value)) {
    playerHint.innerText = ('That\'s too high');
  } else if(Number(playerGuess.value) < (randomNum.value)) {
    playerHint.innerText = ('That\'s too low');
  } else {
    playerHint.innerText = ('BOOM!!!');
    console.log(playerGuess.value);
    console.log(randomNum.value)
    console.log(playerHint.innerText);
    appendCard(player1Guess, player1Name, player2Name);
    appendCard(player2Guess, player1Name, player2Name);
  }
}


function appendCard(playerGuess, player1Name, player2Name) {
  if(Number(playerGuess.value) === Number(randomNum)) {
    rightSection.insertAdjacentHTML ('afterbegin', `<article class="section__right-card">
    <div class="card-header">
      <p class="card__challengers">${player1Name.value}</p>
      <p>VS</p>
      <p class="card__challengers">${player2Name.value}</p>
    </div>
    <h4 class="card__winner-name">${player1Name.value}</h4>
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


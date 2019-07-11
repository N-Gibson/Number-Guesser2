var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

var konamiSequence = ['left', 'up', 'right', 'down', 'down', 'down'];
var konamiPosition = 0;

document.addEventListener('keydown', (e) => {
  var key = allowedKeys[e.keyCode];
  var requiredKeys = konamiSequence[konamiPosition];

  if(key == requiredKeys) {
    konamiPosition++;
  }

  if(konamiPosition == konamiSequence.length) {
    activateCheat();
    konamiPosition = 0;
  }
});

function activateCheat() {
  window.open(src= 'konami.html');
  var audio = new Audio('images/Scream+1.mp3');
  audio.play()
}



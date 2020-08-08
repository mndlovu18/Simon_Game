var clicks = 0;
var myVar;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {

	clearTimeout(myVar);
	myVar = setTimeout(timer, 2500);
  _playMusic();
  clickIncrement();
  if (color !== 4) {
		alert('Game over! You scored ' + clicks + ' Points');
    location.reload();
  } else{
	  randomGenerator();
  }
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {

	clearTimeout(myVar);
	myVar = setTimeout(timer, 2500);
  _playMusic();
  clickIncrement();
   if (color !== 1) {
		alert('Game over! You scored ' + clicks + ' Points');
    location.reload();
  } else {
	  randomGenerator();
  }
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {

	clearTimeout(myVar);
	myVar = setTimeout(timer, 2500);
  _playMusic();
  clickIncrement();
   if (color !== 3) {
		alert('Game over! You scored ' + clicks + ' Points');
    location.reload();
  } else {
	  randomGenerator();
  }
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {

	clearTimeout(myVar);
	myVar = setTimeout(timer, 2500);
  _playMusic();
  clickIncrement();
   if (color !== 2) {
		alert('Game over! You scored ' + clicks + ' Points');
    location.reload();

  } else {
	  randomGenerator();
  }
});

let playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
	clearTimeout(myVar);

myVar = setTimeout(timer, 2500);
  randomGenerator();
});

let replayButton = document.querySelector('#replay');
replayButton.addEventListener('click', function() {
	location.reload();
});


function _playMusic() {
  var myMusic = document.getElementById('music');
  myMusic.play();
}

function clickIncrement() {
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
}
/*
if(press play){
start counter;
generate random color;
   if(color clicked in 3 seconds){
     stop previus clock;
	 start clock;
	 generate next number
   } else if(color not clicked in 3 seconds){
   alert;
   reload;
   }
}


*/
function timer() {
	if(blueButton.clicked == true) {
		clearTimeout(myVar);

	} else if(yellowButton.clicked == true) {
		clearTimeout(myVar);

	} else if(greenButton.clicked == true) {
		clearTimeout(myVar);

	} else if(redButton.clicked == true) {
		clearTimeout(myVar);

	} else {
	 alert('You ran out of time. Try again!');
	 location.reload();
     }
}

var color = 0;
function randomGenerator() {
  var randomNumber = Math.floor(Math.random() * 4) + 1; // generate random number between 1 and 4 inclusive

  switch (randomNumber) {
    case 1:
      document.getElementById('play').innerHTML = 'Click Red';
      color = 1;
      break;

    case 2:
      document.getElementById('play').innerHTML = 'Click Blue';
      color = 2;
      break;

    case 3:
      document.getElementById('play').innerHTML = 'Click Yellow';
      color = 3;
      break;

    case 4:
      document.getElementById('play').innerHTML = 'Click Green';
      color = 4;
      break;
  }
}
// setTimeout(function(){
//	let playButton = document.querySelector('#play');
//	playButton.style.opacity = 0;
// }, 3000);

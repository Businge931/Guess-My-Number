'use strict';
/*
//*selecting the class of the object in the html and then loading it to the console
console.log(document.querySelector('.message').textContent);

//changing the content of the object we selected
document.querySelector('.message').textContent = '🎊Correct Number!';
//*
console.log(document.querySelector('.message').textContent);
//
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Implementing the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//removing repetitive code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Handling button clicks & Implementing the game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number!';

    displayMessage('⛔No Number!');

    //when the plater wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎊Correct Number!';

    displayMessage('🎊Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      //when guess is wrong
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '💹Too high!' : '📉Too low!';

      displayMessage(guess > secretNumber ? '💹Too high!' : '📉Too low!');

      score = score - 1;

      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';

      displayMessage('💥You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});
//when guess is too high
/*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💹Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    document.querySelector('body').style.backgroundColor = '#222';
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('body').style.backgroundColor = '#222';
  }
});

*/

//
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

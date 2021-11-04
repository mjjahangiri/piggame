'use strict';

// Button Selector
const newGame = document.querySelector('.newGame');
const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');
// Element Selector
const player_titr0 = document.querySelector('.player-titr_0');
const player_titr1 = document.querySelector('.player-titr_1');
const currentScore0 = document.querySelector('.currentScore_0');
const currentScore1 = document.querySelector('.currentScore_1');
const totalScore0 = document.querySelector('.totalScore_0');
const totalScore1 = document.querySelector('.totalScore_1');
const player0 = document.querySelector('.player_0');
const player1 = document.querySelector('.player_1');
const dice = document.querySelector('.dice');
const newGameLink = document.querySelector('.newGameLink');
const modal = document.querySelector('.modal');
const glory = document.querySelector('.glory');

// Create Attributes
let score, activePlayer, currentScore, playing;

// ----- Functions -----
// New Game
const gameNew = function () {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  player_titr0.textContent = '• Player 1';
  player_titr1.textContent = 'Player 2';
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  player0.classList.remove('player-active', 'win');
  player1.classList.remove('player-active', 'win');
  player0.classList.add('player-active');
  dice.classList.add('hidden');
  document.getElementById('glory').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
  document.querySelector('.player-titr_0').classList.remove('win');
  document.querySelector('.player-titr_1').classList.remove('win');
  document.querySelector('.totalScore_0').classList.remove('black');
  document.querySelector('.totalScore_1').classList.remove('black');
};
gameNew();

const win = function () {
  document.getElementById('glory').style.display = 'flex';
  document.getElementById('modal').style.display = 'block';
};

//Roll Function
const roll = function () {
  if (playing) {
    // Roll Dice
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // Roll Dice 2 to 6
    if (diceNum > 1) {
      currentScore += Number(diceNum);
      document.querySelector(`.currentScore_${activePlayer}`).textContent =
        currentScore;
      dice.classList.remove('hidden');
      dice.src = `Dice/Dice-${diceNum}.svg`;
    }
    // Roll Dice 1
    else {
      dice.classList.remove('hidden');
      dice.src = `Dice/Dice-${diceNum}.svg`;
      document.querySelector(
        `.player-titr_${activePlayer}`
      ).textContent = `Player ${activePlayer + 1}`;
      player0.classList.toggle('player-active');
      player1.classList.toggle('player-active');
      document.querySelector(`.currentScore_${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector(
        `.player-titr_${activePlayer}`
      ).textContent = `• Player ${activePlayer + 1}`;
    }
  } else {
    win();
  }
};

// Hold function
const storeSocer = function () {
  if (playing) {
    score[activePlayer] += Number(currentScore);
    if (score[activePlayer] >= 100) {
      // 1. score >= 100
      // 1.1 win style apply to Player
      dice.classList.add('hidden');
      document.querySelector(
        `.player-titr_${activePlayer}`
      ).textContent = `Player ${activePlayer + 1} WIN`;
      document.querySelector(`.player_${activePlayer}`).classList.add('win');
      document
        .querySelector(`.totalScore_${activePlayer}`)
        .classList.add('black');
      document.querySelector(`.totalScore_${activePlayer}`).textContent =
        score[activePlayer];
      document
        .querySelector(`.player-titr_${activePlayer}`)
        .classList.add('win');
      // 1.2 game finished

      setTimeout(win, 1500);

      playing = false;
    } else {
      // 2. score < 100

      // 2.1 change player titr
      document.querySelector(
        `.player-titr_${activePlayer}`
      ).textContent = `Player ${activePlayer + 1}`;

      // 2.2 change style of players
      player0.classList.toggle('player-active');
      player1.classList.toggle('player-active');

      // 2.3 save score of player
      document.querySelector(`.totalScore_${activePlayer}`).textContent =
        Number(score[activePlayer]);

      // 2.4 reset parameters
      document.querySelector(`.currentScore_${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector(
        `.player-titr_${activePlayer}`
      ).textContent = `• Player ${activePlayer + 1}`;
    }
  } else {
    win();
  }
};

hold.addEventListener('click', storeSocer);
rollDice.addEventListener('click', roll);
newGame.addEventListener('click', gameNew);
newGameLink.addEventListener('click', gameNew);

// Datas

// Tests

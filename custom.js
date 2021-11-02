//   Selectors

// Button Selector
const newGame = document.querySelector('.newGame');
const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');
// Element Selector
const player_titr0 = document.querySelector('.player-titr_0');
const player_titr1 = document.querySelector('.player-titr_1');
const totalScore0 = document.querySelector('.totalScore_0');
const totalScore1 = document.querySelector('.totalScore_1');
const currentScore0 = document.querySelector('.currentScore_0');
const currentScore1 = document.querySelector('.currentScore_1');
const player0 = document.querySelector('.player_0');
const player1 = document.querySelector('.player_1');
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

// Attributes
// let player = [a,b ];
let playing;
player_titr0.textContent = '-Player 1';
totalScore0.textContent = 0;
totalScore1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;

// Functions
const roll = function () {
  // Roll Dice
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  // Roll Dice 2 to 6
  if (diceNum > 1) {
    currentScore0.textContent =
      Number(currentScore0.textContent) + Number(diceNum);
    dice.classList.remove('hidden');
    dice.src = `Dice/Dice-${diceNum}.svg`;
  } else {
    player_titr1.textContent = '-Player 2';
    player_titr0.textContent = 'Player 1';
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
    currentScore0.textContent = 0;
  }
};
rollDice.addEventListener('click', roll);

// Datas

// Tests

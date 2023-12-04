document.addEventListener("DOMContentLoaded", function () {
"use strict";


//Global variables
let randomNumber;
let sum = 0;
let currentScore = 0;
let globalScorePlayer1 = 0;
let globalScorePlayer2 = 0;
let currentPlayer = 1;

// Generate random number between 1 and 6
function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

//Set the dice image based on the random number
function setDiceImage(randomNumber) {
  const diceImage = document.getElementById("diceImage");

  //Update the source attribute of the dice image
  diceImage.src = `dice-${randomNumber}.png`;
}

// New Game Button Click
document.getElementById("newGameBtn").addEventListener("click", function () {
  document.getElementById("dice").style.visibility = "hidden";

  document.getElementById('rollDiceBtn').hidden = false;
  document.getElementById('holdBtn').hidden = false;


  globalScorePlayer1 = 0;
  globalScorePlayer2 = 0;
  currentScore = 0;
  sum = 0;

  document.getElementById("current1").textContent = 0;
  document.getElementById("score1").textContent = 0;
  document.getElementById("current2").textContent = 0;
  document.getElementById("score2").textContent = 0;
});

// Roll Dice Button Click
document.getElementById("rollDiceBtn").addEventListener("click", function () {
  
  // Generate random number
  randomNumber = generateRandomNumber();

  //Set the dice image based on the random number
  setDiceImage(randomNumber);

  // Show the dice
  document.getElementById("dice").style.visibility = "visible";

  addSum();
});

//Hold Dice Button Click
document.getElementById('holdBtn').addEventListener('click', function(){
  console.log('Hold dice button clicked');
  
 if(currentPlayer === 1){
    globalScorePlayer1 += currentScore;
    document.getElementById('score1').textContent = globalScorePlayer1;
  } else {
    globalScorePlayer2 += currentScore;
    document.getElementById('score2').textContent = globalScorePlayer2;
  }

  if(globalScorePlayer1 >= 100 || globalScorePlayer2 >= 100){
    console.log(`the game is over. winner is player ${currentPlayer}`);
    document.getElementById('rollDiceBtn').hidden = true;
    document.getElementById('holdBtn').hidden = true;
    return;
  }

  currentScore = 0;
  document.getElementById(`current${currentPlayer}`).textContent = currentScore;

  //switch player 
  switchPlayer();

});

//Switch player
function switchPlayer(){
 currentPlayer = currentPlayer === 1 ? 2 : 1;

// Ukloni klasu "active" sa trenutnog igrača
const currentChild = document.querySelector(`.child${currentPlayer === 1 ? 2 : 1}`);
currentChild.classList.remove('active');
currentChild.classList.add('notactive');
console.log(`current player: ${currentPlayer}`);

// Dodaj klasu "active" na sledećeg igrača
const nextChild = document.querySelector(`.child${currentPlayer}`);
nextChild.classList.remove('notactive');
nextChild.classList.add('active');

}


//Add sum
function addSum(){
  
  //If the random number is 1, reset the sum to 0 and switch players
  if(randomNumber !== 1){
    sum += randomNumber;
    console.log( `The sum is: ${sum}`);
    currentScore += randomNumber;
    document.getElementById(`current${currentPlayer}`).textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current${currentPlayer}`).textContent = currentScore;
    
    switchPlayer();
  }
}

});



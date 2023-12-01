"use strict";
//Global variables
let randomNumber;
let sum = 0;
let currentScore = 0;

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

//Add sum
function addSum(){
  sum += randomNumber;
  console.log( `The sum is: ${sum}`);

  //If the random number is 1, reset the sum to 0

  if(randomNumber !== 1){
  currentScore = document.getElementById("current1");
  currentScore.textContent = sum;
  } else {
    sum = 0;
    currentScore.textContent = sum;
  }

}
//Kad se klikne na hold, dodaj sumu na global score
//Kad se klikne na new game, resetuj sve na 0
//Kad se dodje do 100, prikazi pobednika i onemoguci roll dice i hold





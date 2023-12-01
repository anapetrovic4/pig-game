"use strict";

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
  const randomNumber = generateRandomNumber();

  //Set the dice image based on the random number
  setDiceImage(randomNumber);

  // Show the dice
  document.getElementById("dice").style.visibility = "visible";
});



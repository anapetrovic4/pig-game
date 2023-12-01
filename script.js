"use strict";

// New Game Button Click
document.getElementById("newGameBtn").addEventListener("click", function () {
  document.getElementById("dice").style.visibility = "hidden";
});

// Roll Dice Button Click
document.getElementById("rollDiceBtn").addEventListener("click", function () {
  document.getElementById("dice").style.visibility = "visible";
});



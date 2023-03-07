"use strict";

const buttons = document.querySelectorAll(".player-button");

let computerVisualSelection = document.querySelector(
  ".computer-selection-text"
);
let matchVisualWinner = document.querySelector(".winner-text");
let playerVisualScore = document.querySelector(".player-result");
let computerVisualScore = document.querySelector(".computer-result");

const gameObject = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let winScore = 5;

let playerSelection;
let computerSelection;

function getComputerChoice() {
  const item = ["rock", "paper", "scissors"];
  return item[Math.trunc(Math.random() * 3)];
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playerSelection = this.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    computerSelection;

    if (playerSelection === computerSelection) {
      computerVisualSelection.innerText = computerSelection;
      matchVisualWinner.innerText = "Draw!";
    } else if (
      playerSelection === gameObject[0] &&
      computerSelection === gameObject[2]
    ) {
      computerVisualSelection.innerText = computerSelection;
      matchVisualWinner.innerText = "You Won!!!";
      playerScore++;
      playerVisualScore.innerText = playerScore;
    } else if (
      playerSelection === gameObject[1] &&
      computerSelection === gameObject[0]
    ) {
      computerVisualSelection.innerText = computerSelection;
      matchVisualWinner.innerText = "You Won!!!";
      playerScore++;
      playerVisualScore.innerText = playerScore;
    } else if (
      playerSelection === gameObject[2] &&
      computerSelection === gameObject[1]
    ) {
      computerVisualSelection.innerText = computerSelection;
      matchVisualWinner.innerText = "You Won!!!";
      playerScore++;
      playerVisualScore.innerText = playerScore;
    } else {
      computerVisualSelection.innerText = computerSelection;
      matchVisualWinner.innerText = "You lost! Compuer Won!";
      computerScore++;
      computerVisualScore.innerText = computerScore;
    }

    if (playerScore === 5 || computerScore === 5) {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});

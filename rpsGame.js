const choices = ["rock", "paper", "scissors"];

let computerDisplay = document.getElementById("computerDisplay");
let playerDisplay = document.getElementById("playerDisplay");
let resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
// Function to play the game
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // Reset result display styles
    resultDisplay.classList.remove("showGreen", "showRed");

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "IT IS A TIE";
    } else {
        let result;
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
        resultDisplay.textContent = result;
        // Update result display color based on the result
        if(result === "YOU WIN"){
            resultDisplay.classList.add("showGreen");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        }else if(result ==="YOU LOSE"){
            resultDisplay.classList.add("showRed");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
        else{
            resultDisplay.style.color = "black";
        }
    }

    // Update the display with choices
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    playerDisplay.textContent = `Player: ${playerChoice}`;

    console.log("Computer: ", computerChoice);
    console.log("Player: ", playerChoice);
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
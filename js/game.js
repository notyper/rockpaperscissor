function return_choice(selected) {
    switch (selected) {
        case "1": return "Rock";
            break;
        case "2": return "Paper";
            break;
        case "3": return "Scissors";
            break;
        default: return "invalid";
    }
}

function getComputerChoice() {
    let comp_choice = Math.floor(Math.random() * 3) + 1;
    console.log(comp_choice);
    return return_choice(comp_choice.toString());
}
function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        winner = "It is a tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        winner = "Player is the winner";
    } else {
        winner = "Computer is the winner"
    }

    computerChoice.innerHTML = `The computer chose: ${computerSelection}`;
    playerChoice.innerHTML = `You chose: ${playerSelection}`;
    winDisplay.innerHtml = `${winner}`;

    console.log(`Computer chose: ${computerSelection}\nPlayer chose: ${playerSelection}\nWinner : ${winner}`);
    return winner;
    // return(`Player: ${playerSelection} : Computer ${computerSelection}`)
}

function newGame() {
    computerTotal.innerHTML = 0;
    playerTotal.innerHTML = 0;
    ties.innerHTML = 0;

}

function updateScore(winner) {

    if (winner === "Computer is the winner") {
        let temp = parseInt(computerTotal.innerHTML) + 1
        computerTotal.innerHTML = temp;
        if (temp === 5) {
            alert("Computer has won");
            newGame();
        }
    } else if (winner === "Player is the winner") {
        let temp = parseInt(playerTotal.innerHTML) + 1
        playerTotal.innerHTML = temp;
        if (temp === 5) {
            alert("Player has won");
            newGame();
        }
    } else {
        let temp = parseInt(ties.innerHTML) + 1
        ties.innerHTML = temp;
    }
}



// print opening message
console.log("welcome to the game");
alert("Welcome to Rock Paper Scissors")

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const winDisplay = document.querySelector('#results');
const computerTotal = document.querySelector('#computerTotal');
const playerTotal = document.querySelector('#playerTotal');
const ties = document.querySelector('#ties');

btnRock.addEventListener('click', () => {
    winner = (playRound("Rock", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);

});
btnPaper.addEventListener('click', () => {
    winner = (playRound("Paper", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);
});
btnScissors.addEventListener('click', () => {
    winner = (playRound("Scissors", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);
});

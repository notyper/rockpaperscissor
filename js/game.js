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

    return winner;
}

function newGame() {
    computerTotal.innerHTML = 0;
    playerTotal.innerHTML = 0;
    ties.innerHTML = 0;
    computerChoice.innerHTML = "Waiting for Player";
    playerChoice.innerHTML = "Waiting for Player";
    winDisplay.innerHtml = "Let's play a new game";
    const elements = document.querySelectorAll(".game_button");
    for (const btn of elements) {
        btn.style.visibility = "visible";
    };
    btnPlayGame.style.visibility = "hidden";
}

function updateScore(winner) {
    let temp = 0;
    if (winner === "Computer is the winner") {
        temp = parseInt(computerTotal.innerHTML) + 1
        computerTotal.innerHTML = temp;

    } else if (winner === "Player is the winner") {
        temp = parseInt(playerTotal.innerHTML) + 1
        playerTotal.innerHTML = temp;
    } else {
        temp = parseInt(ties.innerHTML) + 1
        ties.innerHTML = temp;
    }
}

function determineWinner() {
    if (computerTotal.innerHTML === '5') {
        winDisplay.innerHTML = "Computer has won the 5 game match";
        const elements = document.querySelectorAll(".game_button");
        for (const btn of elements) {
            btn.style.visibility = "hidden";
        };
        btnPlayGame.style.visibility = "visible";

    } else if (playerTotal.innerHTML === '5') {
        winDisplay.innerHTML = "Player has won the 5 game match";
        const elements = document.querySelectorAll(".game_button");
        for (const btn of elements) {
            btn.style.visibility = "hidden";
        };
        btnPlayGame.style.visibility = "visible";
    }
}

// print opening message
console.log("welcome to the game");

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const winDisplay = document.querySelector('#results');
const computerTotal = document.querySelector('#computerTotal');
const playerTotal = document.querySelector('#playerTotal');
const ties = document.querySelector('#ties');
const btnPlayGame = document.querySelector('#play');

btnPlayGame.addEventListener('click', () => {
    newGame();
});

btnRock.addEventListener('click', () => {
    winner = (playRound("Rock", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);
    determineWinner();

});
btnPaper.addEventListener('click', () => {
    winner = (playRound("Paper", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);
    determineWinner();
});
btnScissors.addEventListener('click', () => {
    winner = (playRound("Scissors", getComputerChoice()));
    winDisplay.innerHTML = winner;
    updateScore(winner);
    determineWinner();
});

const elements = document.querySelectorAll(".game_button");
for (const btn of elements) {
    btn.style.visibility = "hidden";
}
function return_choice (selected){
    switch (selected){
        case "1": return "Rock";
        break;
        case "2": return "Paper";
        break;
        case "3": return "Scissors";
        break;
        default: return "invalid";
    }
}

function getComputerChoice(){
    let comp_choice = Math.floor(Math.random() * 3) +1;

    return comp_choice;
}
function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        winner = "It is a tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") 
            || (playerSelection === "Paper" && computerSelection === "Rock")
            || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        winner = "Player is the winner";
    } else {
        winner = "Computer is the winner"}
    return winner;
    // return(`Player: ${playerSelection} : Computer ${computerSelection}`)
  }

  function makeSelections () {
    
  }
   
function game() {
    computerWins = 0;
    playerWins = 0;
    tie = 0;

    for (let i = 1; i <= 5; i++) {
        choice = prompt("please choose 1, 2, or 3\n1=Rock, 2=Paper, 3=Scissors");
        console.log("you chose: ", return_choice(choice));
        compChoice = getComputerChoice().toString();
        console.log("The computer chose: ", return_choice(compChoice))

        winner = playRound(return_choice(choice), return_choice(compChoice));
        alert(`Winner : ${winner}`);
        if (winner === "Computer is the winner") {
            computerWins++
        } else if (winner === "Player is the winner") {
            playerWins++
        } else{
            tie++
        }
    }
    alert(`Computer: ${computerWins}\nPlayer: ${playerWins}\nTies: ${tie}`)

}
// print opening message
console.log("welcome to the game");
alert("Welcome to Rock Paper Scissors")
// prompt for choice
game();

// read choice
// generate random computer choice
// determine winner
// output winner
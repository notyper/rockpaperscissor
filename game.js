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
    console.log("computer number ", comp_choice);
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
   

// print opening message
console.log("welcome to the game");
// prompt for choice
console.log("1=Rock, 2=Paper, 3=Scissors");
choice = prompt( "please choose 1, 2, or 3\n1=Rock, 2=Paper, 3=Scissors");
console.log("you chose: ", return_choice(choice));
compChoice = getComputerChoice().toString();
console.log("The computer chose: ",  return_choice(compChoice))

winner = playRound (return_choice(choice), return_choice(compChoice));
console.log(`Winner : ${winner}`);
// read choice
// generate random computer choice
// determine winner
// output winner
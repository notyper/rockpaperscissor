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
    choice = Math.floor(Math.random() * 3) +1;
    console.log("computer number ", choice);
    return choice;
}
console.log('In the game');
// print opening message
console.log("welcome to the game");
// prompt for choice
console.log("1=Rock, 2=Paper, 3=Scissors");
choice = prompt( "please choose 1, 2, or 3\n1=Rock, 2=Paper, 3=Scissors");
console.log("you chose: ", return_choice(choice));
compChoice = getComputerChoice().toString();
console.log("The computer chose: ",  return_choice(compChoice))
// read choice
// generate random computer choice
// determine winner
// output winner
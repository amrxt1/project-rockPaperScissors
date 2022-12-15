
function getComputerChoice(){
    const x = Math.round((Math.random()*2))+1;
    if(x === 1){
        return "Rock";
    }
    else if(x === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playTheGame(e){
    const playerSelection = this.className;
    const computerSelection = getComputerChoice();
    console.log("The computer went for "+computerSelection);
    if(playerSelection === computerSelection){
        console.log("It's a Tie.");
        return 0;
    }
    else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock.");
            return true;
        }
        else if( computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors.");
            return false;
        }
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            console.log("You win! Paper beats Rock.");
            return false;
        }
        else if(computerSelection === "Scissors"){
            console.log("You lose! Scissors cut Paper.");
            return true;
        }
    }
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Paper"){
            console.log("You win! Scissors cut Paper.");
            return false;
        }
        else if(computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissors.");
            return true;
        }
    }
    else{
        console.log("Something went wrong. We will be back(or not).");
        return 0;
    }
}

function caseInSensitive(str){
    str = str.toLowerCase();
    let firstLetter = str.substring(0,1);
    return (firstLetter.toUpperCase() + str.substring(1));
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click',playTheGame));
























let playerSelection = "";
let computerSelection = "";
let computerWins = false;
let playerScore = 0;
let compScore = 0;

function game(){
    console.log("This is a game of Rock, Paper and Scissors.");
        playerSelection = caseInSensitive(prompt("Please Enter your choice."));
        computerSelection = getComputerChoice();
        computerWins = playTheGame(playerSelection, computerSelection);
        
        if(computerWins === 0){
            console.log("You : "+playerScore);
            console.log("The A.I. : "+compScore);
        }
        else if(computerWins){
            compScore++;
        }
        else{
            playerScore++;
        }
        console.log("You : "+playerScore);
        console.log("The A.I. : "+compScore);
    
    if(playerScore>compScore){
        console.log("Congratulations! You win!");
    }
    else if(playerScore<compScore){
        console.log("You lost :(");
    }
    else if(playerScore === compScore){
        console.log("Tough match! It's a tie.");
    }
    else{
        console.log("Something went very wrong.");
    }
}
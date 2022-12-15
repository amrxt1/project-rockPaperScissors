
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

function playTheGame(playerSelection, computerSelection){
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

let playerSelection = "";
let computerSelection = "";
let computerWins = false;
let playerScore = 0;
let compScore = 0;

function winner(){
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
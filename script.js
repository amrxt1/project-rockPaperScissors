
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
    }
    else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            console.log("You lose! Paper beats Rock.");
        }
        else if( computerSelection === "Scissors"){
            console.log("You win! Rock beats Scissors.");
        }
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            console.log("You win! Paper beats Rock.");
        }
        else if(computerSelection === "Scissors"){
            console.log("You lose! Scissors cut Paper.");
        }
    }
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Paper"){
            console.log("You win! Scissors cut Paper.");
        }
        else if(computerSelection === "Rock"){
            console.log("You lose! Rock beats Scissors.");
        }
    }
    else{
        console.log("Something went wrong. We will be back(or not).");
    }
}

function caseInSensitive(str){
    str = str.toLowerCase();
    let firstLetter = str.substring(0,1);
    return (firstLetter.toUpperCase() + str.substring(1));
}

let playerSelection = "";
let computerSelection = "";

function game(playerSelection, computerSelection){
    console.log("This is a game of Rock, Paper and Scissors.");
    for(let i = 0; i<5 ; i++){
        playerSelection = caseInSensitive(prompt("Please Enter your choice."));
        computerSelection = getComputerChoice();
        playTheGame(playerSelection, computerSelection);
    }
}
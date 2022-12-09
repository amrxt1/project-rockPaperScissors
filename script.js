
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
        return "It's a Tie.";
    }
    else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            return "You lose! Paper beats Rock.";
        }
        else if( computerSelection === "Scissors"){
            return "You win! Rock beats Scissors.";
        }
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            return "You win! Paper beats Rock.";
        }
        else if(computerSelection === "Scissors"){
            return "You lose! Scissors cut Paper.";
        }
    }
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Paper"){
            return "You win! Scissors cut Paper.";
        }
        else if(computerSelection === "Rock"){
            return "You lose! Rock beats Scissors.";
        }
    }
    else{
        return "Something went wrong. We will be back(or not)."
    }
}

function caseInSensitive(str){
    str = str.toLowerCase();
    let firstLetter = str.substring(0,1);
    return (firstLetter.toUpperCase() + str.substring(1));
}
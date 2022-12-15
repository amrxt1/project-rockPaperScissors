
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
    sendComputerChoice("The computer went for "+computerSelection);
    if(playerSelection === computerSelection){
        sendPrompt("It's a Tie.");
        return 0;
    }
    else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            sendPrompt("You lose! Paper beats Rock.");
            return true;
        }
        else if( computerSelection === "Scissors"){
            sendPrompt("You win! Rock beats Scissors.");
            return false;
        }
    }
    else if(playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            sendPrompt("You win! Paper beats Rock.");
            return false;
        }
        else if(computerSelection === "Scissors"){
            sendPrompt("You lose! Scissors cut Paper.");
            return true;
        }
    }
    else if(playerSelection === "Scissors"){
        if(computerSelection === "Paper"){
            sendPrompt("You win! Scissors cut Paper.");
            return false;
        }
        else if(computerSelection === "Rock"){
            sendPrompt("You lose! Rock beats Scissors.");
            return true;
        }
    }
    else{
        sendPrompt("Something went wrong. We will be back(or not).");
        return 0;
    }
}


const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click',playTheGame));

function sendPrompt(string){
    const prompt = document.querySelector('.prompts');
    prompt.textContent = string;
}

function sendComputerChoice(string){
    const computerSelection = document.querySelector('.computerChoice');
    computerSelection.textContent = string;
}

















// function caseInSensitive(str){
//     str = str.toLowerCase();
//     let firstLetter = str.substring(0,1);
//     return (firstLetter.toUpperCase() + str.substring(1));
// }



// let playerSelection = "";
// let computerSelection = "";
// let computerWins = false;
// let playerScore = 0;
// let compScore = 0;

// function game(){
//     console.log("This is a game of Rock, Paper and Scissors.");
//         playerSelection = caseInSensitive(prompt("Please Enter your choice."));
//         computerSelection = getComputerChoice();
//         computerWins = playTheGame(playerSelection, computerSelection);
        
//         if(computerWins === 0){
//             console.log("You : "+playerScore);
//             console.log("The A.I. : "+compScore);
//         }
//         else if(computerWins){
//             compScore++;
//         }
//         else{
//             playerScore++;
//         }
//         console.log("You : "+playerScore);
//         console.log("The A.I. : "+compScore);
    
//     if(playerScore>compScore){
//         console.log("Congratulations! You win!");
//     }
//     else if(playerScore<compScore){
//         console.log("You lost :(");
//     }
//     else if(playerScore === compScore){
//         console.log("Tough match! It's a tie.");
//     }
//     else{
//         console.log("Something went very wrong.");
//     }
// }
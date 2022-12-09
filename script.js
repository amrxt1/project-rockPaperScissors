
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
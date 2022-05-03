/*function computerPlay(){
    if (Math.floor(Math.random()*3)=== 0){
        return("Rock") 
    }  else if (Math.floor(Math.random()*3)=== 1){
        return("Paper");

    } else {
        return("Scissors");
    }
}
console.log(computerPlay());*/
let playerScore = 0;
let computerScore = 0;
let roundWinner="";

function computerPlay(){
    let options = ["rock", "paper" , "scissors"];
    let input = options[Math.floor(Math.random()*3)];
    return (input);
}
//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()===computerSelection){
        alert ("its a draw!");
    }
    if (playerSelection.toLowerCase()==="rock"){
        if(computerSelection=="paper"){
            alert ("you lose! paper beats rock");
            console.log(roundWinner="computer wins");
            console.log(computerScore++);
            
        } else if (computerSelection=="scissors"){
            alert ("you win! rock beats scissors");
            console.log(roundWinner="player wins");
            console.log(playerScore++);
        } 
    }
    if (playerSelection.toLowerCase()==="paper"){
        if(computerSelection=="rock"){
            alert ("you win! paper beats rock");
            console.log(roundWinner="player wins");
            console.log(playerScore++);
        } else if (computerSelection=="scissors"){
            alert ("you lose! scissors beats rock");
            console.log(roundWinner="computer wins");
            console.log(computerScore++);
        } 
    }
    if (playerSelection.toLowerCase()==="scissors"){
        if(computerSelection=="paper"){
            alert ("you win! scissors beats paper");
            console.log(roundWinner="player wins")
            console.log(playerScore++);
        } else if (computerSelection=="rock"){
            alert ("you lose! rock beats scissors");
            console.log(roundWinner="computer wins");
            console.log(computerScore++);
        } 
    }

}
//const playerSelection = prompt("please enter either rock or paper or scissors");
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Do you choose rock, paper or scissors?: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerPlay()));
        if (playerScore > computerScore){
            console.log ("player wins game!")
            console.log(playerScore++);
        }
        else if (computerScore>playerScore){
            console.log ("computer wins game!")
            console.log(computerScore++);
        } else {
            return "its a draw!"
        }
        
    }
}
console.log(game());
//console.log("player final score is " + playerScore + " wins !" + computerScore + " computer loses.\n"); */
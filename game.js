let playerScore = 0;
let computerScore = 0;
let draw=0;

//UI
const buttons = document.querySelectorAll('.button');
const pScore=document.querySelector('#pScore');
const cScore=document.querySelector('#cScore');
const message=document.querySelector("#roundWinner")
const newRound = document.querySelector('#refresh');



newRound.addEventListener('click', reset);

buttons.forEach((button) => {
    button.addEventListener("click", function getInputs(){
    const img = button.querySelector("img");
    let playerSelection = img.alt.toLowerCase();
    let computerSelection = computerPlay();

    CompareResults(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
        checkWinner();
        buttons.forEach(button => {
            button.removeEventListener('click', getInputs);
          });
        
        
    }
    });
});
function computerPlay(choices){
    choices= ["rock","paper",'scissors']
    let input = choices[Math.floor(Math.random()*3)]
    return input;
}

function CompareResults(playerSelection,computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    const currentMatch = `${playerSelection} vs ${computerSelection}`;
    if (playerSelection === computerSelection) {
        alert (`${currentMatch} is a Draw`);
        return;
    }
    if((playerSelection)==="rock"){
        if(computerSelection==="scissors"){
            return pScore.textContent=++playerScore;

        } else {
            return cScore.textContent=++computerScore;
        }
    }
    else if((playerSelection)==="scissors"){
        if(computerSelection==="paper"){
            return pScore.textContent=++playerScore;

        } else {
            return cScore.textContent=++computerScore;
        }
    }
    else if((playerSelection)==="paper"){
        if(computerSelection==="rock"){
            return pScore.textContent=++playerScore;

        } else {
            return cScore.textContent=++computerScore;
        }
    }
    else {
        alert("please input either rock,paper or scissors")
    }
}

//helper functions
function reset(){
    return location.reload(true);
}

function checkWinner(){
    if (playerScore >= 5 && computerScore < 5) {
        message.textContent= 'Game Over. You Win';
        //alert('Game Over. You Win!');
    } else if(playerScore < 5 && computerScore >= 5) {
        message.textContent = 'Game Over. You Lose!';
        //alert('Game Over. You Lose!');
    } else {
       reset();
    
    }   
}





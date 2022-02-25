function computerPLay(){ 
    let a = Math.floor(Math.random() * 3); // Returns an integer from 0 to 2  

    switch(a)
    {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:
            return 'scissor'; 
    }
}
function playRound(computerPLay, playerPLay){
    switch (true)
    {
        case computerPLay === playerPLay:
            return 0;
        case computerPLay == 'rock' && playerPLay == 'paper':
            return 1;
        case computerPLay == 'scissor' && playerPLay == 'paper':
            return -1;
        case computerPLay == 'paper' && playerPLay == 'rock':
            return -1;
        case computerPLay == 'scissor' && playerPLay == 'rock':
            return 1;
        case computerPLay == 'paper' && playerPLay == 'scissor':
            return 1;
        case computerPLay == 'rock' && playerPLay == 'scissor':
            return -1;   
    }
}
function CheckWinner(computerScore, playerScore){
    
    if(computerScore >= 5 || playerScore >= 5)
    {
        buttons.forEach(function(button){
            button.removeEventListener('click', click);
        })
        reset(computerScore, playerScore);
    }
}
function click() {
    
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const status = document.querySelector('#status'); 

    let computer = computerPLay();
    let oneRound = playRound(computer, this.id);

    if (oneRound == 0)
    {   
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        status.textContent = "It is a tie.";
    }
    else if (oneRound == 1)
    {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        status.textContent = `Player's ${this.id} beats Computer's ${computer}`;

    }
    else if (oneRound == -1)
    {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        status.textContent = `Computer's ${computer} beats Player's ${this.id}`;
    }

    CheckWinner(parseInt(computerScore.textContent), parseInt(playerScore.textContent));
}
function reset(computerScore, playerScore)
{
    const status = document.querySelector('#status'); 
    if (computerScore > playerScore)
        status.innerHTML = '<h1>You lost!!</h1>';
    else if (playerScore > computerScore)
        status.innerHTML = '<h1>You won!!</h1>';
    else 
        status.innerHTML = '<h1>IT IS A TIE:(</h1>';  
    
    const reset = document.createElement('button');
    reset.innerHTML = '<h2>RESET</h2>';
    reset.classList.add('button');

    reset.addEventListener('click', () => {
        const buttons = document.querySelectorAll(".button");

        buttons.forEach(function(button) {
            button.addEventListener('click', click);
        });
        document.querySelector('#player-score').textContent = '0';
        document.querySelector('#computer-score').textContent = '0';
    })
    status.appendChild(reset);

}
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
    button.addEventListener('click', click);
});

document.querySelector('#reset').reset();
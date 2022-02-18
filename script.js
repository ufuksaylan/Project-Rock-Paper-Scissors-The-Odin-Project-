function playerPLay()
{
    let playerSelection = prompt("write Rock, Paper, or Scissors").toLowerCase();
    return playerSelection;
}
function computerPLay(){ 
    let a = Math.floor(Math.random() * 3); // Returns an integer from 0 to 2  

    switch(a)
    {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:
            return 'scissors'; 
    }
}
function playRound(computerPLay, playerPLay){
    switch (true)
    {
        case computerPLay === playerPLay:
            return 0;
        case computerPLay == 'rock' && playerPLay == 'paper':
            return 1;
        case computerPLay == 'scissors' && playerPLay == 'paper':
            return -1;
        case computerPLay == 'paper' && playerPLay == 'rock':
            return -1;
        case computerPLay == 'scissors' && playerPLay == 'rock':
            return 1;
        case computerPLay == 'paper' && playerPLay == 'scissors':
            return 1;
        case computerPLay == 'rock' && playerPLay == 'scissors':
            return -1;   
    }
}
function game(){
    let computer = 0; 
    let person = 0; 
    let oneRound;
    for (let i = 0; i < 5; i++) {

        let oneRound = playRound(computerPLay(), playerPLay());
        if (oneRound == 0)
        {
            person++;
            computer++;
            console.log("It is a tie.")
        }
        else if (oneRound == 1)
        {
            person++;
            console.log("you won!");
        }
        else
        {
            computer++;
            console.log("you lost!");
        }
    } 
    (computer > person) ? console.log(`The winner is computer.\ncomputer: ${computer}\nyou: ${person}`) : console.log(`The winner is you.\ncomputer: ${computer}\nyou: ${person}`);
}
game();
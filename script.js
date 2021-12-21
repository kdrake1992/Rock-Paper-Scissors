"use strict"


const game = function(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i < rounds; i++) {
        const computerPlay = function() {
            const selection = ['Rock', 'Paper', 'Scissors'];
            const choice = selection[Math.floor(Math.random() * 3)]
            return choice;
        }
        
        const playRound = function(playerSelection, computerSelection) {
            let player = playerSelection.toLowerCase();
            player = player.charAt(0).toUpperCase() + player.slice(1);
        
            if((player === 'Rock' && computerSelection === 'Rock')
                || (player === 'Paper' && computerSelection === 'Paper')
                || (player === 'Scissors' && computerSelection === 'Scissors')) {
                
                return `Tie!`
            }
            else if((player === 'Rock' && computerSelection === 'Scissors')
                || (player === 'Paper' && computerSelection === 'Rock')
                || (player === 'Scissors' && computerSelection === 'Paper')) {
                
                humanScore++;
                return `You Win! ${player} beats ${computerSelection}`
            }
            else if((computerSelection  === 'Rock' && player === 'Scissors')
            || (computerSelection  === 'Paper' && player === 'Rock')
            || (computerSelection  === 'Scissors' && player=== 'Paper')) {

                computerScore++;
                return `You Lose! ${computerSelection} beats ${player}`
            }
            else {
                return `Incorrect input! Try again.`
            }
          }
        
          const playerSelection = prompt('Enter Rock, Paper, or Scissors')
          const computerSelection = computerPlay();
          console.log(playRound(playerSelection, computerSelection));

          console.log(humanScore,computerScore)
    }

    if(humanScore > computerScore) {
        return 'You win!';
    }
    else if(computerScore > humanScore) {
        return 'You lose!';
    }
    else {
        return 'Tie!';
    }
}

const rounds = prompt('How many rounds of Rock, Paper, Scissors do you want to play?')
console.log(game(rounds));

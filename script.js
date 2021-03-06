"use strict"

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector('.results')
const round = document.createElement('div');
const resultList = document.createElement('div');
const scores = document.createElement('div');

const computerPlay = function() {
    const selection = ['Rock', 'Paper', 'Scissors'];
    const choice = selection[Math.floor(Math.random() * 3)]
    return choice;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id, computerPlay())
    });
});

const currentScores = function() {
    scores.classList.add('content');
    scores.textContent = humanScore + " - " + computerScore;
    results.appendChild(scores);
}

const resetScore = function() {
    humanScore = 0;
    computerScore = 0;
}

const game = function(playerSelection, computerSelection) {

        const playRound = function(playerSelection, computerSelection) {
        
            if(playerSelection === computerSelection) {
                return `Tie!`;
            }
            else if((playerSelection=== 'Rock' && computerSelection === 'Scissors')
                || (playerSelection === 'Paper' && computerSelection === 'Rock')
                || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
                
                humanScore++;
                return `You Win! ${playerSelection} beats ${computerSelection}.`
            }
            else{
                computerScore++;
                return `You Lose! ${computerSelection} beats ${playerSelection}.`
            }
          }
          round.classList.add('content');
          round.textContent = playRound(playerSelection, computerSelection);
          results.appendChild(round);

    if(humanScore > computerScore) {

        if(humanScore === 5) {
            resultList.classList.add('content');
            resultList.textContent = 'WINNER!';
            results.appendChild(resultList);
            currentScores();
            resetScore();
            
        }
        else {
            resultList.classList.add('content');
            resultList.textContent = 'You are currently leading.';
            results.appendChild(resultList);
            currentScores();
        }

    }
    else if(computerScore > humanScore) {

        if(computerScore === 5) {
            resultList.classList.add('content');
            resultList.textContent = 'You lost!';
            results.appendChild(resultList);
            currentScores();
            resetScore();

        }
        else {
            resultList.classList.add('content');
            resultList.textContent = 'You are currently losing.';
            results.appendChild(resultList);
            currentScores();
        }
    }

    else {
        resultList.classList.add('content');
        resultList.textContent = 'Currently tied.';
        results.appendChild(resultList);
        currentScores();
    }
}
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Instead of having two separate variables for each player's score, let's create one holding both scores
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//Select the current player's score
// document.querySelector('#current-' + activePlayer).textContent = dice;

//Do not display the dice at the beginning 
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//We use an anonymous function to handle the click. We could've used a callback, definying the funcion and having the event listener call if for us
document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1; 
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    //Change image accordingly
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add currentScore to globalScore
    scores[activePlayer] += roundScore;
    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    } else {
        nextPlayer();
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // roundScore += dice;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Change background
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';        
}
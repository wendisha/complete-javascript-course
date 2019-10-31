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
document.querySelector('#current-' + activePlayer).textContent = dice;

//Do not display the dice at the beginning 
document.querySelector('.dice').style.display = 'none';

//We use an anonymous function to handle the click. We could've used a callback, definying the funcion and having the event listener call if for us
document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1; 
});
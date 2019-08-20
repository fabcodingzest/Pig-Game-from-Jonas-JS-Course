/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, gamePlaying, first, second;

init();

// var x = document.querySelector('#score-0').textContent;//getter

// console.log(x);




document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    document.getElementById('dice1').style.display='block';
    document.getElementById('dice2').style.display='block';
    document.getElementById('dice1').src = 'dice-' + dice + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    

    //3. Update the round score If the rolled number was Not 1  

    if(dice !== 1 && dice2 !==1){
        //Add score
            roundScore += (dice + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        nextPlayer();}

    /*
    if(dice === 6 && first ===6){
        //Player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
    }
    else if(dice !== 1){
        //Add score
            roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        nextPlayer();
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
    }
    first = dice;*/
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
            //Add CURRENT SCORE to GLOBAL SCORE
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.input').value;
        var winningScore ;

        //Undefined, 0, null, or"are COERCED to false
        //Anything else is COERCED true
        if(input) {
            winningScore = input;
        }else{
            winningScore = 100;
        }

    //Check if Player won the game
    

    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!';
        document.getElementById('dice1').style.display='none';
        document.getElementById('dice2').style.display='none';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
    }else{
        //Next Player
        nextPlayer();
    }
    }

});

function nextPlayer(){
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice1').style.display='none';
    document.getElementById('dice2').style.display='none';
}


document.querySelector('.btn-new').addEventListener('click', init);




function init (){
gamePlaying = true;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('dice1').style.display='none';
document.getElementById('dice2').style.display='none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}






//document.querySelector('#current-' + activePlayer).textContent = dice;//setter

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
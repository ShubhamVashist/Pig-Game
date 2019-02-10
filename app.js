// Game Starts

var scores, roundScore,activePlayer,gamePlaying;

init();
/*function btn() {
    //code
}
document.querySelector('.btn-roll').addEventListener('click',btn);*/

//anonymous function
document.querySelector('.btn-roll').addEventListener('click',function(){
    //do something here
    if(gamePlaying) {
    //1. Random number
    var dice = Math.floor(Math.random() *6 ) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3. Update the Ground score if the rolled number was not 1
    if(dice !== 1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    } else {
        //Next Player
       nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying) {
    //Add the current score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    //update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]
    
    //check who won the game
    if(scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
    //Next Player
    nextPlayer();
        }
    }
});



function nextPlayer(){
//Next Player
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundScore = 0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';    
}


//new game button
document.querySelector('.btn-new').addEventListener('click',init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent=dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>";

//var x = document.querySelector('#score-0').textContent;
//console.log(x);
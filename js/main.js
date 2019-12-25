  const ACTION = ['scissors', 'paper', 'rock'];

  // Player & Computer Score Element

  let playerScore   = document.getElementById('player-score'),
      computerScore = document.getElementById('computer-score');

  // Player & Computer Score Element

  let playerMove = document.getElementById('player-move'),
      computerMove = document.getElementById('computer-move');

  // Action Element

  let action = document.getElementsByClassName('action');

      for( let i=0; i < action.length; i++ ){

        document.getElementsByClassName('action')[i].addEventListener('click', function(){

          let ready   = document.getElementById('ready');
          if(ready) ready.remove();

          let playerAction = this.getAttribute('data-action');
          let computerAction = getComputerAction();

          if(playerAction == computerAction){

            displayComputerMove(computerAction);
            displayPlayerMove(playerAction);
            displayMessage();

          }else if(playerAction == 'scissors'){
            if(computerAction == 'paper'){

              playerWin();
              displayComputerMove('paper');

            }else{

              computerWin();
              displayComputerMove('rock');
            }

            displayPlayerMove('scissors');

          }else if(playerAction == 'paper'){
            if(computerAction == 'scissors'){

              computerWin();
              displayComputerMove('scissors');

            }else{

              playerWin();
              displayComputerMove('rock');

            }

            displayPlayerMove('paper');

          }else if (playerAction == 'rock') {
            if(computerAction == 'scissors'){

              playerWin();
              displayComputerMove('scissors');

            }else{

              computerWin();
              displayComputerMove('paper');

            }

            displayPlayerMove('rock');

          }

        });
      }


// Get Computer Move

function getComputerAction(){
  return ACTION[Math.floor( Math.random() * ACTION.length )];
}

// Display Player & Computer Move

function displayPlayerMove(move){
    playerMove.innerHTML = '<img src="icons/'+ move + '.png" alt="'+ move + '" width="100px">';
}

function displayComputerMove(move){
    computerMove.innerHTML = '<img src="icons/'+ move + '.png" alt="'+ move + '" width="100px">';
}

// The winner

function playerWin(){
  let newScore = parseInt(playerScore.textContent) + 1;
  playerScore.innerText = newScore ;

  displayMessage('win');
}

function computerWin(){
  let newScore = parseInt(computerScore.textContent) + 1;
  computerScore.innerText = newScore ;

  displayMessage('lose');
}

// Messages

function displayMessage(msg){
  let messageDiv = document.createElement('div');
      messageDiv.setAttribute('id', 'message');
      messageDiv.setAttribute('class', 'message')

 let message = document.getElementById('message');

  if(message == null )
    document.getElementById('battlefield').appendChild(messageDiv);

  if(msg == 'win'){
    document.getElementById('message').innerHTML = '<h2 style="color:#57eb4d">You win</h2>';
  }else if (msg == 'lose'){
    document.getElementById('message').innerHTML = '<h2 style="color:#EB4D55">You lose</h2>';

  }else{
    document.getElementById('message').innerHTML = '<h2 style="color:#fff">Draw</h2>';

  }

}


// Reset

function reset(){

  let ready = document.getElementById('ready');

  if(ready) return 0;

  let moveDiv = document.getElementById('move');

  let strongEle = document.createElement('strong');

  strongEle.setAttribute('id', 'ready');

  strongEle.innerHTML = 'Make your move';

  moveDiv.prepend(strongEle);

  playerMove.children[0].remove();
  computerMove.children[0].remove();

  playerScore.textContent = 0;
  computerScore.textContent = 0;

  message.remove();


}

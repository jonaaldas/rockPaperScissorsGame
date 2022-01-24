//DOM Variables 

const comp_span = document.querySelector('.comp');
const user_span = document.querySelector('.user');
computerScore = 0;
userScore = 0

const resultMsg = document.querySelector('.result-msg');

const you = document.querySelector('.user-score');

const results = document.querySelector('.results')
const options = document.querySelector('.options')
const option = document.querySelectorAll('.option');

// Random Computer Generated 
const randomOption = ['r', 'p', 's'];
const randomNum = Math.round(Math.random() * 2);
//computer selection
let computer_selector = randomOption[randomNum];

option.forEach(e => {
    e.addEventListener('click', userGame)
});

let mySelection;
//we select the option we want
function userGame(){
    mySelection = this.id;
    gameFunctionality(computer_selector, mySelection)
}

const log = console.log
function gameFunctionality(computer, user){

    if(computer === 'r' && user === 'p' || computer === 'p' && user === 'r'){
        if(user === 'p'){
            user_span.innerHTML++
            resultMsg.innerText = `${playerName} Paper beats computers Rock`
        } 
        if(computer === 'p') {
            comp_span.innerHTML++
            resultMsg.innerText = `Computers Paper beats ${playerName} Rock`
        }
        log('Paper Wins');
    } else if(computer === 'p' && user === 's' || computer === 's' && user === 'p'){
        if(user === 's'){
            user_span.innerHTML++
            resultMsg.innerText = `${playerName} Scissors beats computers Paper`
        } else if(computer === 's') {
            comp_span.innerHTML++;
            resultMsg.innerText = `Computers Scissors beats ${playerName} Paper`
        }
        log('Scissors Beats Paper');
    } else if(computer === 'r' && user === 's' || computer === 's' && user === 'r'){
        if(user === 'r'){
            user_span.innerHTML++
            resultMsg.innerText = `${playerName} Rock beats computers Scissors`
        } else if(computer === 'r') {
            comp_span.innerHTML++;
            resultMsg.innerText = `Computers Rock beats ${playerName} Scissors`
        }
        log('Rock Beats Paper');
   } else if(computer === user){
       log('Tie');
       resultMsg.innerText = `Its a tie`
   }

}


// player selcts its chooses its name 

const btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', getName);

let playerName;
function getName(){
    playerName = prompt('what is your name?');
    you.innerText = playerName;
    btnStart.remove()
    selctOption();
    options.style.display = 'block';
    comp_span.innerText = computerScore;
    user_span.innerText = userScore;
}


//starts the game by asking them to select an option

function selctOption(){
    document.querySelector('.question').style.display = 'block';
}

let restartGameBtn = document.querySelector('.btn-restart');
restartGameBtn.addEventListener('click', reloadGame);

function reloadGame(){
    window.location.reload()
}


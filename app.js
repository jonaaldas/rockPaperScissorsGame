//DOM Variables 

const comp_span = document.querySelector('.comp');
const user_span = document.querySelector('.user');
const you = document.querySelector('.user-socore');

const results = document.querySelector('.results')

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
function userGame(e){
    mySelection = this.id;
    if(mySelection === 'r'){
        option[1].remove();
        option[2].remove();
    } else if(mySelection === 'p'){
        option[0].remove();
        option[2].remove();
    } else {
        option[0].remove();
        option[1].remove();
    }

    timeOut()
   
    // setTimeout(function(){
    // }, 3000)
}

const log = console.log
function gameFunctionality(computer, user){

    if(computer === 'r' && user === 'p' || computer === 'p' && user === 'r'){
        log('Paper Wins');
    } else if(computer === 'p' && user === 's' || computer === 's' && user === 'p'){
        log('Scissors Beats Paper');
    } else if(computer === 'r' && user === 's' || computer === 's' && user === 'r'){
        log('Rock Beats Paper');
   } else if(computer === user){
       log('Tie')
   }
}


let stopTimer;
let timerHTML;
let counter;
function timeOut(){
    counter = 3
    timerHTML = document.querySelector('p');
    timerHTML.innerHTML = counter
    stopTimer = setInterval(() => {
        timerHTML.innerHTML = counter--
        console.log('I am the interval')
        if(counter === -1){
            clearInterval(stopTimer)
            gameFunctionality(computer_selector, mySelection)
        }
    }, 1000);
}

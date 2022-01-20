//DOM Variables 

const comp_span = document.querySelector('.comp');
const user_span = document.querySelector('.user');
const you = document.querySelector('.user-socore');

const results = document.querySelector('.results')

const option = document.querySelectorAll('.option');

// Random Computer Generated 
const randomOption = ['r', 'p', 's'];
const randomNum = Math.round(Math.random() * randomOption.length);
let computer_selector = randomOption[randomNum];

console.log(computer_selector, randomNum)
option.forEach(e => {
    e.addEventListener('click', userGame)
});


//we select the option we want
function userGame(){
    let mySelection = this.id;
    console.log(mySelection);

}




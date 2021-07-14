var choices = ["rock", "paper", "scissors"];
var scoreEl = document.querySelector("#score")
var buttons = document.querySelectorAll(".pick");
var main = document.querySelector("#main");
var selection = document.querySelector("#selection");
var play = document.querySelector("#play");
var user_select = document.querySelector("#user_select");
var comp_select = document.querySelector("#comp_select");
var winner = document.querySelector('#winner');
var openBtn = document.querySelector("#open");
var closeBtn = document.querySelector("#close")
var model = document.querySelector("#model");

var score = 0;
var userChoice;

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        userChoice = this.id;
        chechWinner();
    });
});

play.addEventListener('click', function(){
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click', function(){
    model.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
    model.style.display = 'none';
})

function chechWinner(){
    var compChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(comp_select, compChoice);

    if(compChoice === userChoice){
        winner.innerHTML = 'draw';

    } else if(
        (userChoice === 'paper' && compChoice === 'rock') 
        ||
        (userChoice === 'rock' && compChoice === 'scissors')
        ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ){
        updateScore(1);
        
        winner.innerHTML = 'you win';
    } else {
        updateScore(-1);
        winner.innerHTML = 'you lost';
    }


    main.style.display = "none";
    selection.style.display = "flex";
}

function updateScore(value){
    score += value;
    scoreEl.innerHTML = score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice){
    selectionEl.classList.remove('paper');
    selectionEl.classList.remove('rock');
    selectionEl.classList.remove('scissors');

    var img = selectionEl.querySelector(`img`);
    selectionEl.classList.add(`${choice}`);
    img.src = `images/icon-${choice}.svg`;
    img.alt = choice;
}
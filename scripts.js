// TO DO LIST
// 1. Create a way to pick you choice to show on screen.
// 2. Computer Picks their choice and send it on screen.
// 3. Depending on the two choices, did you win?

// Human, our Choice
const human = document.querySelector('p');


function getChoice(){
   let hChoice =  prompt("PICK YOUR CHOICE: ROCK, PAPER, SCISSORS");
   if(hChoice == ""){
       getChoice()
   }
if(hChoice == 'rock'){
human.textContent = hChoice.toUpperCase()
}
else if(hChoice == 'paper'){
human.textContent = hChoice.toUpperCase()}
else if(hChoice == 'scissors'){
    human.textContent = hChoice.toUpperCase()
}
};
// Computer Pick
// bot then botSide is to get the P inside the Div
const choices = ['rock',"paper", "scissors"]
const bot = document.getElementsByClassName("bot")[0]; //div

function botChoice (){ 
let bChoice = bot.getElementsByClassName("botSide")[0]; //p
if(bChoice.textContent ===  "paper" || "rock" || "scissors"){
    bChoice.textContent = choices[Math.floor(Math.random() * choices.length)].toUpperCase();
}};

const winner = document.querySelector("h3")
// Winner
function getWinner(){
    let bChoice = bot.getElementsByClassName("botSide")[0];
    if(human.textContent == "ROCK" && bChoice.textContent == "PAPER"){
winner.textContent = "YOU LOSE, Paper covers Rock!"}
    else if(human.textContent=="PAPER" && bChoice.textContent == "SCISSORS"){
winner.textContent = "You LOSE, Scissors cuts Paper!"
    }
    else if(human.textContent == "SCISSORS" && bChoice.textContent == "ROCK"){
        winner.textContent = "YOU LOSE, Rock breaks Scissors!"
    }
    else if (human.textContent == bChoice.textContent){
        winner.textContent = "DRAW, PLAY AGAIN!"
    }
    else{
        winner.textContent = "YOU'RE A BIG WINNER!"
    }
};

// button function to add onto page
const button = document.querySelector('input');
button.onclick = function (){
getChoice();
botChoice();
getWinner();
};




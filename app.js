let userScore = 0; 
let compScore = 0;
const userScore_span = document.getElementById("user-score");   
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function win(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = user + smallUserWord + " beats " + comp + smallCompWord + ". You win!";
    user_div.classList.add('green-glow');
    setTimeout(function() {user_div.classList.remove('green-glow')}, 500);
}

function lose(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);

    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = user + smallUserWord + " loses to " + comp + smallCompWord + ". You lose!";
    user_div.classList.add('red-glow');
    setTimeout(function() {user_div.classList.remove('red-glow')}, 500);
    //setTimeout(() => user_div.classList.remove('red-glow'), 500); ES6 syntax
}

function tie(user, comp){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const user_div = document.getElementById(user);

    result_p.innerHTML = user + smallUserWord + " tied with " + comp + smallCompWord + ". You tied!";
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() {user_div.classList.remove('gray-glow')}, 500);
}

function game(userChoice){
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice){            
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, compChoice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(userChoice, compChoice);
            break;
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
             tie(userChoice, compChoice);
             break;
    }

}

function main(){
    rock_div.addEventListener("click", function(){ 
        game("Rock");
    })
    paper_div.addEventListener("click", function(){
        game("Paper");
    })
    scissors_div.addEventListener("click", function(){
        game("Scissors");
    })
    //rock_div.addEventListener("click", () => game("Rock")); ES6 syntax
}

main();
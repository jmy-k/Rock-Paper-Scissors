function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
        case 0:
            return "rock";
            break
        case 1:
            return "scissors";
            break
        case 2:
            return "paper";
            break
    }
}


function playRound (){
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    answer=prompt("Rock, paper, scissors?");
    const playerSelection = answer.toLowerCase();
    console.log(playerSelection);

    if (playerSelection===computerSelection){
        return ("Tie!")
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        return ("You lose! Paper beats rock.")
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        return ("You win! Rock beats scissors.")
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        return ("You win! Paper beats rock.")
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return ("You lose! Scissors beats paper.")
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        return ("You win! Scissors beats paper.")
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return ("You lose! Rock beats scissors.")
    }
    
}

function game(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
        console.log(playRound());
        }
}
console.log(game())
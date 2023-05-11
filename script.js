// computer selection function
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

// intialize players scores to zero and games played to zero
let playerScore=0;
let computerScore=0;
let numOfGames=0;

// event listener for player selection
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let element = event.target;
        let rock = "rock";
        let paper="paper";
        let scissors = "scissors";
        // end game if one of players gets 5 points
    if (playerScore===5 || computerScore===5){
        game(playerScore,computerScore);
    }
    else{
            if (element.classList.contains("rock")){
                console.log (playRound(rock));
            }
            else if (element.classList.contains("paper")){
                console.log(playRound(paper));
            }
            else if (element.classList.contains("scissors")){
                console.log(playRound(scissors));
            }
    }
    });
});

// main game function
function playRound (playerSelection){

    const computerSelection = getComputerChoice();
    console.log("computer chooses: " + computerSelection);
    console.log("player chooses: "+playerSelection);

    const gameStatus=document.querySelector('.gamestatus');

    if (playerSelection===computerSelection){
        numOfGames++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="Tie! No points added.";
        }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        numOfGames++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You lose! Paper beats rock.";
        }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        numOfGames++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You win! Rock beats scissors.";
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        numOfGames++;
        playerScore++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You win! Paper beats rock.";
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        numOfGames++;
        computerScore++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You lose! Scissors beats paper.";
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        numOfGames++;
        playerScore++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You win! Scissors beats paper.";
        
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        numOfGames++;
        computerScore++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        game(playerScore,computerScore);
        gameStatus.textContent="You lose! Rock beats scissors.";
    }
}
    

// score track
function game(playerScore,computerScore){
    if (playerScore===5 || computerScore===5){
        if (playerScore > computerScore){
            const gameStatus = document.querySelector('.gamestatus').innerHTML = `Game over! Player Wins!`;
        }
        else if (computerScore > playerScore){
            const gameStatus = document.querySelector('.gamestatus').innerHTML = `Game over! Computer Wins!`;
        }
        else{
            const gameStatus = document.querySelector('.gamestatus').innerHTML = `Game over! Tie!`;
        }
    }
}


//function game(){
//    for (let i = 1; i <= 5; i++){
//        console.log(i);
//        console.log(playRound());
//        }


// console.log(game())
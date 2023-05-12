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
    if (playerScore===5||computerScore===5){
        return null;
    }
    else{
        if (element.classList.contains("rock")){
            playRound(rock);
        }
        else if (element.classList.contains("paper")){
            playRound(paper);
        }
        else if (element.classList.contains("scissors")){
            playRound(scissors);
        }
    }    
    });
});

// main game function
function playRound(playerSelection){

    const computerSelection = getComputerChoice();

    // prints players' choices
    const playerChoice=document.querySelector('#playerchoice');
    playerChoice.textContent="Player chooses "+playerSelection;
    const computerChoice=document.querySelector('#computerchoice');
    computerChoice.textContent="Computer chooses "+computerSelection;

    const gameStatus=document.querySelector('.gamestatus');

    if (playerSelection===computerSelection){
        numOfGames++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="Tie! No points added.";
        game(playerScore,computerScore);
        }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        numOfGames++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You lose! Paper beats rock.";
        game(playerScore,computerScore);
        }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        numOfGames++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You win! Rock beats scissors.";
        game(playerScore,computerScore);
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        numOfGames++;
        playerScore++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You win! Paper beats rock.";
        game(playerScore,computerScore);
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        numOfGames++;
        computerScore++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You lose! Scissors beats paper.";
        game(playerScore,computerScore);
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        numOfGames++;
        playerScore++;
        const currentPlayerScore = document.querySelector('#playerscore').innerHTML = `Player Score: ${playerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You win! Scissors beats paper.";
        game(playerScore,computerScore);
        
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        numOfGames++;
        computerScore++;
        const currentComputerScore = document.querySelector('#computerscore').innerHTML = `Computer Score: ${computerScore}`;
        const currentNumOfGames = document.querySelector('.numofgames').innerHTML = `Number of games played: ${numOfGames}`;
        gameStatus.textContent="You lose! Rock beats scissors.";
        game(playerScore,computerScore);
    }
}
    

// score track
function game(playerScore,computerScore){
    if (playerScore===5 || computerScore===5){
        const finalGameStatus = document.createElement('div');
        const gameStatus=document.querySelector('.gamestatus');
        if (playerScore > computerScore){
            finalGameStatus.textContent = `Game over! Player Wins!`;
            gameStatus.appendChild(finalGameStatus);
        }
        else if (computerScore > playerScore){
            finalGameStatus.textContent = `Game over! Computer Wins!`;
            gameStatus.appendChild(finalGameStatus);
        }
        else{
            finalGameStatus.textContent = `Game over! Tie!`;
            gameStatus.appendChild(finalGameStatus);
        }
    }
}


// put the button event listeners inside the game function
// 
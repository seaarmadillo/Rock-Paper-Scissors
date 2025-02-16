console.log("Hello World")
//computer needs to return 1 of 3 options when the user inputs rock, paper, or scissors
//rock = 0, paper = 1, scissors = 2
//computer will generate a random number between 0 and 2

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//score

let humanScore = 0;
let computerScore = 0;

//user input options are rock, paper, or scissors, otherwise it is an error

  
function getHumanChoice(choice) {
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        throw new Error('Try again!'); }
    }


//page prompts the user to choose either rock, paper, or scissors via alert box
//include toLowerCase to avoid case insensitivity 
//return computer choice via alertbox

let sign = prompt("Rock, paper, or scissors?");
try {
    let humanChoice = getHumanChoice(sign.toLowerCase());
    let computerChoice = getComputerChoice();
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    alert("Computer choice: " + computerChoice);

    let result = playRound(humanChoice, computerChoice);
    alert(result);    

} catch (error) {
    console.error(error.message);
}




//playing a round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";

    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

//play 5 rounds

function playGame(round = 1) {
    if (round > 5) {
        alert(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
        if (confirm("Do you want to play another round?")) {
            humanScore = 0;
            computerScore = 0;
            playGame();
        }
        return;
    }

    let humanChoice;
    while (true) {
        let sign = prompt("Rock, paper, or scissors?");
        try {
            humanChoice = getHumanChoice(sign.toLowerCase());
            break;
        } catch (error) {
            alert(error.message);
        }
    }

    let computerChoice = getComputerChoice();
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    alert("Computer choice: " + computerChoice);

    let result = playRound(humanChoice, computerChoice);
    alert(result);

    // Display the current score
    alert(`Current Score: Human ${humanScore} - Computer ${computerScore}`);

    playGame(round + 1);
}

// Call the playGame function to start the game
playGame();

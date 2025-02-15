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
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", getComputerChoice());
    alert("Computer choice: " + getComputerChoice());
} catch (error) {
    console.error(error.message);
}

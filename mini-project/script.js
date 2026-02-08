let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelectorAll("#user-score");
const compScorePara = document.querySelectorAll("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "blue";
}; 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // compChoic: paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // compChoice: rock, scissors
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

images.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id");
        playGame(userChoice);
    });
});


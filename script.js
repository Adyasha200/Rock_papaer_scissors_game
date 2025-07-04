let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//random choice generate by computer

//comp choice
const genCompChoice =()=>{
    const options = ["rock","paper","scssors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = () =>{
    console.log("game is draw.");
    msg.innerText="Game was draw , play again!";
    msg.style.backgroundColor = "#081b31";
};


const showWinnwer = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!  Your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You loss! ${compChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    //user choice
    console.log("User Choice = ",userChoice);
    //comp choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        }else{
            //rock,paper
           userWin= compChoice==="rock"?false:true;
        }
        showWinnwer(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
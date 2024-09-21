let choices = document.querySelectorAll(".choice");
let userScr = document.querySelector("#userScore");
let compScr = document.querySelector("#compScore");
let message = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");
let choiceShow = document.getElementById("showChoice");

let userScore = 0;
let compScore = 0;

// for (let choice of choices){
//     console.log(choice);
//     choice.addEventListener("click",()=>{
        
//     })
// }
const ganerateCompChoise = () =>{
    const compOption = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()*3);
    return compOption[randomChoice] ;   
    
    


}

const showWinner = (userWin) =>{
    if(userWin){
        
        userScore += 1;
        userScr.innerText = userScore;
        message.innerText = "You are win";
        message.style.backgroundColor = "green";
        
        
    }else{
        compScore += 1;
        compScr.innerText = compScore;
        message.innerText = "Computer is win";
        message.style.backgroundColor = "blue";
        
        
    }
    
}
const showChoices = (userChoice,compChoice) =>{
    choiceShow.innerHTML = `Your choice is <h2  style = " font-size:30px; color: blue; font-weight:bold; "> ${userChoice}</h2> and Computer choice is  <h2  style = " font-size:30px; color: red; font-weight:bold; ">${compChoice}</h2>  `;
    
}
const gameDrow = () => {
    message.innerText = "Game is Drow";
    message.style.backgroundColor = "grey";
}                                       
const playGame = (userChoice) => {
    
    const compChoice = ganerateCompChoise()
    showChoices(userChoice,compChoice);
    console.log(compChoice);
     
     
    if( userChoice === compChoice){
       gameDrow()
        
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;

        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;

        }else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
        
    }
    
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice =  choice.getAttribute("id");
        
        console.log(userChoice);
        
        
        playGame(userChoice)
    })
})

resetBtn.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0 ;
   
    
    userScr.innerText = userScore;
    compScr.innerText = compScore;
    message.innerText = "Message";
    message.style.backgroundColor = "red";
})

let choices = document.querySelectorAll(".choice");
let userScr = document.querySelector("#userScore");
let compScr = document.querySelector("#compScore");
let message = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");

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

const gameDrow = () => {
    message.innerText = "Game is Drow";
    message.style.backgroundColor = "grey";
}
const playGame = (userChoice) => {
    
    const compChoice = ganerateCompChoise()
    
     
     
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

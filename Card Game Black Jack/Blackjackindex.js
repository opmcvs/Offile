// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
//querySelector.for class #for Id;
let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let newCard = 7;
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el");

const newcardBtn=document.getElementById("newcard-btn");
 
//ALWAYS KEEP IN MIND THE LESS FACTOR 

    message = ("You're out of the game");
    isAlive = false;
startBtn.addEventListener("click",  startGame);
function startGame() {
cardsEl.textContent = `Cards: ${firstCard} & ${secondCard}`;   
//cardsEl.textContent+= `${firstCard} & ${secondCard}`;
// if you won't do this it will repeat the value in the 
//newCard funcion 
//sumEl.textContent+=sum;
sumEl.textContent= "Sum:"+ sum;

if (sum<=20){
    message = ("Do you want to draw a new card")
}else if(sum === 21){
    message = ("You won")
    hasBlackJack = true  
}else {
    message = ("You're out of the game");
    isAlive = false;
}

messageEl.textContent = message;
}

newcardBtn.addEventListener("click",()=>{
    
    sum += newCard;
    startGame();
    console.log("newCard");
})
    
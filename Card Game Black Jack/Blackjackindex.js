// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
//querySelector.for class #for Id;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
const cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let newCard = getRandomCard();
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#cards-el");

const newcardBtn=document.getElementById("newcard-btn");


function getRandomCard(){
    let resultRandom = Math.floor(Math.random()*13)+1;
    if(resultRandom>10){
        return 10
    }else if (resultRandom===1 ){
        return 11
    }else{
        return resultRandom
     }
    }

function startGame(){
    renderGame();
}

    message = ("You're out of the game");
    isAlive = false;
startBtn.addEventListener("click",  renderGame);
function renderGame() {
cardsEl.textContent = `Cards: `;   
// if you won't do this it will repeat the value in the 

    for (let i=0; i<cards.length;i++){
    cardsEl.textContent += cards[i] + " "
}

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
    cards.push(newCard);
    renderGame();    
})


    

// 21 wins or as close as possible above your out.
//Ace = 11 and king = 10
//querySelector.for class #for Id;

let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
const messageEl =document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl =document.getElementById("cards-el");
const startBtn = document.getElementById("start-btn")
const newCardBtn  = document.getElementById("newcard-btn");


function getRandomCard(){
let randomNumber = Math.floor(Math.random()*13)+1;
if (randomNumber >10){
    return 10
} else if (randomNumber === 1){
    return 11
} else{
    return randomNumber
}
}


startBtn.addEventListener("click",function startGame(){
 isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()

})

    function renderGame(){
    cardsEl.textContent = "Cards:" ;
    for (let i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i]+ " "
     }
     sumEl.textContent = "Sum:" + sum
     if (sum <= 20){
        message = "Do you want to draw a new card ?"
     }else if (sum === 21){
     message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


newCardBtn.addEventListener("click", function newCard(){
if(hasBlackJack === false && isAlive === true){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
})


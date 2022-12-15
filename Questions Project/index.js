//First solution is traversing the DOM(moving up and down the DOM tree).
//Second option will be using the selectors.

const btns= document.querySelectorAll('.question-btn')
const questions = document.querySelectorAll('.question')
btns.forEach(function(btn){
btn.addEventListener('click', function(e){
console.log (e.currentTarget.parentElement.parentElement)
const question = e.currentTarget.
parentElement.parentElement
questions.forEach(function(item){
    console.log(item)
    if(item !==question){
     item.classList.remove('show-text')
    }
    }) 
question.classList.toggle('show-text')
})
})

//Second option will be using the selectors.
// targeting the Article directly
/*const questions = document.querySelectorAll('.question')
// You can add querySelector to an Element
questions.forEach(function(question){
console.log(question)

const btn = question.querySelector('.question-btn')
console.log(btn)
btn.addEventListener('click',function(){

    questions.forEach(function(item){
    console.log(item)
    if(item !==question){
     item.classList.remove('show-text')
    }
    }) 



    question.classList.toggle('show-text')
})
}) */
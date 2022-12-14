let num1 = 8 ;
let num2 = 2 ;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const mulBtn = document.getElementById("mul-btn");
const divBtn = document.getElementById("div-btn");
const sumEl = document.getElementById("sum-el");

addBtn.addEventListener("click", function(){
    let total = num1 + num2;
    sumEl.textContent = "Sum :"+ total;
});

subBtn.addEventListener("click", function(){
    let total = num1 - num2;
    
    sumEl.textContent = "Sum :"+ total;
});
mulBtn.addEventListener("click", function(){
    let total = num1 * num2;
    sumEl.textContent = "Sum :"+ total;
});
divBtn.addEventListener("click", function(){
    let total = num1 / num2;
    sumEl.textContent = "Sum :"+ total;
});
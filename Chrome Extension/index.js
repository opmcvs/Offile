let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function (){
   myLeads.push(inputEl.value );
  
  //resets the input value
  inputEl.value = "";
   renderLeads()
   
 console.log(myLeads);
   })

function renderLeads(){
let listItems = "";
for (let i = 0; i < myLeads.length; i++){

  listItems  += `
  <li> 
  <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} 
  </a> 
  </li>`
   
  console.log(listItems);
}

ulEl.innerHTML = listItems;
}

    
   






























   




 










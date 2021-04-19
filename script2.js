//better to handle submission to the form not submit!!!!!

"use strict";
{
const formEl = document.getElementById("moneyForm");

// addEventListener( eventType, callbackFunction)
//call function - a function to call later when the event occurs. 
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
 //determine which coin and count
 //These must be INSIDE the callback.
 let coinName = document.getElementById("whichCoin").value;
 let coinCount = parseInt(document.getElementById("howMany").value);

 console.log(coinName);
 console.log(coinCount);
 //**creating multiple coins
 for (let i =0; i<coinCount; i++){
 //create a coin
 // 1. createElement
 let newCoinEl = document.createElement("div");
 // 2. set text, classes, styles, attributes, etc.
 newCoinEl.innerText = coinName;
 newCoinEl.classList.add("coin")
 // 3. add to the document (append)
 let theContainer = document.getElementById("coins");
 theContainer.append(newCoinEl);
 }

});
}
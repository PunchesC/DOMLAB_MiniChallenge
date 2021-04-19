"use strict"
{

  let total=0;
  let inputValue = document.querySelectorAll("input")
  console.log(inputValue);

  // for (let input of inputValue){
    // console.log(input);
    // cokeValue = inputValue[0].value;
    // console.log(cokeValue);
    inputValue[0].addEventListener("click", ()=>{
     addToTotal(2);
    });
    inputValue[1].addEventListener("click", ()=>{
      addToTotal(2);
    });
    inputValue[2].addEventListener("click", ()=>{
     addToTotal(3);
    });
    inputValue[3].addEventListener("click", ()=>{
      addToTotal(2);
    });

    function addToTotal (amount){
      total += amount;
      console.log(total);
      document.getElementById("total").innerText = `$${total.toFixed(2)}`;

    }
  //   drPepperValue = inputValue[1].value;
  //   console.log(drPepperValue);
  //   spriteValue = inputValue[2].value;
  //   console.log(spriteValue);
  //   dietCokeValue = inputValue[3].value;
  //   console.log(dietCokeValue);
  // document.getElementById("coke").onclick = function addCook(){let el =document.getElementById("total.value");
  // el += cokeValue;



// let addition = document.querySelectorAll("input").onclick = function () {
//   const totalSales =  document.getElementById("total");
//   totalNumber = totalSales.value;
//   for (let input of addition){
//   itemInput.value += totalSales;
//   console.log("a:" + totalSales);
// }





// return totalSales;




// }


// console.log(addition());

// let total=0;
// let inputValue = document.querySelectorAll("input")
// console.log(inputValue);
// // for (let input of inputValue){
//   // console.log(input);
//   cokeValue = inputValue[0].value;
//   console.log(cokeValue);
//   drPepperValue = inputValue[1].value;
//   console.log(drPepperValue);
//   spriteValue = inputValue[2].value;
//   console.log(spriteValue);
//   dietCokeValue = inputValue[3].value;
//   console.log(dietCokeValue);
// document.getElementById("coke").onclick = function addCook(){let el =document.getElementById("total.value");
// el += cokeValue;
     
      
      
    
      
//     }
//   console.log(total);


// =function addCokeValue(){ Number(cokeValue) += total;}
// if(document.getElementById("coke").addEventListener("click",  function addCokeValue(){
  //   console.log(input.value[0]);
  // }));


// const total= 0;
// let input1 = document.getElementById("coke");
// coke.addEventListener("click", (e)=> {
  
  
//   total =+Number(input1.value);
 
  


// console.log(num0);

// });


// let input2 = document.getElementById("drPepper");
// drPepper.addEventListener("click", (e)=> {
  
  
//   total = Number(input2.value);
 
  


// console.log(num1);

// });


// let input3 = document.getElementById("sprite");
// sprite.addEventListener("click", (e)=> {
  
  
//   let num2 = Number(input3.value);
 
  


// console.log(num2);

// });

// let input4 = document.getElementById("dietCoke");
// dietCoke.addEventListener("click", (e)=> {
  
  
//   let num3 = Number(input4.value);
 
  



// console.log(num3);

// });






















// const totalSales = document.getElementById("total");
// console.log(totalSales);
// let totalNumber = totalSales.value;
// console.log(totalSales.value);

// document.getElementById("coke").onclick = function addCook(){
//   let cokeValue = document.getElementById("coke");
//   let cokeAdd = Number(cokeValue.value);
//   // let cokeAdd = cokeValue.value; BadBAD

//   totalSales.value += cokeAdd;
// }


// document.getElementById("drPepper").onclick = function addCook(){
//   let drPepperValue = document.getElementById("drPepper");
//   let drPepperAdd = Number(drPepperValue.value);

//   totalSales.value += drPepperAdd ;
// }

// document.getElementById("sprite").onclick = function addCook(){
//   let cokeValue = document.getElementById("sprite");
//   let cokeAdd = Number(cokeValue.value);

//   totalSales.value+= cokeAdd;
// }

// document.getElementById("dietCoke").onclick = function addCook(){
//   let cokeValue = document.getElementById("dietCoke");
//   let cokeAdd = Number(cokeValue.value);

//   totalSales.value += cokeAdd;
// }

  }
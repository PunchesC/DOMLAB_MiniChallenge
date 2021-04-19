document.getElementById("on").onclick =function turnOnBright(){ let el=document.getElementById("lightbulb");
el.classList.add("bright");}

document.getElementById("off").onclick =function turnOffBright(){ let el=document.getElementById("lightbulb");
el.classList.remove("bright");}

document.getElementById("toggle").onclick =function turnToggleBright(){ let el=document.getElementById("lightbulb");
el.classList.toggle("bright");}




let removeLight =document.getElementById("end").addEventListener("click", function removeLightbulb(){ 
  let el=document.getElementById("lightbulb");
el.remove();
document.getElementById("on").disabled = true;
document.getElementById("off").disabled = true;
document.getElementById("toggle").disabled = true;
document.getElementById("end").disabled = true;
});




// let removeLight =document.getElementById("end").onclick =function removeLightbulb(){ let el=document.getElementById("lightbulb");
// el.remove();}

// let uglyBorder= document.getElementById("end").onclick =function removeLightbulb(){ let el=document.getElementById("lightbulb");
// el.classList.toggle("border");}

// document.getElementById("end").addEventListener("click", myFunction);

// function myFunction() {
// let removeLight =  document.getElementById("end").onclick =function removeLightbulb(){ let el=document.getElementById("lightbulb");}

// }











// function endButton () {
//     const a = removeLight;
//     function ugly (){
//       const b = uglyBorder;
//     }
//     ugly();

// }
// endButton();



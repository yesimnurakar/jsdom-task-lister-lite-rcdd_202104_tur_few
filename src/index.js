document.addEventListener("DOMContentLoaded", () => {
let newtask=document.getElementById('new-task-description');
let u=document.getElementById('tasks');


let b =document.getElementById('button');
let form=document.getElementById('create-task-form')
form.addEventListener("submit", function(e){
  e.preventDefault();

let LI=document.createElement("li");
let B=document.createElement("button")
B.setAttribute("class","buttondone");
LI.innerHTML+=newtask.value;
B.innerHTML="Done";
u.appendChild(LI);
LI.appendChild(B);
newtask.value="";
console.log("DONE");
B.addEventListener("click", function(e){
  e.preventDefault();
  LI.remove();
});
});});

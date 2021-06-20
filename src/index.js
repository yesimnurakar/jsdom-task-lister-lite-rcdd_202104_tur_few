document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let form = document.getElementById("create-task-form")
form.addEventListener("submit", (e) => e.preventDefault())

let ul = document.getElementById("tasks");
ul.style.padding = "0"
let input = document.getElementById("new-task-description");
let btn = document.querySelector(".submit-btn");
let counterForId = 0;

const handleButtonClick = (e) => {
  let x = document.getElementById(e.target.parentElement.id)
  x.remove()
}

btn.addEventListener("click", () => {
  if (input.value === "") { console.log("You didn't write anything!")}
  else {
    let li = document.createElement("li");
    li.id = ++counterForId;
    li.innerText = input.value;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.addEventListener("click", handleButtonClick)
    li.appendChild(removeBtn)
    ul.appendChild(li);
  }
}) 

document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", (e) => e.preventDefault())

  let tasklist = document.getElementById("tasks");
  tasklist.style.padding = "3"
  let input = document.getElementById("new-task-description");
  let button= document.querySelector(".submit-btn");
  let counterForId = 0;

  const handleButtonClick = (e) => {
    let no = document.getElementById(e.target.parentElement.id)
    no.remove()
  }

  button.addEventListener("click", () => {
    if (input.value === "") { console.log("You didn't write anything!")}
    else {
      let li = document.createElement("li");
      li.id = ++counterForId;
      li.innerText = input.value;

      let removeBtn = document.createElement("button");
      removeBtn.innerText = "X";
      removeBtn.addEventListener("click", handleButtonClick)
      li.appendChild(removeBtn)
      tasklist.appendChild(li);
    }
  })
const newtask = document.getElementById("new-task-description");
const tasklist = document.getElementById("tasks");
const div = document.getElementById("list");
const button = document.getElementById("button");

button.addEventListener('click', function (e){
  let listitem = document.createElement('li');
  listitem.innerText = newtask.value;
  div.append(listitem);
   event.preventDefault();
});

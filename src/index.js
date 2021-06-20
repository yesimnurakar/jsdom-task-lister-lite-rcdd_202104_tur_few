document.addEventListener("DOMContentLoaded", () => {
  // your code here


const newtask = document.getElementById("new-task-description");
const ul = document.getElementById("tasks");
const div = document.getElementById("list");
const button = document.getElementById("button");

button.addEventListener('click', function (e){
  let listitem = document.createElement('li');
  listitem.innerText = newtask.value;
  div.append(listitem);
   event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.getElementById("create-task-form");
  
    taskForm.addEventListener('submit', function (e){
     e.preventDefault()
     let inputTask = document.getElementById("new-task-description").value;
  
     let li = document.createElement("li");
     let text = document.createTextNode(inputTask);
  
     li.appendChild(text);
     tasks.appendChild(li);
  
    })
  
  });
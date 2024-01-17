//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter-todo");


//EventListeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addToDo(event){
  //Prevent form from submitting
  event.preventDefault();
  //creating div  

  const todoText = todoInput.value.trim();
  if (todoText !== "") {
 const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");

   
     
 //creating li
 const newTodo = document.createElement("li");
    newTodo.innerText =todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
 //complete button 

 const completedButton = document.createElement("button");
      completedButton.innerHTML ='<i class= "fas fa-check"></i>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);
   
  //delete button
  const trashButton = document.createElement("button");
  
      trashButton.innerHTML ='<i class= "fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
   //append to main todo

   todoList.appendChild(todoDiv);

   todoInput.value ="";
} else{
  alert("Please enter a task.");
}
}
 

function deleteCheck(e) {
  const item= e.target;

  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  } 

  //check mark
  if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }  
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
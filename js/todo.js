const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoMeg2 = document.getElementById("todo-message");
const todo_list_delete = document.querySelector(".todo_list_delete");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoMeg2.innerText = "What is your main focus for today?";
    todo_list_delete.classList.remove("hidden");
    toDos = toDos.filter((todo) => (todo.id !== parseInt(li.id)));
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSumit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text:newTodo,
    };
    if (toDos.length > 3) {
        todo_list_delete.classList.add("hidden");
        toDoMeg2.innerText = "Please delete todo-list";
    } else {
        toDos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveToDos(newTodo);
    }
}


toDoForm.addEventListener("submit", handleToDoSumit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    // parseToDos.forEach((items) => console.log("Hello", items));
    toDos = parseToDos;
    parseToDos.forEach(paintTodo);
}


// arr.filter(item => item > 2)
// const newArr = arr.filter(item => item > 2)


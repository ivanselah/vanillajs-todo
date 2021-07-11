const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const todo_list = document.querySelector("div.todo_list_Q");
const toDoMeg1 = document.getElementById("todo-message");

const HIDDEN_CLASSNAME = "hidden"
const TODOLIST_CLASSNAME = "todo_list_Q";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todo_list.classList.add(TODOLIST_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    toDoMeg1.innerText = "What is your main focus for today?";
    const nowDate = new Date();
    const hours = nowDate.getHours();
    if (hours >= 6 && hours < 12){
        greeting.innerHTML = `Good Morning, ${username}.`;
    } else if (hours >= 12 && hours < 18) {
        greeting.innerHTML = `Good afternoon, ${username}.`;
    } else if (hours >= 18 && hours < 24) {
        greeting.innerHTML = `Good evening, ${username}.`;
    } else {
        greeting.innerHTML = `Never give up, ${username}.`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    todo_list.classList.remove(TODOLIST_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



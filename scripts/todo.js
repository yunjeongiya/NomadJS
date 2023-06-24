const todolist = document.getElementById("todolist");
const form = todolist.querySelector("form");
const input = todolist.querySelector("input");

const TODOKEY = "todos";

function onDeleteBtnClick(event) {
    const li = event.target.parentElement;
    parsedTodos = parsedTodos.filter((todo) => todo.id !== parseInt(li.id))
    localStorage.setItem(TODOKEY, JSON.stringify(parsedTodos));
    todolist.removeChild(li);
}

function addTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.textContent = todo.text;
    btn.textContent = "x";
    btn.addEventListener("click", onDeleteBtnClick);
    li.appendChild(span);
    li.appendChild(btn);
    todolist.appendChild(li);
}
function onSubmit(event) {
    event.preventDefault();
    const newTodo = {"id":parsedTodos.length, "text":input.value}
    parsedTodos.push(newTodo);
    localStorage.setItem(TODOKEY, JSON.stringify(parsedTodos));
    addTodo(newTodo);
    input.value = "";
}
form.addEventListener("submit", onSubmit);

const savedTodos = localStorage.getItem(TODOKEY);
let parsedTodos = [];
if (savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(addTodo);
}
const form = document.getElementById("form");
const input = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");

const todoList = JSON.parse(localStorage.getItem("todos"));

if (todoList) {
  todoList.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  const todoEle = document.createElement("li");
  if (todoText) {
    todoEle.innerText = todoText;
    todos.appendChild(todoEle);
    input.value = null;
  }

  todoEle.addEventListener("click", () => {
    todoEle.classList.toggle("completed");
    updateLocalStorage();
  });

  todoEle.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEle.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const todos = [];
  const notesEL = document.querySelectorAll("li");

  notesEL.forEach((notes) => {
    todos.push({
      text: notes.innerText,
      completed: notes.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

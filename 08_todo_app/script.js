const form = document.getElementById("form");
const input = document.querySelector(".todo-input");
const todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoEle = document.createElement("li");
  const todoText = input.value;

  if (todoText) {
    todoEle.innerText = todoText;
    todos.appendChild(todoEle);
    input.value = null;
  }

  todoEle.addEventListener("click", () => {
    todoEle.classList.toggle("completed");
  });

  todoEle.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    todoEle.remove();
  });
});

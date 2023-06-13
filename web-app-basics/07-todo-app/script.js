"use strict";
let state = {};
let textInput = document.querySelector("input");
const addButton = document.getElementById("add-todo");
const removeButton = document.getElementById("remove-todos");
const radioButton = document.getElementsByName("radio-button");

function renderTodos() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";
  let filterValue = filterSelect();

  filterValue.forEach((todo) => {
    const newTodo = document.createElement("li");
    const checkbox = document.createElement("input");
    const todoDescription = document.createTextNode(todo.description);

    newTodo.id = todo.id;
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    newTodo.appendChild(checkbox);
    newTodo.appendChild(todoDescription);
    todoList.appendChild(newTodo);

    toggleDeco(todo, newTodo);

    checkbox.addEventListener("change", (stateCheckbox) => {
      const newTodoState = stateCheckbox.target.checked;
      todo.done = newTodoState;
      toggleDeco(todo, newTodo);
      localStorage.setItem("state", JSON.stringify(state));
    });
  });
}

function toggleDeco(todo, newTodo) {
  if (todo.done) {
    newTodo.classList.add("text-deco");
  } else {
    newTodo.classList.remove("text-deco");
  }
}

function randomId() {
  return Math.floor(Math.random() * Date.now()).toString(16);
}

function getStorage() {
  if (localStorage.getItem("state")) {
    state = JSON.parse(localStorage.getItem("state"));
  } else {
    state = {
      todos: [
        { id: "1f75557e91", description: "Reading Books", done: false },
        { id: "47e729a9a2", description: "Playing Games", done: false },
        { id: "772f970bd2", description: "Petting Cats", done: true },
      ],
    };
  }
}

function checkForDuplicates() {
  const test = state.todos.some((element) =>
    textInput.value
      .trim()
      .toLowerCase()
      .includes(element.description.toLowerCase())
  );
  if (
    textInput.value === null ||
    textInput.value === undefined ||
    textInput.value.trim() === ""
  ) {
    console.log("is empty");
  } else if (test) {
    alert("Todo already exists");
  } else {
    addTodo(textInput.value.trim());
  }
}

function addTodo(newTodo) {
  state.todos.push({ id: randomId(), description: newTodo, done: false });
  localStorage.setItem("state", JSON.stringify(state));
  textInput.value = "";
  renderTodos();
}

function removeTodos() {
  state.todos = state.todos.filter((todo) => todo.done === false);
  renderTodos();
  localStorage.setItem("state", JSON.stringify(state));
}

function filterSelect() {
  const filter = document
    .querySelector("article#filter")
    .querySelector("input:checked");
  if (filter.id === "open-todos") {
    return state.todos.filter((todo) => todo.done === false);
  } else if (filter.id === "done") {
    return state.todos.filter((todo) => todo.done === true);
  } else {
    return state.todos;
  }
}

addButton.addEventListener("click", checkForDuplicates);

removeButton.addEventListener("click", removeTodos);

radioButton.forEach((btn) => {
  btn.addEventListener("click", renderTodos);
});

getStorage();

renderTodos();

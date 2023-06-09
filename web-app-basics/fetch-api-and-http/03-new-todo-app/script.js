"use strict";
let todos;

function mainHtml() {
  //Header Elements
  const topHeader = createEl("el", "header");
  topHeader.classList.add("top-header");
  const h1 = createEl("el", "h1");
  const title = createEl("txt", "Todo App");

  document
    .querySelector("body")
    .appendChild(topHeader)
    .appendChild(h1)
    .appendChild(title);

  //Main Elements
  const main = createEl("el", "main");

  //Add todo section
  const articleInput = createEl("el", "article");
  articleInput.id = "input-todo";
  const inputText = createEl("el", "input");
  inputText.id = "text-input";
  inputText.type = "text";
  const buttonAdd = createEl("el", "button");
  buttonAdd.id = "add-todo";
  const btnAddTxt = createEl("txt", "Add todo");

  document
    .querySelector("body")
    .appendChild(main)
    .appendChild(articleInput)
    .append(inputText, buttonAdd);

  buttonAdd.appendChild(btnAddTxt);

  //Show todos section incl. remove
  const articleList = createEl("el", "article");
  articleList.id = "paper";
  const ul = createEl("el", "ul");
  ul.id = "list";
  const buttonRemove = createEl("el", "button");
  buttonRemove.id = "remove-todos";
  const btnRemoveTxt = createEl("txt", "Remove todos");
  main.appendChild(articleList).append(ul, buttonRemove);
  buttonRemove.appendChild(btnRemoveTxt);

  loadTodos();
}

function createEl(node, type) {
  if (node === "el") {
    return document.createElement(type);
  } else if (node === "txt") {
    return document.createTextNode(type);
  }
}

mainHtml();

const todoList = document.querySelector("#list");

function loadTodos() {
  fetch("http://localhost:4730/todos")
    .then((response) => response.json())
    .then((todosFromApi) => {
      todos = todosFromApi;
      renderTodos();
    });
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const newLi = createEl("el", "li");
    const newTodoTxt = createEl("txt", todo.description);

    const checkbox = createEl("el", "input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    const span = createEl("el", "span");

    todoList.appendChild(newLi);
    newLi.append(checkbox, span);
    span.appendChild(newTodoTxt);
    toggleDeco(todo, span);

    checkbox.addEventListener("change", (stateCheckbox) => {
      const newTodoState = stateCheckbox.target.checked;
      todo.done = newTodoState;
      toggleDeco(todo, span);
      updateData(todo);
    });
  });
}

function createTodos(todo) {
  const newLi = createEl("el", "li");
  const newTodoTxt = createEl("txt", todo.description);

  const checkbox = createEl("el", "input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.done;
  const span = createEl("el", "span");

  todoList.appendChild(newLi);
  newLi.append(checkbox, span);
  span.appendChild(newTodoTxt);
}

function toggleDeco(todo, newTodo) {
  if (todo.done) {
    newTodo.classList.add("text-deco");
  } else {
    newTodo.classList.remove("text-deco");
  }
}

const newTodoInput = document.querySelector("#text-input");

function updateData(todoState) {
  const todoId = todoState.id;
  fetch(`http://localhost:4730/todos/${todoId}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todoState),
  })
    .then((response) => response.json())
    .then((updatedTodoFromApi) => {
      return updatedTodoFromApi;
    });
}

function addTodo(inputTodo) {
  const newTodo = { description: inputTodo, done: false };

  fetch("http://localhost:4730/todos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newTodo),
  })
    .then((res) => res.json())
    .then((newTodoFromApi) => {
      todos.push(newTodoFromApi);
      renderTodos();
    });
}

function checkForDuplicates() {
  const test = todos.some((element) =>
    newTodoInput.value
      .trim()
      .toLowerCase()
      .includes(element.description.toLowerCase())
  );
  if (
    newTodoInput.value === null ||
    newTodoInput.value === undefined ||
    newTodoInput.value.trim() === ""
  ) {
    alert("Text Input is empty!");
  } else if (test) {
    alert("Todo already exists");
  } else {
    addTodo(newTodoInput.value.trim());
    newTodoInput.value = "";
  }
}

function deleteTodos() {
  const deleteTodos = todos.filter((filterTodo) => filterTodo.done);
  const deleteArray = [];
  deleteTodos.map((delTodo) => {
    deleteArray.push(
      fetch(`http://localhost:4730/todos/${delTodo.id}`, {
        method: "DELETE",
      })
    );
  });
  Promise.all(deleteArray).then(() => {
    loadTodos();
  });
}

document
  .querySelector("#add-todo")
  .addEventListener("click", checkForDuplicates);

document.querySelector("#remove-todos").addEventListener("click", deleteTodos);

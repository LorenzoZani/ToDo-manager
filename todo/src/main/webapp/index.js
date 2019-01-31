//TODO ARRAY
let todos = [];
//JSON HANDLING
function getTodos() {
  return fetch("http://localhost:8080/todo").then(response => response.json());
}
function addToDos(data) {
  todos = data;
  render();
}
function main() {
  getTodos().then(addToDos);
}
//POSTING TODO IN DB
function addToDoDB(text) {
  return fetch("http://localhost:8080/todo", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ text })
  }).then(response => response.json());
}
//UPDATING TODO IN DB
function updateToDODB(todo) {
  fetch("http://localhost:8080/todo/" + todo.id + "/done", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(todo)
  });
}
//DELETING FROM DB
function deleteToDoFromDB(todo) {
  fetch("http://localhost:8080/todo/" + todo.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify(todo)
  });
}
//CREATING TODO&&TODOLIST
function createToDo(todo) {
  todos.push(todo);
  render();
}
function createToDoAppDiv(todos) {
  const div = document.createElement("div");
  const toDoInputElement = createToDoTextInput();
  div.appendChild(toDoInputElement);
  div.appendChild(createToDoAddBtn(toDoInputElement));
  div.appendChild(createToDoList(todos));
  div.className = "container";
  return div;
}
function createToDoList(todos) {
  const ul = document.createElement("ul");
  todos.forEach((todo, index) => {
    ul.appendChild(createTodoElement(todo, index));
  });
  return ul;
}
//CREATING HTML ELEMENTS
function createTodoElement(todo, index) {
  //TODO BODY
  const li = document.createElement("li");
  li.appendChild(createToDoCheckBox(todo));
  li.className = "todoElem";
  li.appendChild(document.createTextNode(todo.text));
  if (todo.done) {
    li.appendChild(createToDoDeleteBtn(index, todo));
  }
  return li;
}
function createToDoTextInput() {
  //TEXT
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.size = 50;
  inputText.className = "inputText";
  inputText.addEventListener("keypress", function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (inputText.value != "") {
      if (key == 13) {
        addToDoDB(inputText.value).then(createToDo);
      }
    }
  });
  return inputText;
}
function createToDoAddBtn(toDoInputElement) {
  //BUTTON TO ADD NEW TODO
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "ADD";
  btn.style.margin = "10px";
  btn.className = "addBtn";
  btn.addEventListener("click", () => {
    if (toDoInputElement.value != "") {
      addToDoDB(toDoInputElement.value).then(createToDo);
    }
  });
  return btn;
}
function createToDoDeleteBtn(index, todo) {
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "DELETE";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", () => {
    deleteToDo(index);
    deleteToDoFromDB(todo);
  });
  return deleteBtn;
}
function createToDoCheckBox(todo) {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.done;
  checkBox.className = "checkBox";
  checkBox.addEventListener("click", () => {
    checkTodo(todo);
    updateToDODB(todo);
  });
  return checkBox;
}
//FUNCTIONS
function checkTodo(todo) {
  todo.done = !todo.done;
  render();
}
function deleteToDo(index) {
  todos.splice(index, 1);
  render();
}
//PAGE CREATION
function render() {
  document.body.innerHTML = "";
  document.body.appendChild(createToDoAppDiv(todos));
}
main();

//TODO ARRAY
let todos = [];

//JSON HANDLING

function getTodos() {
  return fetch("http://localhost:8080/todo").then(response =>
    response.json());
}

function addToDos(data) {
    todos = data;
    render();
}

function main(){
    getTodos().then(addToDos)
}


//CREATING TODO&&TODOLIST
function createToDo(text) {
  const newTodo = { done: false, text };
  todos.push(newTodo);
  render();
}

function createToDoAppDiv(todos) {
  const div = document.createElement("div");
  const toDoInputElement = createToDoTextInput();
  div.appendChild(toDoInputElement);
  div.appendChild(createToDoAddBtn(toDoInputElement));
  div.appendChild(createToDoList(todos));
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
  li.appendChild(document.createTextNode(todo.text));
  if (todo.done) {
    li.appendChild(createToDoDeleteBtn(index));
  }
  return li;
}

function createToDoTextInput() {
  //TEXT
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.size = 50;
  return inputText;
}

function createToDoAddBtn(toDoInputElement) {
  //BUTTON TO ADD NEW TODO
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "ADD";
  btn.style.margin = "10px";
  btn.addEventListener("click", () => {
    createToDo(toDoInputElement.value);
  });
  return btn;
}

function createToDoDeleteBtn(index) {
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "DELETE";
  deleteBtn.style.margin = "10px";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.addEventListener("click", () => {
    deleteToDo(index);
  });
  return deleteBtn;
}

function createToDoCheckBox(todo) {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked=todo.done;
  checkBox.style.margin = "10px";
  checkBox.addEventListener("click", () => {
    checkTodo(todo);
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

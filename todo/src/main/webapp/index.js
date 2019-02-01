//TODO ARRAY
let todos = [];
//JSON HANDLING
function getTodos(userId) {
  return fetch("http://localhost:8080/todo/" + userId).then(response =>
    response.json()
  );
}
function addToDos(data) {
  todos = data;
  render();
}
function main() {
  getUser().then(addUsers);
}
//POSTING TODO IN DB
function addToDoDB(text) {
  return fetch("http://localhost:8080/todo/" + userId, {
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
  fetch("http://localhost:8080/todo/" + userId + "/" + todo.id + "/done", {
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
  fetch("http://localhost:8080/todo/" + userId + "/" + todo.id, {
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
function createToDoAppDiv(todos, users) {
  const div = document.createElement("div");
  const toDoInputElement = createToDoTextInput();
  div.appendChild(selectUser(users));
  if (userId) {
    div.appendChild(toDoInputElement);
    div.appendChild(createToDoAddBtn(toDoInputElement));
    div.appendChild(createToDoList(todos));
  }
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
  inputText.className = "inputText";
  inputText.addEventListener("keypress", function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (inputText.value != "" && userId != null) {
      if (key == 13) {
        addToDoDB(inputText.value).then(createToDo);
      }
    }
  });
  return inputText;
}

let buttonCheck = true;
function createToDoAddBtn(toDoInputElement) {
  //BUTTON TO ADD NEW TODO
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "ADD";
  btn.className = "addBtn";
  btn.disabled = buttonCheck;
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
  document.body.appendChild(createToDoAppDiv(todos, users));
}
main();

//USERS
let users = [];
let userId;
function selectUser(users) {
  const selectUser = document.createElement("select");
  users.forEach(user => {
    selectUser.appendChild(createUserTodoOption(user));
  });
  selectUser.value = userId;
  selectUser.className = "selectUser";
  selectUser.addEventListener("change", () => {
    userId = selectUser.value;
    buttonCheck = false;
    loadToDo();
  });

  return selectUser;
}
function createUserTodoOption(user) {
  const option = document.createElement("option");
  option.value = user.id;
  option.appendChild(
    document.createTextNode(user.firstName + " " + user.surname)
  );
  return option;
}

//USERFETCHING
function getUser() {
  return fetch("http://localhost:8080/users").then(response => response.json());
}
function addUsers(data) {
  users = data;
  render();
}

function loadToDo() {
  getTodos(userId).then(addToDos);
}
//SHOWING TODO BY USERID

render();

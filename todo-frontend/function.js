function createToDoTextInput() {
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.size = 50;
  return inputText;
}

function createToDoAddBtn(toDoInputElement) {
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "ADD";
  btn.style.margin = "10px";
  btn.addEventListener("click", () => {
    createToDo(toDoInputElement.value);
  });
  return btn;
}

function createToDo(text) {
  const newTodo = { checked: false, text };
  todos.push(newTodo);
  main();
}

function createToDoCheckBox() {
  const checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  return checkBox;
}

function createToDoAppDiv(todos) {
  const div = document.createElement("div");
  const toDoInputElement = createToDoTextInput();
  div.appendChild(toDoInputElement);
  div.appendChild(createToDoAddBtn(toDoInputElement));
  div.appendChild(createToDoList(todos));
  return div;
}
const todos = [];

function removeToDo(i) {
  todos.splice(i, 1);
}

function createToDoList(todos) {
  const ul = document.createElement("ul");
  for (const todo of todos) {
    const label = document.createElement("label");
    const labelText = document.createElement("span");
    const check = createToDoCheckBox();
    const li = document.createElement("li");
    const deleteBtn = createToDoDeleteBtn();
    let i = todos.indexOf(todo);
    deleteBtn.style.display = "none";
    label.appendChild(check);
    labelText.innerText = todo.text;
    labelText.appendChild(deleteBtn);
    li.appendChild(label);
    li.appendChild(labelText);
    check.addEventListener("click", () => {
      hideBtn(check, deleteBtn);
    });
    deleteBtn.addEventListener("click", () => {
      ul.removeChild(li);
      removeToDo(i);
    });

    ul.appendChild(li);
  }
  return ul;
}
function hideBtn(check, deleteBtn) {
  if (check.checked == true) {
    deleteBtn.style.display = "inline";
  } else {
    deleteBtn.style.display = "none";
  }
}

function createToDoDeleteBtn() {
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "DELETE";
  return deleteBtn;
}

function main() {
  document.body.innerHTML = "";
  document.body.appendChild(createToDoAppDiv(todos));
}

main();

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    let enteredText = document.getElementById("textEntry")

    let item = document.createElement("li")
    let container = document.createElement("div")
    let checkbox = document.createElement("input")
    let todoText = document.createElement("p")
    let btnDelete = document.createElement("button")

    container.setAttribute("class", classNames.TODO_ITEM)
    checkbox.setAttribute("class", classNames.TODO_CHECKBOX)
    checkbox.setAttribute("type", "checkbox")
    todoText.setAttribute("class", classNames.TODO_TEXT)
    btnDelete.setAttribute("class", classNames.TODO_DELETE)

    todoText.innerHTML = enteredText.value
    btnDelete.innerHTML = "Delete"

    container.appendChild(checkbox)
    container.appendChild(todoText)
    container.appendChild(btnDelete)
    item.appendChild(container)
    list.appendChild(item)

    enteredText.value = ""
    
}

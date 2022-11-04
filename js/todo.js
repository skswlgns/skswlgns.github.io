const todoForm = document.querySelector('#todoForm')
const todoInput = document.querySelector('#todoForm input')
const todoList = document.querySelector('#todoList')

const STORAGE_KEY = 'todoList'
let toDo = Array();

function createLi(todoObj) {
    const li = document.createElement('li')
    li.id = todoObj.id
    const spanTodo = document.createElement('span')
    spanTodo.innerText = todoObj.value
    const button = document.createElement('button')
    button.innerText = '❌'

    button.addEventListener('click', deletTodo)

    li.appendChild(spanTodo)
    li.appendChild(button)

    todoList.appendChild(li)
}

function saveTodo(event) {
    event.preventDefault()

    const todoValue = todoInput.value
    todoInput.value = ''

    const todoObj = {
        value: todoValue,
        id: Date.now(),
    }

    toDo.push(todoObj)

    createLi(todoObj)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDo))
}

function deletTodo(event) {
    const parentLi = event.target.parentElement
    parentLi.remove()
    toDo = toDo.filter((toDo) => toDo.id !== parseInt(parentLi.id))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDo))
}

todoForm.addEventListener('submit', saveTodo)

const storageToDo = localStorage.getItem(STORAGE_KEY)
if (storageToDo !== null) {
    const parsedToDo = JSON.parse(storageToDo)
    toDo = parsedToDo
    parsedToDo.forEach(createLi)
}
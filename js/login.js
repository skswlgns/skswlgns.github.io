const loginForm = document.querySelector('#userNameForm')
const loginInput = document.querySelector('#userNameForm input')
const userText = document.querySelector('#userNameText')

const HIDDEN_CLASS_NAME = 'hidden'
const USERNAME_KEY = 'username'
const storageUserName = localStorage.getItem(USERNAME_KEY)

function setUserName(userName) {
    userText.classList.remove(HIDDEN_CLASS_NAME)
    userText.innerText = `Hello, ${userName}`
}

function getUserName(event) {
    const userName = loginInput.value
    event.preventDefault()
    localStorage.setItem(USERNAME_KEY, userName)
    loginForm.classList.add(HIDDEN_CLASS_NAME)
    setUserName(userName)
}

// null과 ''은 다르다.
if (storageUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME)
    loginForm.addEventListener('submit', getUserName)
} else {
    setUserName(storageUserName)
}
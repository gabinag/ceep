import CheckButton from './components/checkTask.js'
import DeleteButton from './components/deleteTask.js'

    const createTask = (evento) => {
    evento.preventDefault() 

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const list = document.querySelector('[data-list]') 
    const task = document.createElement('li')

    task.classList.add('task')  //adiciona tarefa a partir da class no css (task)

    const content = `<p class="content">${valor}</p>`

    task.innerHTML = content
    task.appendChild(CheckButton())
    task.appendChild(DeleteButton())
    list.appendChild(task)  //coloca (filho) dentro de list (pai), li dentro de ul
    input.value = " " 
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)


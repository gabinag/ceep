( () => {
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

const CheckButton = () => {
    const checkButton = document.createElement('button')

    checkButton.classList.add('check-button')
    checkButton.innerText = 'concluir'

    checkButton.addEventListener('click', checkTask)

    return checkButton
}

const checkTask = (evento) => {
    const checkButton = evento.target

    const completeTask = checkButton.parentElement

    completeTask.classList.toggle('done')
} 

const DeleteButton = () => {
    const deleteButton = document.createElement('button')

    deleteButton.innerText = 'deletar'
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
}

const deleteTask = (evento) => {
    const deleteButton = evento.target

    const completeTask = deleteButton.parentElement

    completeTask.remove()

    return deleteButton
}

})()
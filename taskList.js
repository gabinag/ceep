const createTask = (evento) => {
    evento.preventDefault() 

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const list = document.querySelector('[data-list]') 
    const task = document.createElement('li')

    task.classList.add('task')  //adiciona tarefa a partir da class no css (task)

    const content = `<p class="content">${valor}</p>`

    task.innerHTML = content
    checkButton.appendChild(task)
    list.appendChild(task)  //coloca task (filho) dentro de list (pai), li dentro de ul
    input.value = " " //limpa o valor do campo
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)

const CheckButton = () => {
    const checkButton = document.createElement('button')

    checkButton.classList.add('check-button')
    checkButton.innerText = 'concluir'
    checkButton.addEventListener('click', ()=> {
        console.log('fui clicado')
    })

    return checkButton
}
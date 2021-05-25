const createTask = (evento) => {
    evento.preventDefault() 
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const task = document.querySelector('[data-task]')
    const content = `<p class="content">${valor}</p>`

    task.innerHTML = content 
    input.value = " " //limpa o valor do campo
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)
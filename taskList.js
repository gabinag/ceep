const createTask = (evento) => {
    evento.preventDefault() 
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    console.log(valor)
    input.value = " " //limpa o valor do campo
}

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', createTask)
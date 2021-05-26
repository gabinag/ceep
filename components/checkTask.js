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

export default CheckButton
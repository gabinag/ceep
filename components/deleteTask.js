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

export default DeleteButton
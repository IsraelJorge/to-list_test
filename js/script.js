const btnAdicionar = document.querySelector('#adicionar');
const arrayTarefas = []

btnAdicionar.addEventListener('click', () => {
    const tarefaInput = document.querySelector('#add');
    let containeTask = document.querySelector('.containe-task');


    if (tarefaInput.value.length == 0) {
        return window.alert('Preencha o campo de tarefas antes de adicionar!!!');
    }

    let containerTarefas = document.createElement('div');
    containerTarefas.setAttribute('class', 'container-tarefas');

    containerTarefas.innerHTML += `
    <label for="checkbox" class="tarefa">
        <input type="checkbox" name="">
        <p> ${tarefaInput.value} </p> 
    </label>`;

    arrayTarefas.push(tarefaInput.value);

    containeTask.appendChild(containerTarefas);

    tarefaInput.value = '';
    tarefaInput.focus();
});
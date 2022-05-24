const btnAdicionar = document.querySelector('#adicionar');
const tarefaInput = document.querySelector('#add');
const containeTask = document.querySelector('.containe-task');

btnAdicionar.addEventListener('click', () => {
    
    if (tarefaInput.value.length === 0) {
        return window.alert('Preencha o campo de tarefas antes de adicionar!!!');
    }
    
    const tarefa = tarefaInput.value;

    const novaTarefa = criarItemTarefa(tarefa);

    containeTask.appendChild(novaTarefa);

    limparInput(tarefaInput);
});

tarefaInput.addEventListener('keypress', (e) => {
    
    if (e.keyCode == 13) {
        
        if (tarefaInput.value.length === 0) {
            return window.alert('Preencha o campo de tarefas antes de adicionar!!!');
        }
        
        const tarefa = tarefaInput.value;
    
        const novaTarefa = criarItemTarefa(tarefa);
    
        containeTask.appendChild(novaTarefa);
    
        limparInput(tarefaInput);
    }
});


const criarItemTarefa = (tarefa) => {
    const div = document.createElement('div');
    div.classList.add('container-tarefas');
    
    div.innerHTML += `
    <label for="checkbox" class="tarefa">
        <input type="checkbox" name="">
        <p> ${tarefa} </p> 
    </label>`;

    return div;
}

const limparInput = (input) => {
    input.value = '';
    input.focus();
}
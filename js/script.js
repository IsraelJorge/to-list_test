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

    removerItem(containeTask, novaTarefa);

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

        removerItem(containeTask, novaTarefa);
    
        limparInput(tarefaInput);
    }
});


const criarItemTarefa = (tarefa) => {
    const li = document.createElement('li');
    li.classList.add('item-tarefa');
    
    li.innerHTML += `
        <input type="checkbox" name="">
        <p> ${tarefa} </p> 
    `;

    return li;
}

const removerItem = (containeTask, novaTarefa) => {
    
    let remover = document.createElement("button");
    remover.classList.add("btnRemover");
    remover.innerHTML = "X";
    
    remover.onclick = function () {
        containeTask.removeChild(novaTarefa);
        containeTask.removeChild(remover);
    }

    novaTarefa.appendChild(remover);
}

const limparInput = (input) => {
    input.value = '';
    input.focus();
}
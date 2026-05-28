const inputElement = document.getElementById('nova_tarefa');
const mensagemElement = document.getElementById('mensagem');
const listaTarefas = document.getElementById('lista_tarefas');
const mensagemSaudacao = document.getElementById('mensagem_saudacao');





function adicionarTarefa(){
    let mensagem, cor;
    let tarefa = inputElement.value;
    let contador = listaTarefas.children.length;

    
    if (tarefaValida(tarefa)){
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        mensagem = "Adicionado com Sucesso";
        cor = 'green';
        contador++;
    }
    else{
        mensagem = "Erro! Mensagem vazia!";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    inputElement.value = '';
    mensagemSaudacao.textContent = `Tarefas: ${contador}`;

}

function tarefaValida(tarefa){
    return tarefa.trim().length >= 5;
}

function limparTarefas(){
    listaTarefas.textContent = '';
    mensagemSaudacao.textContent = 'Adicione Tarefas!';
    mensagemElement.textContent = "Lista de Tarefas Limpa!";
    mensagemElement.style.color = 'blue';

}
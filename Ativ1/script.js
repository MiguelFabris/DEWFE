const inputElement = document.getElementById('nova_tarefa');
const mensagemElement = document.getElementById('mensagem');
const listaTarefas = document.getElementById('lista_tarefas');
const mensagemSaudacao = document.getElementById('mensagem_saudacao');

function adicionarTarefa(){
    let mensagem, cor;
    let tarefa = inputElement.value;
    
    if (tarefaValida(tarefa)){
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        mensagem = "Adicionado com Sucesso";
        cor = 'green';
        verificaLista();
    }
    else{
        mensagem = "Erro! Mensagem vazia!";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    inputElement.value = '';
    mensagemSaudacao.textContent = `Tarefas: ${listaTarefas.children.length}`;
    
}
function verificaLista(){
    if (listaTarefas.children.length == 1){
        limparTarefas();
    }
}
function tarefaValida(tarefa){
    return tarefa.trim().length >= 5;
}

function limparTarefas(){
    const botao = document.createElement('button')
    botao.textContent = 'Limpar Tarefas';
    botao.addEventListener('click', function(){
        listaTarefas.textContent = '';
        mensagemSaudacao.textContent = 'Adicione Tarefas!';
        mensagemElement.textContent = "Lista de Tarefas Limpa!";
        mensagemElement.style.color = 'blue';
        botao.remove();
    });
    document.querySelector('.container').appendChild(botao);
}
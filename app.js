//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); // Obtém o campo de texto
    const nomeAmigo = amigoInput.value.trim(); // Pega o valor e remove espaços em branco

    if (nomeAmigo) { // Verifica se o campo não está vazio
        listaAmigos.push(nomeAmigo); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista exibida
        amigoInput.value = ''; // Limpa o campo de texto
    } else {
        alert('Por favor, digite um nome!'); // Alerta se o campo estiver vazio
    }
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos'); // Obtém a lista no HTML
    ul.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adiciona cada amigo à lista
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = amigo; // Define o texto do item
        ul.appendChild(li); // Adiciona o item à lista
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear!'); // Verifica se a lista está vazia
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Gera um índice aleatório
    const amigoSorteado = listaAmigos[indiceAleatorio]; // Seleciona o amigo sorteado

    // Exibe o resultado
    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ''; // Limpa resultados anteriores
    const li = document.createElement('li'); // Cria um novo item de lista para o resultado
    li.textContent = `Amigo secreto sorteado: ${amigoSorteado}`; // Define o texto do item
    resultadoUl.appendChild(li); // Adiciona o item à lista de resultados
}
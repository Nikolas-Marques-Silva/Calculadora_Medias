const form = document.getElementById('form');
const nomes = [];
const numeros = [];
const nomeContato = document.getElementById('nomeContato');
const numContato = document.getElementById('numContato');

let linhas = '';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    atualizaTabela();
});

function adicionaLinha() {

    if (nomes.includes(nomeContato.value)) {
        alert(`O contato ${nomeContato.value} já existe!`);
    } else {
        nomes.push(nomeContato.value);
        numeros.push(parseFloat(numContato.value));

        let linha = `<tr><td>${nomeContato.value}</td><td>${numContato.value}</td></tr>`;

        linhas += linha;
    };

    nomeContato.value = '';
    numContato.value = '';

    return linhas;
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += adicionaLinha();
};
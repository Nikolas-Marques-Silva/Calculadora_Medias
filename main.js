const form = document.getElementById('form-notas');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji celebrando">';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já existe!`);
    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    };
};

function atualizaTabela() {
    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;
};

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    };

    return somaNotas / notas.length;
};

function atualizaMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
};
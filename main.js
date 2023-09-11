const form = document.getElementById('form-notas');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji celebrando">';


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});
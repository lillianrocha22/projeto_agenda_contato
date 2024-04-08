const form = document.getElementById("form-agenda");
const nomes = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();    
    
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById("nome-agenda");
    const inputTelAgenda = document.getElementById("tel-agenda");

    if(nomes.includes(inputNomeAgenda.value)) {
        alert(`O contato: ${inputNomeAgenda.value} já foi inserido`);
    } else {
        nomes.push(inputNomeAgenda.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelAgenda.value}</td>`;
        linha += '</td>';
    
        linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputTelAgenda.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
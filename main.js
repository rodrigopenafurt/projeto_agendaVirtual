const cadastroContato = document.getElementById('formulario')
const iconContato = '<span class="material-symbols-outlined">contact_phone</span>'
const listaNome =[''];

linhas = '';


cadastroContato.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})


function adicionaLinha() {

    const campoNome = document.getElementById('nome')
    const campoContato = document.getElementById('contato')

    if (listaNome.includes(campoNome.value)) {
        alert(`Campo inválido, o nome ${campoNome.value} já existe em sua lista de contatos.`)
    } else {
        listaNome.push(campoNome.value)
        let linha ='<tr>'
        linha += `<td>${campoNome.value}</td>`
        linha += `<td>${campoContato.value}  ${iconContato}</td>`
        linha += `</tr>`

        linhas += linha;
    }

    campoNome.value = ''
    campoContato.value = ''

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

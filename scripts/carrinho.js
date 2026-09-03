const produtos = document.querySelector('.produtos');
const colocarCarrinho = document.querySelectorAll('.comprar');
const itens = document.querySelector('.itens');
const qtd = document.querySelector('#quantidade');
const quantidadeDeItens = Number(qtd);
const tt = document.querySelector('#total');
const total = Number(tt.textContent);
const limpar = document.querySelector('#limpar');

function adicionarAoCarrinho(parametro) {
    itens.appendChild(parametro);
};
function removerDoCarrinho(parametro) {
    produtos.appendChild(parametro);
};

function somarPrecos(cardNoCarrinho) {
    quantidadeDeItens++;
};

for(let percorrerLista of colocarCarrinho) {
    percorrerLista.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        if(percorrerLista.parentElement.classList.contains('catalogo')) {
            adicionarAoCarrinho(percorrerLista.parentElement);
            percorrerLista.innerText = 'Remover';
            percorrerLista.parentElement.classList.remove('catalogo');
        } else {
            removerDoCarrinho(percorrerLista.parentElement);
            percorrerLista.parentElement.classList.add('catalogo');
            percorrerLista.innerText = 'Adicionar';
        };
        somarPrecos(cards);
    });
};

limpar.addEventListener('click', () => {
    for(let percorrerlista of colocarCarrinho) {
        produtos.appendChild(percorrerlista.parentElement);
        percorrerlista.innerText = 'Adicionar';
        percorrerlista.parentElement.classList.add('catalogo');
    };
});
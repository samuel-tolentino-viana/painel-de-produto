const produtos = document.querySelector('.produtos');
const colocarCarrinho = document.querySelectorAll('.comprar');
const itens = document.querySelector('.itens');
const limpar = document.querySelector('#limpar');
const quantidade = document.querySelector('#quantidade');
const precoTotal = document.querySelector('#total');

function adicionarAoCarrinho(parametro) {
    itens.appendChild(parametro);
};
function removerDoCarrinho(parametro) {
    produtos.appendChild(parametro);
};

function somarPrecos() {
    let total = 0;

    for(let produto of itens.children) {
        const p = produto.querySelector('span').textContent;
        const preco = Number(p);

        total += preco;
    };

    precoTotal.innerText = total.toFixed(2);
};

function contarItens() {
    quantidade.innerText = itens.children.length;
};

for(let botoes of colocarCarrinho) {
    botoes.addEventListener('click', () => {
        const card = botoes.parentElement;

        if(card.classList.contains('catalogo')) {

            adicionarAoCarrinho(card);
            botoes.innerText = 'Remover';
            card.classList.remove('catalogo');

        } else {

            removerDoCarrinho(card);
            card.classList.add('catalogo');
            botoes.innerText = 'Adicionar';

        };

        somarPrecos();
        contarItens();

    });
};

limpar.addEventListener('click', () => {
    for(let botoes of colocarCarrinho) {

        const card = botoes.parentElement;

        produtos.appendChild(card);

        botoes.innerText = 'Adicionar';
        card.classList.add('catalogo');

    };
    somarPrecos();
    contarItens();
});
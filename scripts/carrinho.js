const produtos = document.querySelector('.produtos');
const colocarCarrinho = document.querySelectorAll('.comprar');
const itens = document.querySelector('.itens');
const limpar = document.querySelector('#limpar');

function adicionarAoCarrinho(parametro) {
    itens.appendChild(parametro);
};
function removerDoCarrinho(parametro) {
    produtos.appendChild(parametro);
};

for(let percorrerLista of colocarCarrinho) {
    percorrerLista.addEventListener('click', () => {
        const card = percorrerLista.parentElement;

        if(card.classList.contains('catalogo')) {

            const pr = Number(card.querySelector('span'));
            console.log(pr)
            adicionarAoCarrinho(card);
            percorrerLista.innerText = 'Remover';
            card.classList.remove('catalogo');

        } else {

            removerDoCarrinho(card);
            card.classList.add('catalogo');
            percorrerLista.innerText = 'Adicionar';

        };
    });
};

limpar.addEventListener('click', () => {
    for(let percorrerlista of colocarCarrinho) {
        produtos.appendChild(percorrerlista.parentElement);
        percorrerlista.innerText = 'Adicionar';
        percorrerlista.parentElement.classList.add('catalogo');
    };
});
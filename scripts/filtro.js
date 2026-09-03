const todos = document.querySelector('#todos');
const roupas = document.querySelector('#roupas');
const calcados = document.querySelector('#calcados');
const acessorios = document.querySelector('#acessorios');

function filtrarItens(itemClass, button) {
    let cards = document.querySelectorAll('.card');
    for(let percorrerLista of cards) {
        percorrerLista.classList.remove('desativar');
        if(!percorrerLista.classList.contains(itemClass)) {
            percorrerLista.classList.add('desativar');
        }
    };

    todos.classList.remove('selecionado');
    roupas.classList.remove('selecionado');
    calcados.classList.remove('selecionado');
    acessorios.classList.remove('selecionado');

    button.classList.add('selecionado');
};

function ativarTudo() {
    let cards = document.querySelectorAll('.card');
    for(let percorrerLista of cards) {
        percorrerLista.classList.remove('desativar');
    };

    todos.classList.remove('selecionado');
    roupas.classList.remove('selecionado');
    calcados.classList.remove('selecionado');
    acessorios.classList.remove('selecionado');

    todos.classList.add('selecionado');
};

todos.addEventListener('click', () => {
    ativarTudo();
});

roupas.addEventListener('click', () => {
    filtrarItens('roupas', roupas);
});

calcados.addEventListener('click', () => {
    filtrarItens('calcados', calcados);
});

acessorios.addEventListener('click', () => {
    filtrarItens('acessorios', acessorios);
});
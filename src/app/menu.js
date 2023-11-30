const btMenu = document.querySelector('#botao-active-menu');
const btCloseMenu = document.querySelector('#botao-close-menu');
const listaLinks = document.querySelector('.list-links');

function abreMenu () {
    listaLinks.classList.remove('hidden')
}

function fechaMenu () {
    listaLinks.classList.add('hidden')
}

btMenu.addEventListener('click', abreMenu)

btCloseMenu.addEventListener('click', fechaMenu)
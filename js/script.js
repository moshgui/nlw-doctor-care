const buttonToggle = document.getElementById('menu-toggle');

//function que mostra o menu ao clicar no botão
//versao mobile
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

buttonToggle.addEventListener('click', toggleMenu);

//script biblioteca scrollReveal
ScrollReveal({ reset: true });
ScrollReveal().reveal('.container', {duration: 2000});
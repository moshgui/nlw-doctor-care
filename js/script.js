const buttonToggle = document.getElementById('menu-toggle');

function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

buttonToggle.addEventListener('click', toggleMenu);
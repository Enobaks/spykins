const menu = document.querySelector('.menu');
const Nav = document.querySelector('#nav-links')

menu.addEventListener('click', () => {
    if (Nav.classList.contains('hidden')) {
        Nav.classList.remove('hidden')
    }else {
        Nav.classList.add('hidden')
    }
})
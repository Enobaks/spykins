const menu = document.querySelector('.menu');
const Nav = document.querySelector('#navlinks')
// const classArrayOut = ['hidden', 'top-[-130px]',]

menu.addEventListener('click', () => {
    if (Nav.classList.contains('hidden')) {
        Nav.classList.remove('hidden')
    }else {
        Nav.classList.add('hidden')
    }
})
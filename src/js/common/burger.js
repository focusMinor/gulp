const burger = document.querySelector('.icon-menu');
const mobileMenuClose = document.querySelector('.');
const mobileMenu = document.querySelector('.');
const overlay = document.querySelector('.');

// document.addEventListener('click', (e) => {
//     const target = e.target;
//     if(target.) {

//     }
// })

burger.addEventListener('click', () => {
    burger.classList.toggle('');
    menuMobile.classList.toggle('');
    overlay.classList.toggle('');
    document.querySelector('body').classList.add('lock')
}) 

overlay.addEventListener('click', () => {
    burger.classList.toggle('');
    menuMobile.classList.remove('');
    overlay.classList.remove('');
    document.querySelector('body').classList.remove('lock')
})

mobileMenuClose.addEventListener('click', () => {
    burger.classList.toggle('');
    menuMobile.classList.remove('');
    overlay.classList.remove('');
    document.querySelector('body').classList.remove('lock')
})
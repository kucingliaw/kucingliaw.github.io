console.log('Hello World');

// Hamburger Button
const btn = document.querySelector('.navbar__btn');
const menu = document.querySelector('.navbar__links');
const links = document.querySelector('.navbar__item');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    body.classList.toggle('noscroll');
    menu.classList.toggle('fade-in');
    menu.classList.toggle('fade-out');
});

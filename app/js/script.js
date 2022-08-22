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

// Scroll Up

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

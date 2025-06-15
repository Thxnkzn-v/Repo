const bar = document.querySelector('.bar');
const menu = document.querySelector('nav');

if (bar && menu) {
    bar.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}

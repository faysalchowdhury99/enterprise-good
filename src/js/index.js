// Menu Icon Rotate
const navbarToggler = document.querySelector('.navbar-toggler');
const dotIcon = document.querySelector('.dot-icon');

navbarToggler.addEventListener('click', () => {
    dotIcon.classList.toggle('rotate');
});

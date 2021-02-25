// Menu Icon Rotate
const navbarToggler = document.querySelector('.navbar-toggler');
const dotIcon = document.querySelector('.dot-icon');

navbarToggler.addEventListener('click', () => {
    dotIcon.classList.toggle('rotate');
});

// Back to top Button
const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.transform = ' translateY(0)';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.transform = ' translateY(-300px)';
    }
}
backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Nav Menu
const navbarOpen = document.querySelector('.navbar-toggler');
const dotIcon = document.querySelector('.dot-icon');
const navbarCollapse = document.querySelector('#navbarNav');
navbarOpen.addEventListener('click', () => {
    dotIcon.classList.toggle('rotate');
    navbarCollapse.classList.toggle('open');
});
// Close Menu Function
function closeMenu() {
    dotIcon.classList.remove('rotate');
    navbarCollapse.classList.remove('open');
}
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

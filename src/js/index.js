// Nav Menu Open
const navbarOpen = document.querySelector('.navbar-open');
const navbarCollapse = document.querySelector('#navbarNav');
navbarOpen.addEventListener('click', () => {
    navbarCollapse.classList.add('open');
});
// Nav Menu Close
const navbarClose = document.querySelector('.navbar-close');
navbarClose.addEventListener('click', () => {
    navbarCollapse.classList.remove('open');
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

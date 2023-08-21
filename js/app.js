document.addEventListener('DOMContentLoaded', () => {

    // скролл от верха страницы
    const header = document.querySelector('.header');
    function handleScroll() {
        if (window.scrollY >= 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
    window.addEventListener('scroll', handleScroll);
})
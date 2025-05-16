document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.main-body > div');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const triggerPoint = window.innerHeight - sectionHeight / 4;

            if (sectionTop < triggerPoint) {
                section.classList.add('animate');
            } else {
                section.classList.remove('animate');
            }
        });
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
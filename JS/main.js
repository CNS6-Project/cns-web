const container = document.querySelector('.review-container');
const reviews = document.querySelectorAll('.review');

const topReview = container.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function () {
    reviews.forEach(review => {
        if (window.scrollY >= topReview) {
            review.classList.add('fixed');
        } else {
            review.classList.remove('fixed');
        }
    })
});
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


const moveButtons = document.querySelectorAll(".arrow");
const imgBox = document.querySelector(".img-box");
const slideImgs = document.querySelectorAll(".slide-img");

let currentIndex = 0;
const totalSlides = slideImgs.length;

moveButtons.forEach(button => button.addEventListener("click", slideImage));

function moveImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    const offset = -currentIndex * 565;
    imgBox.style.transition = `transform 1s ease`;
    imgBox.style.transform = `translateX(${offset}px)`;
}

function slideImage(event) {
    if (event.target.classList.contains('next')) {
        moveImage('next');
    } else if (event.target.classList.contains('prev')) {
        moveImage('prev');
    }
}

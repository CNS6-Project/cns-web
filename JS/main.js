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
const dots = document.querySelectorAll(".dots div");

let currentIndex = 0;
const totalSlides = slideImgs.length;
const imageWidth = slideImgs[0].clientWidth + 120;

function updateDots() {
    dots.forEach((dot, idx) => {
        if (idx === currentIndex % 3) {
            dot.classList.add("active");
        } else if (idx === -(currentIndex % 3)) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function updateFocus() {
    slideImgs.forEach((img, idx) => {
        if (idx === (currentIndex % 3) + 4) {
            img.classList.add("focus");
        } else {
            img.classList.remove("focus");
        }
    });
}

function moveImage() {
    imgBox.style.transition = `transform 1s ease`;
    imgBox.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

moveButtons.forEach(button => button.addEventListener("click", (event) => {
    if (event.target.classList.contains('next')) {
        currentIndex++;
        moveImage();
        updateFocus();
        if (currentIndex === totalSlides - 6) {
            setTimeout(() => {
                imgBox.style.transition = 'none';
                currentIndex = 0;
                imgBox.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
                updateFocus();
            }, 1000);
        }
    } else if (event.target.classList.contains('prev')) {
        currentIndex--;
        moveImage();
        updateFocus();
        if (currentIndex === -3) {
            setTimeout(() => {
                imgBox.style.transition = 'none';
                currentIndex = 0;
                imgBox.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
                updateFocus();
            }, 1000);
        }
    }
    updateDots();
}));

updateDots();
updateFocus();
imgBox.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
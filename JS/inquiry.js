const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

question.forEach((question, index) => {
    question.addEventListener('click', () => {
        answer.forEach((answer, answerIndex) => {
            if (index === answerIndex){
                answer.classList.toggle('show-answer')
            }
        })
    })
})

// 게시글 데이터 예시
const posts = [
    { title: "게시글 1"},
    { title: "게시글 2"},
    { title: "게시글 3"},
    { title: "게시글 4"},
    { title: "게시글 5"},
    { title: "게시글 6"},
];

const postsPerPage = 3; 
let currentPage = 1;

function renderPosts() {
    const postContainer = document.querySelector('.inquirys');
    postContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    currentPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'content';

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        postElement.appendChild(titleElement);

        postContainer.appendChild(postElement);
    });

    updatePagination();
}

function updatePagination() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.classList.toggle('disabled', currentPage === 1);
    nextButton.classList.toggle('disabled', currentPage === Math.ceil(posts.length / postsPerPage));
}


const pageNumber = document.querySelector('.pagination div');

function nextPage() {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        currentPage++;
        pageNumber.innerText = currentPage
        renderPosts();
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        pageNumber.innerText = currentPage
        renderPosts();
    }
}

renderPosts();
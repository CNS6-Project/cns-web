const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

question.forEach((question, index) => {
    question.addEventListener('click', () => {
        answer.forEach((answer, answerIndex) => {
            if (index === answerIndex){
                answer.classList.add('show-answer')
            } else {
                answer.classList.remove('show-answer')
            }
        })
    })
})
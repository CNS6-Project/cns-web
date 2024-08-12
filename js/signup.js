const submit = document.querySelector('.submit')

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const passwordCheck = document.querySelector('#password-check').value

    if (password !== passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    const signUpData = {
        name: name,
        email: email,
        password: password
    };

    submit.disabled = true;

    fetch('http://10.80.161.135:8080/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
    })

        .then(response => response.json())
        .then(() => {
            alert('회원가입에 성공하였습니다!')
            window.location.href = '../html/login.html'
        })

        .catch(() => {
            alert('회원가입에 실패하였습니다.');
        })

        .finally(() => {
                submit.disabled = false;
            });
        })

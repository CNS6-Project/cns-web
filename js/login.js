const submit = document.querySelector('.loginBtn')

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!email || !password) {
        alert("이메일과 비밀번호를 입력해주세요.");
        return;
    }

    const logInData = {
        email: email,
        password: password,
    };

    submit.disabled = true;

    fetch('http://10.80.161.135:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logInData)
    })

        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || '로그인에 실패하였습니다.');
                });
            }
        })

        .then(() => {
            alert('로그인에 성공하였습니다!');
            window.location.href = '../html/main.html';
        })
        .catch(error => {
            alert(error.message || '로그인에 실패하였습니다.');
        })
        .finally(() => {
            submit.disabled = false;
        });
    });
const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const passwordCheck = document.querySelector('#password-check').value

    if (password !== passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    const signUpData = {
        email: email,
        password: password
    };

    submit.disabled = true;

    fetch('http', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
    })

        .then(response => response.json())
        .then(data => {
            console.log('성공:', data);
            alert('성공');
        })

        .catch((error) => {
            console.error('실패:', error);
            alert('실패');
        })
        
        .finally(() => {
                submit.disabled = false;
            });
        })

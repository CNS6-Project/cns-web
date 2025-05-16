document.querySelector('.wrap').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.querySelector('.title-input').value;
    const content = document.querySelector('.content-input').value;

    const inquiryData = {
        title: title,
        content: content
    };

    fetch('http://10.80.161.135:8080/swagger-ui/index.html#/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inquiryData)
    })
    .then(response => response.json())
    .then(() => {
        alert('문의가 성공적으로 등록되었습니다.');
    })
    .catch((error) => {
        console.error('실패:', error);
        alert('문의 등록에 실패했습니다.');
    });
});
document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    const inquiryData = {
        title: title,
        content: content
    };

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inquiryData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('성공:', data);
        alert('문의가 성공적으로 등록되었습니다.');
    })
    .catch((error) => {
        console.error('실패:', error);
        alert('문의 등록에 실패했습니다.');
    });
});
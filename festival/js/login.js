function loginClick() {
    var Id = document.getElementById('userId').value;
    var Pw = document.getElementById('userPw').value;
    var errorElement = document.querySelector('.helper_error'); // 오류 메시지 요소 찾기
    errorElement.classList.remove('active');

    setTimeout(() => {
        if (Id !== '1' || Pw !== '12') {
            errorElement.classList.add('active'); // .active 클래스 추가
        } else{
            location.href='index.html';
        }
    }, 10);
}
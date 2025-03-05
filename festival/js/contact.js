document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name_input'); // name_input id를 가진 요소를 가져옴
    const emailInput = document.getElementById('email_input'); // email_input id를 가진 요소를 가져옴
    const phoneInput = document.getElementById('phone_input'); // phone_input id를 가진 요소를 가져옴
    const contentInput = document.getElementById('content_input'); // content_input id를 가진 요소를 가져옴
    const checkBox1 = document.getElementById('checkbox1'); // checkbox1 id를 가진 요소를 가져옴
    const submitContactBtn = document.getElementById('submit_contact_btn'); // btn_submit id를 가진 요소를 가져옴
    const essentialInput = document.querySelectorAll('.essential_input'); // essential_input class를 가진 요소를 가져옴
    const helperErrorEmail = document.getElementById('helper_error_email');
    const helperErrorPhone = document.getElementById('helper_error_email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    checkAll();
    // input에 입력이 되면 checkAll 함수 실행
    // essentialInput.forEach(function (input) {
    //     input.addEventListener('input', checkAll);
    // });

    nameInput.addEventListener('input', ()=> checkAll());
    contentInput.addEventListener('input', ()=> checkAll());
    checkBox1.addEventListener('input', () => checkAll());

    emailInput.addEventListener('input', function () {
        // helperErrorEmail에 active가 있으면 제거
        if (emailRegex.test(emailInput.value)) {
            helperErrorEmail.classList.remove('active');
        }
        checkAll();
    });

    // 전화번호 입력 필드에 숫자만 입력되도록 제한
    phoneInput.addEventListener('input', function () {
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
        checkAll();
        // // helperErrorPhone에 active가 있으면 제거
        // if (phoneInput.value.length === 10 || phoneInput.value.length === 11 || phoneInput.value.length === 12) {
        //     helperErrorPhone.classList.remove('active');
        // };
    });

    

    // 전송하기 버튼 클릭 시
    submitContactBtn.addEventListener('click', function () {
        if (!emailRegex.test(emailInput.value)) { // 이메일 형식에 맞게 입력되지 않았을 때
            // helpErrorEmail에 active 추가
            if(helperErrorEmail.classList.contains('active')){
                helperErrorEmail.classList.remove('active');
                // 강제로 브라우저의 렌더링을 트리거
            void helperErrorEmail.offsetWidth;
            }
            helperErrorEmail.classList.add('active');
            // focus
            emailInput.focus();
        }else{
            // 전송
            // window.location.href = '/index';
        }
    });

    /** 함수모음 */
    // 이름, 이메일, 전화번호, 내용, 체크박스1이 모두 입력되었는지 확인 후 버튼 활성화
    function checkAll() {
        if (nameInput.value !== '' && emailInput.value !== '' && phoneInput.value !== '' && contentInput.value !== '' && checkBox1.checked) {
            // class로 주면 적용이 안돼서 그냥 바로 적용
            submitContactBtn.style.cursor = 'pointer';
            submitContactBtn.style.backgroundColor = 'var(--primary-color)';
            submitContactBtn.style.color = 'var(--color-static-white)';
            submitContactBtn.disabled = false;
        } else {
            // class로 주면 적용이 안돼서 그냥 바로 적용
            submitContactBtn.style.cursor = 'not-allowed';
            submitContactBtn.style.backgroundColor = 'var(--color-gray-400)';
            submitContactBtn.style.color = 'var(--color-static-white)';
            submitContactBtn.disabled = true;
        }
    }
});
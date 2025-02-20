// 탭메뉴
const tabs = document.querySelectorAll('.tab');
const tabBackground = document.querySelector('.tab_background');
const boardLists = document.querySelectorAll('.board_list');
const boardContainer = document.querySelector('.board_container');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        tabBackground.style.transform = `translateX(${index * 100}%)`;

        boardLists.forEach(list => list.classList.remove('active'));
        // 클릭된 탭에 해당하는 board_list에 active 클래스 추가
        boardLists[index].classList.add('active');
        // board_list 슬라이드 이동
        boardContainer.style.transform = `translateX(-${index * 100}%)`;
    });
});

// 초기 상태 설정
tabs[0].classList.add('active');
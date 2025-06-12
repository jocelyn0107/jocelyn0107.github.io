var today = new Date();

function buildCalendar() { // 현재 달
    var nMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 이번 달의 첫째 날
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 이번 달의 마지막 날
    var tblCalendar = document.getElementById("calendar"); // 테이블 달력을 만들 테이블
    var tblCalendarYM = document.getElementById("calendarYM"); // yyyy년 m월 출력할 곳
    tblCalendarYM.innerHTML = (today.getMonth() + 1) + "월, " + today.getFullYear(); // yyyy년 m월 출력

    while (tblCalendar.rows.length > 2) {
        tblCalendar.deleteRow(tblCalendar.rows.length - 1);
    }
    var row = null;
    row = tblCalendar.insertRow();
    var cnt = 0;

    for (i = 0; i < nMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt = cnt + 1;
    }

    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt + 1;
        if (cnt % 7 == 0) // 1주일이 7일 이므로
            row = calendar.insertRow(); // 줄 추가
        var currentDate = new Date(today.getFullYear(), today.getMonth(), i);
        // 토요일
        if (currentDate.getDay() === 6) {
            cell.classList.add("saturday");
        }
        // 일요일
        if (currentDate.getDay() === 0) {
            cell.classList.add("holiday");
        }
    }
    // 오늘
    var cells = tblCalendar.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == today.getDate()) {
            cells[i].classList.add("position-relative");
            cells[i].classList.add("board_today");

            var newDiv = document.createElement("div");
            newDiv.classList.add("board_today_line");

            cells[i].appendChild(newDiv);
        }
    }

    //스케쥴 있을때 표시
    var cells = tblCalendar.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == 9) {
            cells[i].classList.add("position-relative");

            var newDiv = document.createElement("div");
            newDiv.classList.add("event_schedule");
            cells[i].appendChild(newDiv);

            var eventHover = document.createElement("div");
            eventHover.classList.add("event_hover"); 
            eventHover.innerHTML = "주간회의<br>고객사 미팅";
            cells[i].appendChild(eventHover); 

        } else if (cells[i].innerHTML == 24) {
            cells[i].classList.add("position-relative");
            
            var newDiv = document.createElement("div");
            newDiv.classList.add("event_schedule");
            cells[i].appendChild(newDiv);

            var eventHover = document.createElement("div");
            eventHover.classList.add("event_hover"); 
            eventHover.textContent = "회식";
            cells[i].appendChild(eventHover); 
        }
    }
}
buildCalendar();
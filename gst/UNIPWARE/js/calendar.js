var today = new Date(); // 오늘 날짜
// 아직 휴일을 자동으로 불러오는 스크립트는 하지 못했습니다...


// var holidays = [9, 10, 12];

// function isHoliday(date) {
//     return holidays.includes(date.getDate());
// }

function buildCalendar() { // 현재 달
    var nMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 이번 달의 첫째 날
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 이번 달의 마지막 날
    var tblCalendar = document.getElementById("calendar"); // 테이블 달력을 만들 테이블
    var tblCalendarYM = document.getElementById("calendarYM"); // yyyy년 m월 출력할 곳
    tblCalendarYM.innerHTML = (today.getMonth() + 1) + "월, " + today.getFullYear(); // yyyy년 m월 출력

    // 기존 테이블에 뿌려진 줄, 칸 삭제
    while (tblCalendar.rows.length > 2) {
        tblCalendar.deleteRow(tblCalendar.rows.length - 1);
    }
    var row = null;
    row = tblCalendar.insertRow();
    var cnt = 0;

    // 1일이 시작되는 칸을 맞추어 줌
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

        // 휴일
        // if (isHoliday(new Date(today.getFullYear(), today.getMonth(), i))) {
        //     cell.classList.add("holiday");
        // }
    }

    // 오늘
    var cells = tblCalendar.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == today.getDate()) {
            cells[i].classList.add("today");
            cells[i].classList.add("position-relative");
        }
    }
    // 스케쥴 > 오늘
    var calendarContainer = document.querySelector('#calendar.schedule');
    var scheduleCells = calendarContainer.getElementsByTagName("td");
    for (var i = 0; i < scheduleCells.length; i++) {
        if (scheduleCells[i].innerHTML == today.getDate()) {
            scheduleCells[i].classList.add("today");
            scheduleCells[i].classList.add("position-relative");

            var labelToday = document.createElement("div");
            labelToday.className = "label_today";
            labelToday.innerHTML = "Today";

            scheduleCells[i].appendChild(labelToday);
            var labelScheduleW = document.createElement("div");
            labelScheduleW.className = "label_schedule_w scroll";

            var labelSchedule1 = document.createElement("div");
            labelSchedule1.className = "label_schedule color01";
            labelSchedule1.innerHTML = "주간미팅";

            var labelSchedule2 = document.createElement("div");
            labelSchedule2.className = "label_schedule color02";
            labelSchedule2.innerHTML = "추가 미팅";

            var labelSchedule3 = document.createElement("div");
            labelSchedule3.className = "label_schedule color03";
            labelSchedule3.innerHTML = "추가 미팅";

            var labelSchedule4 = document.createElement("div");
            labelSchedule4.className = "label_schedule color03";
            labelSchedule4.innerHTML = "추가 미팅";

            // 첫 번째와 두 번째 label_schedule을 label_schedule_w 안에 추가
            labelScheduleW.appendChild(labelSchedule1);
            labelScheduleW.appendChild(labelSchedule2);
            labelScheduleW.appendChild(labelSchedule3);
            labelScheduleW.appendChild(labelSchedule4);

            // label_schedule_w을 td 아래에 추가
            scheduleCells[i].appendChild(labelScheduleW);

        }
    }
}
buildCalendar();
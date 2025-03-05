// 현재 날짜를 보여줌
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // 월(0부터 시작) → +1
const day = String(today.getDate()).padStart(2, '0'); // 일

document.getElementById('eventDate').value = `${year}.${month}.${day}`;

// 현재 시간을 가져와 포맷하는 함수
function updateCurrentTime() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0'); // 시
	const minutes = String(now.getMinutes()).padStart(2, '0'); // 분

	// "HH:mm" 형식으로 포맷
	const formattedTime = `${hours}:${minutes}`;

	// currentTime 요소에 표시
	document.getElementById('currentTime').textContent = formattedTime;
}

// 1초마다 현재 시간을 업데이트
setInterval(updateCurrentTime, 1000);

// 페이지 로드 시 즉시 현재 시간을 표시
updateCurrentTime();

// 입력 필드 값 변경 시 미리 보기를 업데이트하는 함수
function addInputEventListener(inputId, previewId) {
	const inputElement = document.getElementById(inputId);
	const previewElement = document.getElementById(previewId);

	// 일반 입력 이벤트 처리
	inputElement.addEventListener('input', function () {
		previewElement.textContent = inputElement.value;
	});

	// change 이벤트 추가 (datepicker와 호환)
	inputElement.addEventListener('change', function () {
		previewElement.textContent = inputElement.value;
	});
}

// 모든 입력 필드에 이벤트 리스너 추가
addInputEventListener('eventName', 'previewEventName');
addInputEventListener('eventDate', 'previewEventDate');
addInputEventListener('eventLocation', 'previewEventLocation');
addInputEventListener('eventorganizer', 'previewEventHost');
addInputEventListener('eventwebsite', 'previewEventHomepage');

function updatePreview(inputId, previewId) {
	const inputElement = document.getElementById(inputId);
	const previewElement = document.getElementById(previewId);
	previewElement.textContent = inputElement.value;
}

// 파일 업로드 시 이미지 미리 보기 업데이트
function previewImage(inputId, previewId) {
	const fileInput = document.getElementById(inputId);
	const file = fileInput.files[0];
	const preview = document.getElementById(previewId);

	if (file) {
		const reader = new FileReader();
		reader.onload = function (event) {
			preview.style.backgroundImage = `url(${event.target.result})`;
			preview.style.backgroundSize = 'cover';
			preview.style.backgroundPosition = 'center';
		};
		reader.readAsDataURL(file);
	} else {
		preview.style.backgroundImage = 'none';
	}
}

// jQuery를 사용한 datepicker 설정
$(document).ready(function () {
	$(".date").datepicker({
		dateFormat: 'yy.mm.dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		yearSuffix: '년',
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		beforeShow: function (input, inst) {
			$('#ui-datepicker-div').removeClass("yearpicker");
		},
		onSelect: function (dateText, inst) {
			// 선택한 날짜를 previewEventDate에 업데이트
			$('#previewEventDate').text(dateText);
		}
	});

	// 날짜 입력 시 요일 업데이트
	$(".date").each(function (e) {
		$(this).on("propertychange change keyup paste input", function () {
			var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
			var today = new Date($(this).val()).getDay();
			var todayLabel = week[today];
			$(this).prev().children("span").text(todayLabel ? todayLabel.split("요일")[0] : '');
		});
	});
	$('.btn_pay').on('click', function () {
		$('#modalLogin').fadeIn();
		$('body').addClass('no_scroll');
	});
	$('.btn_modal_close').on('click', function () {
		$('#modalLogin').fadeOut();
		$('body').removeClass('no_scroll');
	});

	function toggleNoticeText() {
        if ($("#noticeRadio01").is(":checked")) {
            $("#noticeText").show();
        } else {
            $("#noticeText").hide();
        }
    }
    toggleNoticeText();
    $("input[name='noticeRadio']").on("change", toggleNoticeText);
});
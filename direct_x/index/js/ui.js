window.onload = function () {
	const headers = document.querySelector('.headers');
	const elm = document.querySelectorAll(".container");
	const toplink = document.querySelector('.link-top');
	const elmCount = elm.length;
	
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	headers.classList.add('-main')
	headers.classList.remove('-sub')
		
	elm.forEach(function (item, index) {
		item.addEventListener("mousewheel", function (event) {
			event.preventDefault();
			let delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			} else if (event.detail) delta = -event.detail / 3;
			
			// console.log(index,delta)
			if(index!=delta){
					headers.classList.remove('-main')
					headers.classList.add('-sub')
			}
					
			if(index==delta || delta>=0 && index==0){
					headers.classList.add('-main')
					headers.classList.remove('-sub')
			}
			let moveTop = window.scrollY;
			let elmSelector = elm[index];

			// wheel down : move to next section
			if (delta < 0) {
				if (elmSelector !== elmCount - 1) {
					try {
						moveTop =
							window.pageYOffset +
							elmSelector.nextElementSibling.getBoundingClientRect().top;
					} catch (e) {}
				}
			}

			// wheel up : move to previous section
			else {
				if (elmSelector !== 0 && elmSelector.id !== "home") {
					try {
						moveTop =
							window.pageYOffset +
							elmSelector.previousElementSibling.getBoundingClientRect().top;
					} catch (e) {}
				}
			}

			const body = document.querySelector("html");
			window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
			
		});
	
	});
	const toggles = document.querySelector('.main-down-link');
	const togglestarget = document.querySelector('.toggle__wrap');
	toggles.addEventListener('click',(e)=>{
			
			if(togglestarget.classList.contains('-active')){
				togglestarget.classList.remove('-active')
			}else{
				togglestarget.classList.add('-active')
			}
	});

	toplink.addEventListener('click touch',(e)=>{
		const wrap = document.getElementsByClassName('wrap')[0];
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			wrap.style.top = 0;
			headers.classList.add('-main')
			headers.classList.remove('-sub')
		});
	};

let point;
let pointend;
let value;
$('.container').on("touchstart", function (e) {
		e.originalEvent.touches[0].pageX
		e.originalEvent.touches[0].pageY
		point = e.originalEvent.touches[0].pageY;
		// e.originalEvent.changedTouches[0] 는 사용 불가!
		console.log('start',point)
})

$('.container').on("touchmove", function (e) {
	e.originalEvent.touches[0].pageX
		e.originalEvent.touches[0].pageY
		e.originalEvent.changedTouches[0].pageX
		e.originalEvent.changedTouches[0].pageY
		// 둘 다 사용 가능!
		console.log('move')
})

$('.container').on("touchend", function (e) {
		e.originalEvent.changedTouches[0].pageX
		e.originalEvent.changedTouches[0].pageY
	// e.originalEvent.touches[0] 는 사용 불가!
		pointend = e.originalEvent.changedTouches[0].pageY;
		console.log('end',pointend)
		value = point - pointend
		calPosition(value)
})
let page=0;
const wrap = document.getElementsByClassName('wrap')[0];
function calPosition(pointvalue){
	const headers = document.querySelector('.headers');
	const elm = document.querySelectorAll(".container");
	
	if(pointvalue>0){
		console.log('위로')
		page++
	}else{
		console.log('아래')
		page--;
	}
	if(page < 0){
		return page=0;
	}else if(page > 7){
			return page = 7;
	}
	if(page==0){
		headers.classList.add('-main')
		headers.classList.remove('-sub')
	}else{
		headers.classList.remove('-main')
		headers.classList.add('-sub')
	}
	let moveTop;
	wrap.style.top = page * -100 + 'vh';
	console.log(page)
}
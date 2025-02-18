//새로고침시 스크롤위치 복원하지 않음설정
history.scrollRestoration = "manual"

//사이트 부드럽게하기
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)



//visual
//이미지 나오게하기
gsap.to('.sc-visual .image-grid__item img',{
    duration:2,
    opacity:1,
    stagger:0.05

})
//이미지 마우스 이벤트
$(document).mousemove(function(e){
    mouseX = e.clientX - window.innerWidth/2;
    mouseY = e.clientY - window.innerHeight/2;
    //현재보고 있는 화면기준으로 마우스 움직임을 받아오고
    //window의 /2를 하여 중앙기준으로 만들어준다
    // console.log(mouseX+'//'+mouseY);

    $('.image-grid__item').each(function(){

        gsap.to(this,{
            x:mouseX/$(this).data('img'),
            y:mouseY/$(this).data('img')
            //각각 img데이터값을 가져와준다.
        })
    })

})



//nav
const menuTl = gsap.timeline({
    paused:true,
    //타임라인을 정지
})
menuTl
.to('.gnb',.4,{xPercent:-100})
.from('.gnb .nav-list > * , .gnb .bottom-area > *',{ opacity:0, yPercent:100, stagger:0.03, })

$('.header .btn-menu').click(function(){
    if($(this).hasClass('on')){
        menuTl.reverse()
    }else{
        menuTl.play()
    }
    $(this).toggleClass('on')
    
})



//sc-monalisa
//link-box
gsap.from('.sc-monalisa .link-box span',{
    scrollTrigger:{
        trigger:'.link-box',
        start:"0% 100%",
        end:"100% 100%",
        // markers:true,
        scrub:10,
    },
    opacity:0,
    xPercent: -100,
})



//sc-louvre
gsap.set('.sc-louvre .hori',{ xPercent:100 })
const horiList = document.querySelectorAll(".hori");
const professionalsTl = gsap.timeline({
    defaults:{
        ease:'none'
    },
    scrollTrigger: {
        trigger: ".sc-louvre",
        start: "0 0",
        end: "100% 100%",
        // markers:true,
        scrub:5
    }
});
// for (let i = 1; i < horiList.length; i++) {
//     professionalsTl.to(`.louvre-page${i}`, {xPercent: 0,})
//     professionalsTl.to(`.louvre-page${i} .line-bar`, {width: 20,})
// }
professionalsTl
.to('.louvre-page1',{ xPercent:0})
.to('.louvre-page1 .line-bar',{width:15})
.to('.louvre-page2',{ xPercent:0})
.to('.louvre-page2 .line-bar',{width:15})
.to('.louvre-page3',{ xPercent:0})
.to('.louvre-page3 .line-bar',{width:15})
.to('.louvre-page4',{ xPercent:0})
.to('.louvre-page4 .line-bar',{width:15})
.to('.louvre-page5',{ xPercent:0})
.to('.louvre-page5 .line-bar',{width:15},"a")
.from('.louvre-page5 .link-area',{opacity:0, xPercent: -130, ease: "none"},"a-=0.3");



//sc-capodimonte
//이미지
$('[data-scroll-y]').each(function(i,el){
    //반복문을 돌려 각각 데이터값으로 움직이도록 설정
    gsap.to(el,{
        scrollTrigger: {
            trigger: el,
            start:"0% 100%",
            end:"100% 0%",
            // markers:true,
            scrub: 2,
        },
        yPercent:el.dataset.scrollY
    })
})



//sc-capodimonte
gsap.from('.sc-capodimonte .link-area',{
    scrollTrigger:{
        trigger:'.sc-capodimonte .link-area',
        start:"0% 100%",
        end:"100% 100%",
        // markers:true,
        scrub:5,
    },
    opacity:0,
    xPercent: -130,
})



//sc-thegreat
const printsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-thegreat',
        start:"0% 0%",
        end:"100% 100%",
        //markers:true,
        scrub: 0,
    },
})
printsTl
printsTl.addLabel('a')
printsTl.to('.sc-thegreat .group-text',{ filter: 'invert(0)'},'a')
printsTl.to('.sc-thegreat .bg-gradient',{ yPercent:-100},'a-=0.1')
printsTl.to('.sc-thegreat .group-text .desc',{ opacity:0},'a-=0.3')
//그림
for (let i = 1; i < 6; i++) {
    printsTl.addLabel(`img${i}`)
    printsTl.to(`.painter-list .painter-item`,{opacity:0,})
    printsTl.to(`.sc-thegreat .cardimg-wrap .card-item:nth-child(${i}) .img-wrap`,{yPercent:-200},`img${i}`)
    printsTl.to(`.painter-list .painter-item:nth-child(${i})`,{opacity:1,},`img${i}`)
    
}



//slide
const mainSlide=new Swiper('.swiper',{
    loop : true,
    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect : 'fade', 
    fadeEffect: { 
    crossFade: true
    //fade했을때 잔상제거
    },
    speed: 300,
})



//sc-inputemail
// gsap.from('.sc-inputemail',{
//     scrollTrigger:{
//         trigger:".sc-inputemail",
//         start:"0% 100%",
//         end:"0% 100%",
//         // markers:true,
//         scrub:3,     
//     },
//     y:100,
//     opacity:0,
// })















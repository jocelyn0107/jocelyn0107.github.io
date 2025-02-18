const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ScrollTrigger.create({
    trigger:'.sc-data .group-data',
    start:"0% 0%",
    // markers:true,
    onEnter:function(){
        $('.header').addClass('on')
    }
})

ScrollTrigger.create({
    trigger:'.group-keyword',
    start:"100% 5%",
    // markers:true,
    onEnter:function(){
        $('.header').removeClass('on')
    },
    onLeaveBack:function(){
        $('.header').addClass('on')
    }
})



dataTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-data',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
})


dataTl
.set('.header',{yPercent:-100})
.to('.sticky.data .text:nth-child(2)',{opacity:1,},'a')
.to('.sticky.data',{"--data-background": "rgba(0,0,0,.6)"},'a')
.to('.header',{yPercent:0, visibility:'visible'})
.to('.sticky.data .text:nth-child(2)',{opacity:0,})

.to('.sticky.data .text:nth-child(3)',{opacity:1,})
.to('.sticky.data .text:nth-child(3)',{opacity:0,})

.to('.sticky.data .text:nth-child(4)',{opacity:1,})
.to('.sticky.data .text:nth-child(4)',{opacity:0,})

.to('.sticky.data .text:nth-child(5)',{opacity:1,})

.to('.sticky.data .ic-arrow',{opacity:0,})

keywordTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-keyword',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
})

keywordTl
.to('.sticky.keyword',{"--data-background": "rgba(0,0,0,.6)"},'b')
.to('.sticky.keyword h2 p',{opacity:1,},'b')

.to('.sticky.keyword',{"--data-background": "rgba(0,0,0,0)"},'c')
.to('.sticky.keyword .text-top',{xPercent:100,},'c')
.to('.sticky.keyword .text-bottom',{xPercent:-100,},'c')
.to('.sticky.keyword h2 p',{opacity:0,})
.to('.sticky.keyword .bg1',{bottom:'100%',})
.to('.sticky.keyword .bg2',{bottom:'100%',})
.addLabel('d')
.to('.sticky.keyword>.text',{opacity:1,},'d')
.to('.sticky.keyword ',{"--data-background": "rgba(0,0,0,.6)"},'d')





descTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-desc.style1 .group-bottom',
        start:"0% 80%",
        end:"0% 10%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
})

descTl
.from('.sc-desc.style1 .group-bottom .box1',{width:0},'e')
.from('.sc-desc.style1 .group-bottom .box2',{width:0},'e')
.to('.sc-desc.style1 .group-bottom .text.left span',{xPercent:-172},'e')
.to('.sc-desc.style1 .group-bottom .text.right span',{xPercent:134},'e')



ScrollTrigger.create({
    trigger:"[data-dark]",
    start:"0% 55%",
    end:"100% 40%",
    // markers:true,
    toggleClass:{targets:"body",className:"dark"}

})


gsap.to('.sc-method .method-area',{
    scrollTrigger:{
        trigger:'.group-method',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh: true,
    },
    ease:'none',
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }

})


descTl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-desc.style2 .group-bottom',
        start:"0% 95%",
        end:"0% 60%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
})

descTl2
.from('.sc-desc.style2 .box-area .box.pink',{xPercent:-50},'f')
.from('.sc-desc.style2 .box-area .box.blue',{xPercent:-50},'f')
.from('.sc-desc.style2 .box-area .box.green',{xPercent:50},'f')


descTl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-desc.style2 .box-area',
        start:"0% 30%",
        end:"100% 30%",
        // markers:true,
        scrub:0,
        onEnter:function(){
            $('.sc-desc.style2 .group-bottom').addClass('blur')
        },
        onLeaveBack:function(){
            $('.sc-desc.style2 .group-bottom').removeClass('blur')
        }
    },
    ease:'none',
})

descTl3
.from('.sc-desc.style2 .group-bottom .text',{opacity:0},'g')


dataidTL = gsap.timeline({
    scrollTrigger:{
        trigger:'.sticky-wrapper .sticky-inner',
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        },
    ease:'none'
})



dataidTL.to('.sticky-wrapper .sticky-inner .hori-content',{
    x:function(){
        return -$('.group-sticky1 .hori-content .headline').innerWidth()+100
    }
},'f')

for (let i = 0; i < $('.sticky-wrapper .sticky-inner .card-list li').length; i++) {

    dataidTL.to(`.sticky-wrapper .sticky-inner .card-list li:nth-child(${i+1})`,{
        xPercent:-100*i,
        delay:0.1
    },'f') 
}

dataidTL.to('.group-sticky1 .card.gradient .open',{opacity:0},'f')
dataidTL.to('.group-sticky1 .card.gradient .lock',{opacity:1},'f+=0.3')
dataidTL.to('.group-sticky1 .card.gradient .lock',{opacity:0},)


dataid2TL = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-sticky2',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        onEnter:function(){
            $('.sc-dataid .group-sticky1').addClass('hide')
            $('.sc-dataid .group-sticky2').removeClass('hide')
        },
        onLeaveBack:function(){
            $('.sc-dataid .group-sticky1').removeClass('hide')
            $('.sc-dataid .group-sticky2').addClass('hide')
        }
        },
    ease:'none'
})

gsap.from('.sc-dataid .sticky.dataid2 .text-gradient',{
    scrollTrigger:{
        trigger:'.group-sticky2',
        start:"0% 0%",
        end:"15% 10%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
    opacity:0,

})


dataid3TL = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-sticky3',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        onEnter:function(){
            $('.sc-dataid .group-sticky2').addClass('hide')
            $('.sc-dataid .group-sticky3 .card.gradient').removeClass('hide')
        },
        onLeaveBack:function(){
            $('.sc-dataid .group-sticky2').removeClass('hide')
            $('.sc-dataid .group-sticky3 .card.gradient').addClass('hide')
        }
        },
    ease:'none'
})

for (let i = 1; i < $('.sc-dataid .sticky.dataid3 .card-list li').length+1; i++) {

    dataid3TL.to(`.sc-dataid .sticky.dataid3 .card-list li:nth-child(${i})`,{
        xPercent:-100*i,
    },'g') 
}


dataid4Tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-sticky3 .card-list',
        start:"0% 50%",
        // markers:true,
        scrub:0,
        onEnter:function(){
            $('.sc-dataid .sticky.dataid3 .img').addClass('blur')
        },
        
    },
    ease:'none',
})




dataid5TL = gsap.timeline({
    scrollTrigger:{
        trigger:'.group-sticky4',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        onEnter:function(){
            $('.sc-dataid .group-sticky3').addClass('hide')
            $('.sc-dataid .group-sticky4').removeClass('hide')
            
        },
        onLeaveBack:function(){
            $('.sc-dataid .group-sticky3').removeClass('hide')
            $('.sc-dataid .group-sticky4').addClass('hide')
        }
        },
    ease:'none'
})

dataid5TL.to('.sc-dataid .sticky.dataid4 .text',{opacity:1},'h')
dataid5TL.to('.sc-dataid .sticky.dataid4 .card.gradient',0,{"--opacity":1},'h+=0.05')


descTl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-desc.style3 .group-bottom',
        start:"0% 80%",
        end:"0% 10%",
        // markers:true,
        scrub:0,
    },
    ease:'none',
})

descTl4
.from('.sc-desc.style3 .group-bottom .box1',{width:0},'g')
.from('.sc-desc.style3 .group-bottom .box2',{width:0},'g')
.to('.sc-desc.style3 .group-bottom .text.left span',{xPercent:-114},'g')
.to('.sc-desc.style3 .group-bottom .text.right span',{xPercent:120},'g')



ScrollTrigger.create({
    trigger:'.sc-finance .card-list',
    start:"0% 40%",
    end: "100% 100%",
    // markers:true,
    onEnter:function(){
        $('.sc-finance .sticky.finance .card.gradient2 .img').addClass('blur')
    }
})


gsap.to('.sc-finance .finance-area',{
    scrollTrigger:{
        trigger:'.group-finance',
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh: true,
        onUpdate: self => {
            progress=self.progress.toFixed(3)*100;
            if (progress>=57) {
                $('.sc-finance .sticky.finance .old').addClass('hide');
                $('.sc-finance .sticky.finance .future').removeClass('hide');
            } else {
                $('.sc-finance .sticky.finance .old').removeClass('hide');
                $('.sc-finance .sticky.finance .future').addClass('hide');
                
            }
        },
        toggleClass:{targets:".sc-finance .sticky.finance .arrow", className:'show'},
    },
    ease:'none',
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }
})


manualTL = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-manual .group-top',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        },
    ease:'none',
})

manualTL
.from('.sc-manual .group-top .text-wrap',{opacity:0})
.from('.sc-manual .ic-arrow',{opacity:0})
.to('.sc-manual .group-top .text-wrap',{opacity:0},'h')
.to('.sc-manual .ic-arrow',{opacity:0},'h')


ScrollTrigger.create({
    trigger:'.sc-manual .hori-content .card-list',
    start:"0% 40%",
    end: "100% 100%",
    // markers:true,
    onEnter:function(){
        $('.sc-manual .card-list .card.face .img').addClass('blur')
    }
})


gsap.to('.sc-manual .sticky.manual2 .hori-content',{
    scrollTrigger:{
        trigger:'.sc-manual .group-bottom',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh: true,
        },
        ease:'none',
        xPercent:-100,
        x:function(){
        return window.innerWidth;
    }
        
})


ScrollTrigger.create({
    trigger:'.footer',
    start:"99% 100%",

    toggleClass:{targets:".sc-innovation .banner-area", className:'on'},
    // markers:true,
})

$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"});
  })


ScrollTrigger.create({
    trigger:'.footer',
    start:"-60.08px 100%",
    end:"100% 0%",
    // markers:true,
    toggleClass:{targets:".btn-top",className:"change"}
})

let lastScroll = 0;
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        keywordOffset = $('.sc-keyword').offset().top;
        if (curr > keywordOffset) {
            if (curr > lastScroll) {
                $('.btn-top').removeClass('on');
            } else {
                $('.btn-top').addClass('on')
            }
        } else {
            $('.btn-top').removeClass('on');
        }
        lastScroll = curr;
    })

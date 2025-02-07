gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)
// AOS.init();




const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// init animation
const action = async () => {
    await sleep(1);
    document.querySelector("body").style.overflow = "hidden";
    const timeLine = gsap.timeline({});
    gsap.set(".intro_logo", {
        opacity: 0,
        y: 120,
    });
    await sleep(200);
    timeLine.to(".intro_logo", {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "power1.out",
    });
    timeLine.to(
        ".logo_lower", {
            duration: 0.1,
            opacity: 1,
            visibility: "visible",
            ease: "power4.out",
            // ease: "Power1.easeOut",
        },
        ">"
    );
    // await sleep(1000);
    // ScrollTrigger.create({
    //     trigger: ".section02",
    //     start: "bottom bottom",
    //     end: "bottom bottom",
    //     toggleActions: "restart none restart none ",
    //     onEnter: () => {
    //         gsap.to(window, {
    //             scrollTo: {
    //                 y: document.querySelector(".section03").offsetTop,
    //             },
    //             duration: 0.5,
    //         });
    //     },
    // });
    await sleep(1600);
    gsap.to("header", {
        duration: 2,
        delay: 1,
        opacity: 1,
        visibility: "visible",
        ease: "power4.out",
    });
    gsap.to(".intro_section", {
        duration: 3,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
            document.querySelector(".intro_section").style.display = "none";
            document.querySelector("header").style.position = "fixed";
            document.querySelector(".intro_logo").style.position = "fixed";
            document.querySelector("body").style.overflow = "auto";
        },
    });

    await sleep(100);

    gsap.to(".intro_logo", {
        duration: 2,
        top: 38,
        width: 130,
        height: 40,
        transform: "translate(-50%, 0)",
    });
    // gsap.to(".section01", {
    //     duration: 3,
    //     opacity: 1,
    //     ease: "power1.out",
    //     onStart: () => {
    //         if (document.querySelector('.popup')) {
    //             document.querySelector(".popup").style.opacity = 1;
    //             document.querySelector(".popup").style.visibility = "visible";
    //         }
    //         const initialSlide = document.querySelector(".swiper-slide");
    //         const img = initialSlide ? .querySelector("img");
    //         const video = initialSlide ? .querySelector("video");
    //         if (img) {
    //             setTimeout(() => {
    //                 dateSwiper.slideTo(1);
    //             }, 3000);
    //         }
    //         if (video) {
    //             video.currentTime = 0;
    //             video.play();
    //         }
    //     },
    // });
};
const actionMobile = async () => {
    document.querySelector("body").style.overflow = "hidden";
    const timeLine = gsap.timeline({});
    gsap.set(".intro_logo", {
        opacity: 0,
        y: 120,
    });
    await sleep(200);
    timeLine.to(".intro_logo", {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "power1.out",
    });
    timeLine.to(
        ".logo_lower", {
            duration: 0.1,
            opacity: 1,
            visibility: "visible",
            ease: "power4.out",
        },
        ">"
    );

    await sleep(2600);
    gsap.to("header", {
        duration: 2,
        delay: 1,
        opacity: 1,
        visibility: "visible",
        ease: "power4.out",
    });
    gsap.to(".intro_section", {
        duration: 3,
        opacity: 0,
        ease: "power4.out",
        onComplete: () => {
            document.querySelector(".intro_section").style.display = "none";
            document.querySelector("header").style.position = "fixed";
            document.querySelector(".intro_logo").style.position = "fixed";
            if (
                !document
                .querySelector("header .menu_container")
                .classList.contains("active")
            ) {
                document.querySelector("body").style.overflow = "auto";
            }
            // new MouseShowMore();
        },
    });

    await sleep(100);

    gsap.to(".intro_logo", {
        duration: 1.5,
        top: 14,
        width: 120,
        height: 36,
        left: 20,
        transform: "translate(0, 0)",
    });
    // gsap.to(".section01", {
    //     duration: 2.5,
    //     opacity: 1,
    //     ease: "power1.out",
    //     onStart: () => {
    //         if (document.querySelector('.popup')) {
    //             document.querySelector(".popup").style.opacity = 1;
    //             document.querySelector(".popup").style.visibility = "visible";
    //         }
    //         const initialSlide = document.querySelector(
    //             ".contents_sw_mo .swiper-slide"
    //         );
    //         const img = initialSlide ? .querySelector("img");
    //         const video = initialSlide ? .querySelector("video");
    //         if (img) {
    //             setTimeout(() => {
    //                 dateSwiper.slideTo(1);
    //             }, 3000);
    //         }
    //         if (video) {
    //             video.pause();
    //             video.currentTime = 0;
    //             video.play();
    //         }
    //     },
    // });
};
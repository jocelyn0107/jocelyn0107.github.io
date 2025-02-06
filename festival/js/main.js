gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)
// AOS.init();

setTimeout(function () {
            window.scrollTo(0, 0);
        }, 300);
        // animation
        ScrollTrigger.matchMedia({
            "(min-width:801px)": function () {
                gsap.to(".section02 .top_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        markers: false,
                        start: "top top",
                        end: "50% top",
                        toggleActions: "restart reverse restart reverse ",
                    },
                    position: "fixed",
                    top: "50%",
                    transform: "translateY(-50%)",
                    duration: 0.1,
                });
                gsap.to(".bottom_dim", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "50% top",
                        markers: false,
                        toggleActions: "restart reverse restart reverse ",
                    },
                    opacity: 0.5,
                    duration: 0.4,
                    visibility: "visible",
                });
                gsap.to(".bottom_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "50% top",
                        end: "100% bottom",
                        // markers: true,
                        toggleActions: "restart reverse restart reverse ",
                    },
                    opacity: 1,
                    duration: 0.4,
                });

                gsap.to(".bottom_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "0% top",
                        end: "100% bottom",
                        // markers: true,
                        toggleActions: "restart reverse restart reverse ",
                    },
                    position: 'fixed',
                    duration: 0.0001,
                });
                gsap.to("body", {
                    scrollTrigger: {
                        trigger: ".section02",
                        markers: false,
                        start: "top top",
                        toggleActions: "restart none none none",
                    },
                    overflow: "hidden",
                    onComplete: () => {
                        setTimeout(() => {
                            document.body.style.overflow = "auto";
                        }, 500);
                    },
                });
                gsap.to(".section02 .top_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        markers: false,
                        start: "38% top",
                        toggleActions: "restart reverse restart reverse",
                    },
                    opacity: 0,
                    duration: 0.4,
                });


                gsap.to(".section03", {
                    scrollTrigger: {
                        trigger: ".section03",
                        // markers: true,
                        start: "-1% top",
                        toggleActions: "restart reverse restart reverse",
                        onLeaveBack: function () {
                            document.querySelector('footer').style.display = 'none'
                            document.querySelectorAll('.section03 .banner_wrapper .banner').forEach(el => el.classList.remove('enable'))
                        }
                    },
                    // transform: "translateY(0px)",
                    // duration: 0.4,
                    onComplete: function () {
                        document.querySelectorAll('.section03 .banner_wrapper .banner').forEach(el => el.classList.add('enable'))
                        document.body.style.overflow = "hidden"
                        setTimeout(() => {
                            document.body.style.overflow = "auto"
                            document.querySelector('footer').style.display = 'block'
                        }, 500)
                    },
                });
            },
            "(max-width:800px)": function () {
                gsap.to(".bottom_dim", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "31% top",
                        // markers: true,
                        toggleActions: "restart reverse restart reverse ",
                    },
                    opacity: 0.5,
                    duration: 0.4,
                    visibility: "visible",
                });
                gsap.to("body", {
                    scrollTrigger: {
                        trigger: ".section02",
                        markers: false,
                        start: "top top",
                        end: "center top",
                        toggleActions: "restart none none none",
                    },
                    overflow: "hidden",
                    onComplete: () => {
                        setTimeout(() => {
                            document.body.style.overflow = "auto";
                        }, 500);
                    },
                });
                gsap.to(".section02 .top_text_content_mo", {
                    scrollTrigger: {
                        trigger: ".section02",
                        // markers: true,
                        start: "22% top",
                        toggleActions: "restart reverse restart reverse",
                    },
                    opacity: 0,
                    duration: 0.4,
                });
                gsap.to(".bottom_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "31% top",
                        end: "85% center",
                        toggleActions: "restart reverse restart reverse ",
                    },
                    opacity: 1,
                    duration: 0.4,
                });
                gsap.to(".bottom_text_content", {
                    scrollTrigger: {
                        trigger: ".section02",
                        start: "0% top",
                        end: "85% center",
                        // markers: true,
                        toggleActions: "restart reverse restart reverse ",
                    },
                    position: 'fixed',
                    duration: 0.0001,
                });
                gsap.to(".section03 .banner_wrapper .banner.cosmo", {
                    scrollTrigger: {
                        trigger: ".section03 .banner_wrapper .banner.cosmo",
                        // markers: true,
                        start: "center center",
                        end: "bottom center",
                        toggleActions: "restart reverse none none",
                        // onEnter: ({ progress, direction, isActive }) =>
                        //     setTimeout(() => {
                        //         document
                        //             .querySelector(
                        //                 ".section03 .banner_wrapper .banner.cosmo"
                        //             )
                        //             .classList.add("active");
                        //     }, 400),

                        onLeave: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.cosmo"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onStart: () => {
                        document.querySelector('body').style.overflow = 'hidden'
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.cosmo"
                            )
                            .classList.add("active");
                        setTimeout(() => {
                            document.querySelector('body').style.overflow = 'auto'

                        }, 400)
                    },

                });
                gsap.to(".section03 .banner_wrapper .banner.cosmo", {
                    scrollTrigger: {
                        trigger: ".section03 .banner_wrapper .banner.cosmo",
                        // markers: true,
                        start: "top center",
                        end: "center center",
                        toggleActions: "none none restart reverse",
                        onLeaveBack: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.cosmo"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onComplete: () => {
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.cosmo"
                            )
                            .classList.add("active");
                    },
                });
                gsap.to(".section03 .banner_wrapper .banner.new_land", {
                    scrollTrigger: {
                        trigger:
                            ".section03 .banner_wrapper .banner.new_land",
                        markers: false,
                        start: "top center",
                        end: "center center",
                        toggleActions: "none none restart reverse",
                        onLeaveBack: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.new_land"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onComplete: () => {
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.new_land"
                            )
                            .classList.add("active");
                    },
                });
                gsap.to(".section03 .banner_wrapper .banner.new_land", {
                    scrollTrigger: {
                        trigger:
                            ".section03 .banner_wrapper .banner.new_land",
                        markers: false,
                        toggleActions: "restart reverse none none",
                        start: "center center",
                        end: "bottom center",

                        onLeave: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.new_land"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onStart: () => {
                        document.querySelector('body').style.overflow = 'hidden'
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.new_land"
                            )
                            .classList.add("active");
                        setTimeout(() => {
                            document.querySelector('body').style.overflow = 'auto'

                        }, 400)
                    },
                    onComplete: () => {

                    },
                });
                gsap.to(".section03 .banner_wrapper .banner.new_creature", {
                    scrollTrigger: {
                        trigger:
                            ".section03 .banner_wrapper .banner.new_creature",
                        markers: false,
                        toggleActions: "restart reverse none none",
                        start: "center center",
                        end: "bottom center",
                        onLeave: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.new_creature"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onStart: () => {
                        document.querySelector('body').style.overflow = 'hidden'
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.new_creature"
                            )
                            .classList.add("active");
                        setTimeout(() => {
                            document.querySelector('body').style.overflow = 'auto'

                        }, 400)
                    },
                    onComplete: () => {
                    },
                });
                gsap.to(".section03 .banner_wrapper .banner.new_creature", {
                    scrollTrigger: {
                        trigger:
                            ".section03 .banner_wrapper .banner.new_creature",
                        markers: false,
                        start: "top center",
                        end: "center center",
                        toggleActions: "none none restart reverse",
                        onLeaveBack: ({ progress, direction, isActive }) =>
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.new_creature"
                                )
                                .classList.remove("active"),
                    },
                    duration: 0.4,
                    onComplete: () => {
                        document
                            .querySelector(
                                ".section03 .banner_wrapper .banner.new_creature"
                            )
                            .classList.add("active");
                    },
                });
                gsap.to(
                    ".section03 .banner_wrapper .banner.space_exploration",
                    {
                        scrollTrigger: {
                            trigger:
                                ".section03 .banner_wrapper .banner.space_exploration",
                            markers: false,
                            toggleActions: "restart reverse none none",
                            start: "center center",
                            end: "bottom center",
                            onLeave: ({ progress, direction, isActive }) =>
                                document
                                    .querySelector(
                                        ".section03 .banner_wrapper .banner.space_exploration"
                                    )
                                    .classList.remove("active"),
                        },
                        duration: 0.4,
                        onStart: () => {
                            document.querySelector('body').style.overflow = 'hidden'
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.space_exploration"
                                )
                                .classList.add("active");
                            setTimeout(() => {
                                document.querySelector('body').style.overflow = 'auto'

                            }, 400)
                        },
                        onComplete: () => {
                        },
                    }
                );
                gsap.to(
                    ".section03 .banner_wrapper .banner.space_exploration",
                    {
                        scrollTrigger: {
                            trigger:
                                ".section03 .banner_wrapper .banner.space_exploration",
                            markers: false,
                            start: "top center",
                            end: "center center",
                            toggleActions: "none none restart reverse",
                            onLeaveBack: ({
                                progress,
                                direction,
                                isActive,
                            }) => {
                                document
                                    .querySelector(
                                        ".section03 .banner_wrapper .banner.space_exploration"
                                    )
                                    .classList.remove("active");
                            },
                        },
                        duration: 0.4,
                        onComplete: () => {
                            document
                                .querySelector(
                                    ".section03 .banner_wrapper .banner.space_exploration"
                                )
                                .classList.add("active");
                        },
                    }
                );
            },
        });




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
        width: 146,
        height: 45,
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
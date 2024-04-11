document .addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // gsap code

    const tl_preloader = gsap.timeline();

tl_preloader.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 0.7,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 1,
    delay: 0.7,
    y: 70,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 1,
    y: 70,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  })

  .to(".big_title_heading", { 
    duration: 0.6,
    y:0, 
    opacity:1, 
    ease: "power3.out",
})
    .to(".second_title_heading", {
        duration: 0.7,
        y:0,
        opacity:1,
        ease: "power3.out",
    })
    .to(".third_title_heading, .third_title_btn, .work_status, .header", {
        duration: 1,
        y:0,
        x:0,
        opacity:1,
        ease: "power2.out",
    });


    const hidebigTitle = gsap.to (".big_title_col",{
        x:60,
        duration: 2,
        opacity:0,
        ease: "power3.out",
        toggleActions: "play complete reverse none",
    })
    const hideSecondheading = gsap.to (".second_title_col",{
        x: -60,
        duration: 1,
        opacity:0,
        ease: "power3.out",
    })
    const hideThirdheading = gsap.to (".third_title_row", {
        opacity: 0,
        ease: "power3.out",
        y:-40,
    })
    ScrollTrigger.create({
        trigger: ".hero_section",
        start: "50% center",
        end: "bottom 20%",
        scrub: 1,
        animation: hidebigTitle,
        markers: false,
    })
    ScrollTrigger.create({
        trigger: ".hero_section",
        start: "50% center",
        end: "bottom 20%",
        scrub: 1,
        animation: hideSecondheading,
        markers: false,
    })
    ScrollTrigger.create({
        trigger: ".hero_section",
        start: "50% center",
        end: "bottom 20%",
        scrub: 1,
        animation: hideThirdheading,
        markers: false,
    })

    // text_section

    const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 30%',
                        end: 'bottom 20%',
                        scrub: true,
                        pin:".new_ab_section",
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })

        const new_ab_line = gsap.to(".new_ab_line", {
          duration: 1,
          width: '100%',
          marginLeft:0,
          ease: "power3.out",
        })
        ScrollTrigger.create({
          trigger: ".new_ab_section",
          start: "top 30%",
          end: "bottom 20%",
          markers: true,
          scrub: 1,
          animation: new_ab_line,
        })
    // about_section

    // about_title 
    const about_titleAnimated = gsap.to(".about_title_row",{
        y:0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
    })
    ScrollTrigger.create ({
        trigger: ".about_section",
        start: "top center",
        end: "30% 20%",
        scrub: 1,
        animation: about_titleAnimated,
        markers: false,
    })

    // about_card
    const about_tl = gsap.timeline ();

    const animated_aboutCard = about_tl.to(".about_card",{
        x:0,
        y:0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease:"power3.out",
    })
    ScrollTrigger.create ({
        trigger: ".about_section",
        start: "top center",
        end: "30% 20%",
        scrub: 1,
        animation: animated_aboutCard,
        markers: false,
    })


    // lenis

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 300)
})

gsap.ticker.lagSmoothing(0)
     // end gsap

});

// nav js

  
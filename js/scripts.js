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

    // work_section

    // horizontal scroll
    const works_row = document.querySelector(".works_row"); 
    console.log(works_row.offsetWidth)
    
    function getScrollAmount() {
      let works_rowWidth = works_row.scrollWidth;
      return -(works_rowWidth - window.innerWidth);
    }
    
    const tween = gsap.to(works_row, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });
    
    
    ScrollTrigger.create({
      trigger:".works_section",
      start:"20% 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin:true,
      animation:tween,
      scrub:1,
      invalidateOnRefresh:true,
      markers:false,
    })
    // end horizontal_scroll

    // scroll to big thumbnail 

    const bigger_thumb = gsap.to(".works_thumbnail",{
      scale: 0,
      opacity: 1,
      duration: 1,
      ease:"power3.out",
    })
    ScrollTrigger.create({
      trigger: ".works_title",
      start: "20% 20%",
      end: "bottom bottom",
      markers: true,
      scrub: 1,
      containerAnimation: bigger_thumb,
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


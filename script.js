/*       const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});   */  
  

     function videoconAnimation() {
        var videocon = document.querySelector("#video-container");
        var playbtn = document.querySelector("#play");
        videocon.addEventListener("mouseenter", function () {
          gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
          });
        });
        videocon.addEventListener("mouseleave", function () {
          gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
          });
        });
        document.addEventListener("mousemove", function (dets) {
          gsap.to(playbtn, {
            left: dets.x-50 ,
            top: dets.y-50 
          });
        });
      }
      videoconAnimation();

  const shopHover = () => {
    let hoverBtn = document.querySelector(".hover");
    let pageFive = document.querySelector(".page5");
    
    pageFive.addEventListener("mouseenter",() => {
        gsap.to(hoverBtn,{
          scale:1,
          opacity:1,
        })
    }),
   
    pageFive.addEventListener("mouseleave",() => {
        gsap.to(hoverBtn,{
           scale:0,
           opacity:0,
        })
    }),
   
    pageFive.addEventListener("mousemove",(dets) => {
         gsap.to(hoverBtn,{
            top: dets.y-50,
            left: dets.x-50,
         })
    })
  }

shopHover();

     function init() {


  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()   
 
 const tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".page-6 h1",
      scroller: ".main",
      start: "top 27%",
      end: "top 0%",
      scrub: 2
   }
})

tl.to(".page-6 video",{
   width: "90%"
},"anim")  


 
const tl2 = gsap.timeline({
  scrollTrigger: {
     trigger: ".page-7 h1",
     scroller: ".main",
     start: "top -750%",
    
     scrub: 2
  }
})
 tl2.to(".main", {
   backgroundColor : "#0f0d0d",
   color: "white"
}) 
   
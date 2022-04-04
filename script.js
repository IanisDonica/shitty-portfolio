
let tl1 = gsap.timeline()

const animationPhone = window.matchMedia("(max-width: 1000px)")

// document.querySelector(".bars_low").addEventListener('mousemove', Projects);

// function Projects(event){
//     var el = document.getElementById("projects_hover");
// 	el.style.top = event.clientY + "px";
// 	el.style.left = event.clientX + "px";
// }

if (animationPhone.matches) {
    document.querySelector(".R2T").style.top = "0%";
    document.querySelector(".R2RTMOB").style.display = "block";
    document.querySelector(".R2LTMOB").style.display = "block";

    tl1.from(".top_slogan", {
        duration: 1.5,
        y: -50,
        opacity: .0,
        delay: 1
    })


    tl1.from(".R1M", {
        width: 0,
        duration: 4,
        ease: Power0.easeNone,
    })

    tl1.from(".bars_text", {
        duration: 5,
        y: 500,
        stagger: 0.5,
        ease: Power0.easeNone,
    }, "" )

    tl1.from(".R2T", {
        height: 0, 
        duration: 2,
        ease: Power0.easeNone,
    }, "-=2")

    tl1.from(".R2B", {
        height: 0, 
        duration: 2,
        ease: Power0.easeNone,
    })

    tl1.from(".R2LTMOB", {
        width: 0, 
        duration: 2,
        ease: Power0.easeNone,
    }, "<")

    tl1.from(".R2RTMOB", {
        width: 0, 
        duration: 2,
        ease: Power0.easeNone,
    }, "<")
}
else {

    tl1.from(".top_slogan", {
        duration: 1.5,
        y: -50,
        opacity: .0,
        delay: 1
    })

    tl1.from(".R1T, .R1B", {
        height: 0,
        duration: 2,
        ease: Power0.easeNone,
    })
    tl1.from(".R1M", {
        width: 0,
        duration: 4,
        ease: Power0.easeNone,
    }, "-=1")
    
    tl1.from(".bars_text", {
        duration: 1.5,
        y: 500,
        stagger: 0.5,
        ease: Power0.easeNone,
    }, "-=5" )
    
    tl1.from(".R2T", {
        height: 0, 
        duration: 2,
        ease: Power0.easeNone,
    }, "-=2")
    
    tl1.from(".R2B", {
        height: 0, 
        duration: 2,
        ease: Power0.easeNone,
    }, "-=2")
    

}

gsap.registerPlugin(ScrollTrigger);

let tl2 = gsap.timeline()

tl2.from(".drive", {
    duration: 1.5,
    y: -50,
    opacity: .0,
    delay: 1
})
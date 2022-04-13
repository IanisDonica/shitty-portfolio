window.addEventListener("mousemove", cursorMove);

function cursorMove(event) {
    var el = document.querySelector(".cursor");
    el.style.top = event.clientY + "px";
    el.style.left = event.clientX + "px";
}

window.addEventListener("mouseover", cursorMove2); 

function cursorMove2(event) {
    var el2 = document.querySelector(".cursor2");
    el2.style.top = event.clientY + "px";
    el2.style.left = event.clientX + "px";
}

var bars1 = document.querySelector(".bars1");

// bars1.addEventListener("mousemove", bars1Move);

// function bars1Move(event) {
//     document.querySelector(".cursor_projects").style.display = "block";
//     var elbars1 = document.querySelector(".cursor_projects");
//     elbars1.style.top = event.clientY + "px";
//     elbars1.style.left = event.clientX + "px";
// } 

// setTimeout(barstimeout1, 5);

// function barstimeout1() {
//     bars1.addEventListener("mouseover", bars1Move);

//     function bars1Move(event) {
//         document.querySelector(".cursor_projects").style.display = "block";
    
//         var elbars1 = document.querySelector(".cursor_projects");
//         elbars1.style.top = event.clientY + "px";
//         elbars1.style.left = event.clientX + "px";
//     } 
//     setTimeout(barstimeout1, 5);
// }

var k = 0;
var numSections = 5;
var isAnimationFired = new Array(numSections).fill(false);

new fullpage('#fullpage', {
    onLeave: function(origin, destination, direction) {
        
        if(!isAnimationFired[destination.index]){
            if(destination.index === 1) {
                if(k == 0) {
                    const animationPhone2 = window.matchMedia("(max-width: 1000px)")
                    let tl2 = gsap.timeline() 

                    if (animationPhone2.matches) {
                        tl2.from(".drive", {
                            duration: 1.5,
                            y: -100,
                            opacity: 0,
                        })   
                    }
                    else {
                        tl2.from(".drive", {
                            duration: 1.5,
                            y: -100,
                            opacity: .0,
                        })   
                        tl2.from(".SR2R", {
                            height: 0,
                            duration: 2,
                        })
                        tl2.from(".SR1R", {
                            height: 0,
                            duration: 2,
                        }, "<")
                        tl2.from(".SR2T", {
                            width: 0,
                            duration: 2,
                        }, "<")
                        tl2.from(".services_pag", {
                            duration: 1,
                            opacity: 0,
                            stagger: 0.75,
                            ease: Power0.easeNone,
                        }, "<" )
                    }
                }
                isAnimationFired[destination.index] = true;
            }
    }}
});

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
    tl1.from(".cursor", {
        opacity: 0,
        duration: 2,
    })
    tl1.from(".cursor2", {
        opacity: 0,
        duration: 2,
    }, "<")
    tl1.from(".R1T, .R1B", {
        height: 0,
        duration: 2,
        ease: Power0.easeNone,
    }, "<")
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

// gsap.registerPlugin(ScrollTrigger);

// let tl2 = gsap.timeline()

// tl2.from(".drive", {
//     duration: 1.5,
//     y: -50,
//     opacity: .0,
//     delay: 1
// })


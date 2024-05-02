const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlemousefollower(){
    window.addEventListener("mousemove" , function(dets){
     document.getElementById("minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

function firstpageanim(){
    var tl = gsap.timeline();
    tl.from("#nav" , {
        y: "-10",
        opacity: 0,
        duration:1.5 ,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem" , {
        y :0 ,
        duration : 2,
        delay : -1,
      ease :Expo.easeInOut,
      stagger : .2

    })

    tl.from("#herofooter" , {
        y: "-10",
        opacity: 0,
        duration:1.5 ,
        delay :-2 ,
        ease: Expo.easeInOut
    })
}
circlemousefollower()
firstpageanim()
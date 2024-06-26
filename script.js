const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



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
    })}

   
    function circleChaptaKaro() {
        // define default scale value
        var xscale = 1;
        var yscale = 1;
      
        var xprev = 0;
        var yprev = 0;
      
        window.addEventListener("mousemove", function (dets) {
          clearTimeout(timeout);
      
          xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
          yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
      
          xprev = dets.clientX;
          yprev = dets.clientY;
      
          circleMouseFollower(xscale, yscale);
      
          var timeout = setTimeout(function () {
            document.querySelector("#minicircle" ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
          }, 100);
        });
      }
      
      function circleMouseFollower(xscale, yscale) {
        window.addEventListener("mousemove", function (dets) {
          document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
        });
      }
      
      circleChaptaKaro();
      circleMouseFollower();
      firstpageanim()


      
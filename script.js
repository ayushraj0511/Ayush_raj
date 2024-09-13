const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function loadingAnime(){
    gsap.from("#home h1",{
        y:30,
        opacity:0,
        delay:.5,
        duration:.4,
        stagger:0.4
    })
    gsap.from("#home h2",{
        x:20,
        opacity:0,
        delay:.7,
        duration:.1,
        stagger:.5
       
    })
    gsap.from("#home img", {
        y:30,
        delay:.7,
        opacity:0,
        stagger:.5,
        duration:.4
    })
}
loadingAnime()

document.addEventListener("mousemove", (dets)=>{
gsap.to("#cursor", {
   left:dets.x,
   top:dets.y
})
})


// const nav = document.querySelector("nav"),
// toggleBtn = nav.querySelector(".toggle-btn");
// toggleBtn.addEventListener("click" , () =>{
// nav.classList.toggle("open");
// setTimeout(()=>{
// nav.classList.remove("open");
// }, timer);

// });
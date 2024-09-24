let select = document.querySelector(".select");

function sele(){
  for (let i= 1; i<=100; i++){
    select.style.opacity = "1";
    select.style.zIndex= "99999";
  }
 
  // select.style.margin = "100%";
}
function dele(){
  select.style.opacity = "0";
  select.style.zIndex="-9999";
}
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
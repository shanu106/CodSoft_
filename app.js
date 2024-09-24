// const { default: _SplitText } = require("gsap/SplitText")

// const { default: SplitText } = require("gsap/src/SplitText")



// import { gsap } from "gsap";
// import _SplitText, { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)

// gsap.registerPlugin(SplitText);
requestAnimationFrame(raf)
// gsap.registerPlugin(SplitText)
// gsap.registerPlugin(_SplitText)

// gsap.registerPlugin(SplitText);

// text moving animation 

// for all the h1

// gsap.registerPlugin(ScrollTrigger)

// let headings = document.querySelectorAll(".xxs");
// headings.forEach(heading =>{

// //  let tl = gsap.timeline();
//  let xTransform = gsap.utils.random(-100, 100);

//  gsap 
//   .set(heading,{
//     transformOrigin: (xTransform <0 ? 0 : '100%'),
//   })
// })
// // gsap.registerPlugin(ScrollTrigger);
// headings.forEach(heading =>{
//   let tl = gsap.timeline();
//   let xTransform = gsap.utils.random(100 , -100);

// //   tl
// //   .set(heading, {
// //     transformOrigin : (xTransform > 0 ? 0 : '-100%'),
    
// //   })

// //   .to(heading, {
// //    scale : 1.3,
// //    ease : "sine.inOut",
// //     scrollTrigger : {
// //       trigger : heading,
// //       start : "top 30%",
// //       end : "bottom 70%",
// //       scrub : true
      
// //     }
//   })
// })



// console.log(t);



























// gsap.registerPlugin(ScrollTrigger);

// let paras = document.querySelectorAll("div p");

// let skills = document.querySelectorAll(".shah");

// // paras.forEach(para => {
// //     let tl1 = gsap.timeline();
// //     let yTransform  = gsap.utils.random(-100, 100)

// //     tl1
// //     .set(para , {
// //         transformOrigin: (yTransform < 0 ? 0: '100%'),
// //     }, "start")
// //     .to(para , {
// //         ease: "elastic.inOut",
// //         scale: 0.9,
// //         scrub: true,
// //         scrollTrigger: {
// //             trigger : para,
// //             start : "top 0%",
// //             end : "bottom 40%",
// //             scrub: true
// //         }
// //     })
// // })

// let headings = document.querySelectorAll("div h1,h2, #im");
// headings.forEach(heading =>{
   
//     // gsap.registerPlugin(ScrollTrigger);
//     //  let tl = gsap.timeline();
//     let tl = gsap.timeline();
//     let xTransform = gsap.utils.random(-100, 100);

//     tl
//     .set(heading, {
//         transformOrigin: (xTransform < 0 ? 0: '100%'),
//     }, "start")
//     .to(heading, {
//         ease: "none",
//         scale: 0.5,
//         scrollTrigger: {
//             trigger: heading,
//             start : "top 70% ",
//             end : "bottom 40% ",
//             scrub : true
//         }
//     }, "start")
//     .to(heading,{
//         ease: "power2.inOut",
//         start: "top 10%",
//         end : "bottom 40%",
//         scrub : true,
//         ease : "bounce.inOut"
//     })
// })


// // const first = document.getElementById("first")
// // const second = document.getElementById("second")
// // const third = document.getElementById("third")
// // const fourth = document.getElementById("fourth")
// // const fifth = document.getElementById("fifth")
// // console.log(first, second , third , fourth , fifth)
// // // anchor tag scroll animations
// // gsap.registerPlugin(ScrollTrigger);
// // gsap.from(first , {
// //     scrollTrigger: first,
// //     y: 100,
// //     opacity: 0,
// //     duration: 1
// // });

// // gsap.from(second, {
// //     scrollTrigger: second,
// //     x: -100,
// //     opacity: 0,
// //     duration: 1
// // });

// // gsap.from(third, {
// //     scrollTrigger: third,
// //     scale: 0.5,
// //     opacity: 0,
// //     duration: 1
// // });
// // gsap.from(fourth, {
// //     scrollTrigger: fourth,
// //     scale: 0.5,
// //     opacity: 0,
// //     duration: 1
// // });
// // gsap.from(fifth, {
// //     scrollTrigger: fifth,
// //     scale: 0.5,
// //     opacity: 0,
// //     duration: 1
// // });

// // console.log(first, second, third, fourth, fifth)
var loader = document.querySelector("#loader")


setTimeout(function() {
    loader.style.top="-100%"
}, 4300);

var one = document.querySelector(".pr")
var two = document.querySelector(".pl")
setTimeout(function(){
    one.style.right="0";
    two.style.left="0";
},5000)

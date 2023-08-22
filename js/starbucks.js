let icegreen= document.getElementById("icegreen")
let icerose=document.getElementById("icerose")
let icepink=document.getElementById("icepink")
let circle=document.getElementById("circle")
let mainimg=document.getElementById("mainimg")

icegreen.addEventListener("mouseover", function(){
    circle.classList.add("circle-green")
    circle.classList.remove("circle-rose")
    circle.classList.remove("circle-pink")
    mainimg.setAttribute("src", "../img/img1.png")
})
icerose.addEventListener("mouseover", function(){
    circle.classList.remove("circle-green")
    circle.classList.add("circle-rose")
    circle.classList.remove("circle-pink")
    mainimg.setAttribute("src", "../img/img2.png")
})

icepink.addEventListener("mouseover", function(){
    circle.classList.remove("circle-green")
    circle.classList.remove("circle-rose")
    circle.classList.add("circle-pink")
    mainimg.setAttribute("src", "../img/img3.png")
})
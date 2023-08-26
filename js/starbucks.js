
let circleV=document.getElementById("circleV");
let circle=document.getElementById("circle");
let circleM=document.getElementById("circleM");


circleV.addEventListener("click", function(){
    if(circleV.classList.contains("circleV")){
        circleV.classList.add("circleV");
        circle.classList.remove("circle");
        circle.classList.add("circle");
        circleV.classList.remove("circleV");
        circleM.classList.add("circleM");
        circle.classList.remove("circle");

    }
    else{
        circleV.classList.remove("circleV");
        circleV.classList.add("circle");
    }
})
circle.addEventListener("click", function(){
    if(content.classList.contains("contenedor-1")){
        content.classList.add("contenedor-2");
        content.classList.remove("contenedor-1");

    }
    else{
        content.classList.remove("contenedor-2");
        content.classList.add("contenedor-1");
    }
})
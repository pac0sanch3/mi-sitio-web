 

let movimiento=document.getElementById("movimiento");
let content=document.getElementById("content");

movimiento.addEventListener("click", function(){
    if(content.classList.contains("contenedor-1")){
        content.classList.add("contenedor-2")
        content.classList.remove("contenedor-1")
        movimiento.classList.add("main-box-on");
        movimiento.classList.remove("main-box-off");
    }
    else{
        content.classList.remove("contenedor-2")
        content.classList.add("contenedor-1")
        movimiento.classList.remove("main-box-on");
        movimiento.classList.add("main-box-off");
    }
})
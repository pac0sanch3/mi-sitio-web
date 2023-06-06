let movimiento=document.getElementById("moviento")
let content=document.getAnimations("content")

movimiento.addEventListener("click", function(){
    if (content.classList.contains("box_4_1")) {
        content.classList.add("box_5");
        content.classList.remove("box_4_1");

    }
    else{
        content.classList.remove("box_4_1");
        content.classList.add("box_5");
    }
})
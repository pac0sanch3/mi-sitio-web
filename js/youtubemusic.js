let logohamburguer=document.getElementById("toggle")
let mainMenu=document.getElementById("navegacion");

logohamburguer.addEventListener("click",function(){
    if (mainMenu.classList.contains("menu-chiquito")) {
        mainMenu.classList.add("navegacion-block");
        mainMenu.classList.remove("menu-chiquito"); 
    }
    else{
        mainMenu.classList.remove("navegacion-block");
        mainMenu.classList.add("menu-chiquito");
    }
})
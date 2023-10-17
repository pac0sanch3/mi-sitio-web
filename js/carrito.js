let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades");
let boxMinus = document.getElementById("boxMinus");
let subtotal = document.getElementById("subTotal");
const valorUnidad=67000;
const valorUnidadStr=Intl.NumberFormat("de-DE").format(valorUnidad);
document.getElementById("precioUnidad").innerHTML="$" + valorUnidadStr;

boxPlus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if (auxUnidades < 10 ) {
        boxUnidades.innerHTML = (auxUnidades + 1).toString();
        let valorsubTotal=parseInt(boxUnidades.innerHTML) * valorUnidad;
        subtotal.innerHTML=Intl.NumberFormat("de-DE").format(valorsubTotal);
        if(auxUnidades.innerHTML==1){
            document.getElementById("canProductos").innerHTML=boxUnidades.innerHTML + " producto";
        }else{
            document.getElementById("canProductos").innerHTML=boxUnidades.innerHTML + " productos";
        }
    }
})
boxMinus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if (auxUnidades > 0 ) {
        boxUnidades.innerHTML = (auxUnidades - 1).toString();
        let valorsubTotal=parseInt(boxUnidades.innerHTML) * valorUnidad;
        subtotal.innerHTML=Intl.NumberFormat("de-DE").format(valorsubTotal);
        if(auxUnidades.innerHTML==1){
            document.getElementById("canProductos").innerHTML=boxUnidades.innerHTML + "producto";
        }else{
            document.getElementById("canProductos").innerHTML=boxUnidades.innerHTML + "productos";
        }
    }
})

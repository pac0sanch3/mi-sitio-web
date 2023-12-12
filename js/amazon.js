let calificacion1 = document.getElementById("calificacion1")
let calificacion2 = document.getElementById("calificacion2")
let calificacion3 = document.getElementById("calificacion3")
let calificacion4 = document.getElementById("calificacion4")
let calificacion5 = document.getElementById("calificacion5")
let btnGraficar = document.getElementById("btnGraficar")
let porcentaje = document.getElementById("PorcentajeCalificacion1")
let boxTextoCalificaion=document.getElementById("boxTextoCalificacion")

btnGraficar.addEventListener("click", function() {
    let sumaCalificacion =  Number(calificacion1.value) + 
                            Number(calificacion2.value) + 
                            Number(calificacion3.value) + 
                            Number(calificacion4.value) + 
                            Number(calificacion5.value)
                            console.log(sumaCalificacion)

    let promCalificacion1 = ((calificacion1.value * 100 ) / sumaCalificacion)
    let promCalificacion2 = ((calificacion2.value * 100)  / sumaCalificacion)
    let promCalificacion3 = ((calificacion3.value * 100)  / sumaCalificacion)
    let promCalificacion4 = ((calificacion4.value * 100)  / sumaCalificacion)
    let promCalificacion5 = ((calificacion5.value * 100)  / sumaCalificacion)
    console.log(promCalificacion1.toFixed(0))
    porcentaje.style.width=(promCalificacion1 * 2) +"px"

    let spanPorcentaje = document.createElement("span")
    boxTextoCalificaion.appendChild(spanPorcentaje)
    spanPorcentaje.innerHTML=promCalificacion1.toFixed(0)+"%"
    spanPorcentaje.setAttribute('class', 'span-porcentaje');



})
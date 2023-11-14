
let boxProductos= document.getElementById("boxProductos")

let boxProducto=document.createElement("div")
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class","box-producto")




let infoproducto=document.createElement("div")
boxProducto.appendChild(infoproducto)
infoproducto.setAttribute("class","box-info-producto")



let boxImagen=document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class","box-imagen")
let imagenProducto=document.createElement("img")
boxImagen.appendChild(imagenProducto)
imagenProducto.setAttribute("src", "img/hypermotard.jpg")
imagenProducto.setAttribute("class", "imagen-producto")


let marcaProducto=document.createElement("label")
infoproducto.appendChild(marcaProducto)
let nodoMarcaProducto=document.createTextNode(" Ducaty Hypermotard ")
marcaProducto.appendChild(nodoMarcaProducto)


let marcaProducto3=document.createElement("label")
infoproducto.appendChild(marcaProducto3)
let nodoMarcaProducto5=document.createTextNode(" $76.000.000 ")
marcaProducto3.appendChild(nodoMarcaProducto5)


let marcaProducto4=document.createElement("label")
infoproducto.appendChild(marcaProducto4)
let nodoMarcaProducto3=document.createTextNode("2023 · 12.327 km · bolivar-bogota D.C")
marcaProducto4.appendChild(nodoMarcaProducto3)

/* let marcaProducto2=document.createElement("label")
infoproducto.appendChild(marcaProducto2)
let nodoMarcaProducto2=document.createTextNode(" 2023 ·")
marcaProducto2.appendChild(nodoMarcaProducto2) */
/* 
let marcaProducto5=document.createElement("label")
infoproducto.appendChild(marcaProducto5)
let nodoMarcaProducto4=document.createTextNode(" bolivar-bogota D.C")
marcaProducto5.appendChild(nodoMarcaProducto4) */







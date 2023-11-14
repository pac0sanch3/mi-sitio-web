class Moto{
    constructor(marca, modelo, precio, anyo, kilometros, ciudad , imagen){
        this.marca=marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let moto1= new Moto("Ducaty"," Hypermotard","$76.000.000"," 2023 ","12.327km "," bolivar-bogota D.C","img/hypermotard.jpg");
let moto2= new Moto("Ducaty"," Multistrada","$81.000.000"," 2020 ","21.000km "," suba-bogota D.C","img/ducaty.jpg");
let moto3= new Moto("Ducaty"," Scramble","$38.000.000"," 2020 ","7.000km "," Usaquén-bogota D.C","img/ducaty2.jpg");
let moto4= new Moto("Yamaha"," Mt09","$68.000.000"," 2022 ","12.000km "," Medellin-Antioquia","img/mt-09.jpg");

let boxProductos= document.getElementById("boxProductos")
let inputbusquedad=document.getElementById("busqueda").value

window.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        
        let inputbusquedadAux=inputbusquedad.toString()
        if(inputbusquedadAux.innerText=="Ducaty"){
            cargarMoto(moto1)
            cargarMoto(moto2)
            cargarMoto(moto3)
        }

      
    }
});

cargarMoto(moto1)
cargarMoto(moto2)
cargarMoto(moto3)
cargarMoto(moto4)

function cargarMoto(moto){

    

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
    imagenProducto.setAttribute("src",moto.imagen )
    imagenProducto.setAttribute("class", "imagen-producto")


    let marcaProducto=document.createElement("label")
    infoproducto.appendChild(marcaProducto)
    let nodoMarcaProducto=document.createTextNode(moto.marca+moto.modelo)
    marcaProducto.appendChild(nodoMarcaProducto)
    marcaProducto.setAttribute("class","marcaproducto")


    let precioProducto=document.createElement("label")
    infoproducto.appendChild(precioProducto)
    let nodoprecioProducto=document.createTextNode(moto.precio)
    precioProducto.appendChild(nodoprecioProducto)
    precioProducto.setAttribute("class","precioProducto")


    let kilometraje=document.createElement("label")
    infoproducto.appendChild(kilometraje)
    let nodokilometraje=document.createTextNode(moto.kilometros+"·")
    kilometraje.appendChild(nodokilometraje)
    kilometraje.setAttribute("class","kilometraje")

    let anyoproducto=document.createElement("label")
    infoproducto.appendChild(anyoproducto)
    let nodoanyoproducto=document.createTextNode(moto.anyo+"·")
    anyoproducto.appendChild(nodoanyoproducto)
    anyoproducto.setAttribute("class","año-producto")


    let ciudad=document.createElement("label")
    infoproducto.appendChild(ciudad)
    let nodociudad=document.createTextNode(moto.ciudad)
    ciudad.appendChild(nodociudad)
    ciudad.setAttribute("class","ciudad")





}

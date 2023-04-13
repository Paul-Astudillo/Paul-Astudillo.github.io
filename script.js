console.log('UPS Ecuador');

var i=0 ;

var elemento = document.getElementById("titulo1") //es un elemento de html
elemento.addEventListener("click", function() {
//alert("click en titulo")
elemento.innerHTML=i
});

var i=0 ;
 elemento.addEventListener("mouseover",function(){
   i=i+1
   console.log(i)
   elemento.inert
 })

// primer ejemplo 
 var listas = document.getElementsByTagName("li") // hago rereferencia li , lista
 console.log(listas)

// segundo ejemplp
var menu=document.getElementById("menu");
var listas = menu.getElementsByTagName("li") // hago rereferencia li , lista
 console.log(listas)

 // 1 ejemplo con document.querySelector() en JavaScript:

 var lis= document.querySelectorAll("#menu li")
 console.log(lis)

 // 2 ejemplo con document.querySelector() en JavaScript:

 var lis= document.querySelectorAll("ul li")
 console.log(lis)

  // 3 ejemplo con document.querySelector() en JavaScript:

var list2= document.querySelectorAll("aside a ")
console.log(list2)


//4 ejemplo con pares e impares
//var listpar = document.querySelectorAll("aside li:nth-chil(odd)")
//console.log(listpar)




//5 crear elementos de html con java
function crearParrafo() {
  const nuevoParrafo = document.createElement('p');

  // Agregar contenido al párrafo
  nuevoParrafo.textContent = 'Este es un nuevo párrafo creado con JavaScript';

  // Agregar el párrafo al elemento body del documento
  document.body.appendChild(nuevoParrafo);
}

//Crear un boton con java
function addLink(){

  console.log("add link 1")
}
var elemeto= document.getElementById("addLink")
elemento.addEventListener("click" , function(){
  addLink
})
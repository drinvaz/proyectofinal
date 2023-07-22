let buton=document.getElementById("agregar")
let inputNombre=document.getElementById("nombre")
let inputIngredientes=document.getElementById("ingredientes")
let inputInstrucciones=document.getElementById("instrucciones")

//constructor de mi objeto Receta

class Receta {
    constructor(nombre, ingredientes,instrucciones) {
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.instrucciones=instrucciones 
    }
  }

  //Creando dos Recetas y agregandolas por defecto a mi Array de Recetas

  let uno=new Receta("Pastel de Zanahoria","* Zanahoras - Harina - Azucar", "Aqui van las instrucciones");
  let dos=new Receta("Pastel de Zanahoria 2 ","* Zanahoras - Harina - Azucar", "Aqui van las instrucciones")
  let listaRecetas=[];
  
  listaRecetas.push(uno);
  listaRecetas.push(dos);
  //En esta función agregaremos recetas
function agregarReceta() {
    
    const nombreReceta = document.getElementById("nombre").value;
    const ingredientesReceta = document.getElementById("ingredientes").value;
    const instruccionesReceta = document.getElementById("instrucciones").value;

    if (nombreReceta && ingredientesReceta && instruccionesReceta) {
      // selecionando la el primer elemento con el selector ".recetas"
        const recetasDiv = document.querySelector(".recetas");

        const nuevaRecetaDiv = document.createElement("div");
        nuevaRecetaDiv.classList.add("receta");

        const nombreElement = document.createElement("h2");
        nombreElement.textContent = nombreReceta;

        const ingredientesElement = document.createElement("p");
        ingredientesElement.textContent = "Ingredientes: " + ingredientesReceta;

        const instruccionesElement = document.createElement("p");
        instruccionesElement.textContent = "Instrucciones: " + instruccionesReceta;
        const botonCerrar=document.createElement("button")
        botonCerrar.textContent="X"
        //Creando un nuevo objeto receta de cada receta ingresada
        var receta =new Receta(nombreReceta,ingredientesReceta,instruccionesReceta)
        listaRecetas.push(receta);

        nuevaRecetaDiv.appendChild(nombreElement);
        nuevaRecetaDiv.appendChild(ingredientesElement);
        nuevaRecetaDiv.appendChild(instruccionesElement);
        nuevaRecetaDiv.appendChild(botonCerrar)

        recetasDiv.appendChild(nuevaRecetaDiv);
        
        function devolver (){
          return receta.nombreReceta;
        }
      
        botonCerrar.addEventListener("click", function () {
          nuevaRecetaDiv.remove();
          const index = listaRecetas.findIndex((receta) => receta.nombre === nombreReceta);;
        
          
            // Si se encuentra la receta, eliminarla del array listaRecetas
            listaRecetas.splice(index,1);
            guardarListaRecetas(); // Actualizar el localStorage después de eliminar la receta
          
        });
        // Limpiar los campos después de agregar la receta
        document.getElementById("nombre").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("instrucciones").value = "";
        
        // Aquí hago que luego de agregar la receta los input se vuelvan a hacer invisibles
        inputIngredientes.style.display="none"
inputInstrucciones.style.display="none"
inputNombre.style.display="none"
    }
}
function guardarListaRecetas() {
    const listaRecetasEnJSON = JSON.stringify(listaRecetas);
    localStorage.setItem("listaRecetas", listaRecetasEnJSON);
  }
  function mostrarListaRecetas(){

    for(let i in listaRecetas){
      // selecionando la el primer elemento con el selector ".recetas"
      const recetasDiv = document.querySelector(".recetas");
      // creando un nuevo div para agregar nuestras recetas
        const nuevaRecetaDiv = document.createElement("div");
        // agregandole la clase "receta"
        nuevaRecetaDiv.classList.add("receta");
      //agregando elementos de la receta
        const nombreElement = document.createElement("h2");
        nombreElement.textContent = listaRecetas[i].nombre;

        const ingredientesElement = document.createElement("p");
        ingredientesElement.textContent = "Ingredientes: " + listaRecetas[i].ingredientes;

        const instruccionesElement = document.createElement("p");
        instruccionesElement.textContent = "Instrucciones: " + listaRecetas[i].instrucciones;
        
        const botonCerrar=document.createElement("button")
        botonCerrar.textContent="X"
        // agregando caracteristicas y el boton eliminar a nuestra receta
        nuevaRecetaDiv.appendChild(nombreElement);
        nuevaRecetaDiv.appendChild(ingredientesElement);
        nuevaRecetaDiv.appendChild(instruccionesElement);
        nuevaRecetaDiv.appendChild(botonCerrar);
        // agregando nuestra receta al div recetas
       recetasDiv.appendChild(nuevaRecetaDiv);

       botonCerrar.addEventListener("click", function () {
        nuevaRecetaDiv.remove();
        const nombreRecetaEliminar = nombreElement.textContent;
        const index = listaRecetas.findIndex((receta) => receta.nombre === nombreRecetaEliminar);
        
          listaRecetas.splice(index, 1);
          guardarListaRecetas();
        
      });
        

    }
    
    
  }
  // aqui pregunta si hay elemtentos en la localstore bajo la clave "listaRecetas se guardan de regreso en listaRecetas"
window.addEventListener("load", function () {
  const listaRecetasEnJSONRecuperada = localStorage.getItem("listaRecetas");
  if (listaRecetasEnJSONRecuperada) {
    listaRecetas = JSON.parse(listaRecetasEnJSONRecuperada);
    // Luego, puedes reconstruir la interfaz con las recetas recuperadas si es necesario
  }
});

  window.addEventListener("beforeunload", guardarListaRecetas);
 // muestra los inputs al querer agregar otra receta  
buton.addEventListener("click",function(){
inputIngredientes.style.display="block"
inputInstrucciones.style.display="block"
inputNombre.style.display="block"
})

//agregando funcion de agregarReceta al botón
buton.addEventListener("click",agregarReceta)


// Aquí se cargan las recetas contenidas en el arreglo de recetas
window.addEventListener("load",mostrarListaRecetas)

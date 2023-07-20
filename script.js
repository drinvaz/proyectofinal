let buton=document.getElementById("agregar")
let inputNombre=document.getElementById("nombre")
let inputIngredientes=document.getElementById("ingredientes")
let inputInstrucciones=document.getElementById("instrucciones")
class Receta {
    constructor(nombre, ingredientes,instrucciones) {
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.instrucciones=instrucciones
    }
  }
  let listaRecetas=[];
function agregarReceta() {
    
    const nombreReceta = document.getElementById("nombre").value;
    const ingredientesReceta = document.getElementById("ingredientes").value;
    const instruccionesReceta = document.getElementById("instrucciones").value;

    if (nombreReceta && ingredientesReceta && instruccionesReceta) {
        const recetasDiv = document.querySelector(".recetas");

        const nuevaRecetaDiv = document.createElement("div");
        nuevaRecetaDiv.classList.add("receta");

        const nombreElement = document.createElement("h2");
        nombreElement.textContent = nombreReceta;

        const ingredientesElement = document.createElement("p");
        ingredientesElement.textContent = "Ingredientes: " + ingredientesReceta;

        const instruccionesElement = document.createElement("p");
        instruccionesElement.textContent = "Instrucciones: " + instruccionesReceta;
        let persona =new Receta(nombreReceta,ingredientesReceta,instruccionesReceta)
        listaRecetas.push(persona);
        nuevaRecetaDiv.appendChild(nombreElement);
        nuevaRecetaDiv.appendChild(ingredientesElement);
        nuevaRecetaDiv.appendChild(instruccionesElement);

        recetasDiv.appendChild(nuevaRecetaDiv);
        console.log(listaRecetas)
        // Limpiar los campos después de agregar la receta
        document.getElementById("nombre").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("instrucciones").value = "";
        inputIngredientes.style.display="none"
inputInstrucciones.style.display="none"
inputNombre.style.display="none"
    }
}
buton.addEventListener("click",function(){
inputIngredientes.style.display="block"
inputInstrucciones.style.display="block"
inputNombre.style.display="block"
})
buton.addEventListener("click",agregarReceta)

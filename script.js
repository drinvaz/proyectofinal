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
  let uno=new Receta("Pastel de Zanahoria","* Zanahoras - Harina - Azucar", "Aqui van las instrucciones");
  let dos=new Receta("Pastel de Zanahoria 2 ","* Zanahoras - Harina - Azucar", "Aqui van las instrucciones")
  let listaRecetas=[];
  listaRecetas.push(uno);
  listaRecetas.push(dos);
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
        let receta =new Receta(nombreReceta,ingredientesReceta,instruccionesReceta)
        listaRecetas.push(receta);
        nuevaRecetaDiv.appendChild(nombreElement);
        nuevaRecetaDiv.appendChild(ingredientesElement);
        nuevaRecetaDiv.appendChild(instruccionesElement);

        recetasDiv.appendChild(nuevaRecetaDiv);
       
        // Limpiar los campos después de agregar la receta
        document.getElementById("nombre").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("instrucciones").value = "";
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
      const recetasDiv = document.querySelector(".recetas");

        const nuevaRecetaDiv = document.createElement("div");
        nuevaRecetaDiv.classList.add("receta");

        const nombreElement = document.createElement("h2");
        nombreElement.textContent = listaRecetas[i].nombre;

        const ingredientesElement = document.createElement("p");
        ingredientesElement.textContent = "Ingredientes: " + listaRecetas[i].ingredientes;

        const instruccionesElement = document.createElement("p");
        instruccionesElement.textContent = "Instrucciones: " + listaRecetas[i].instrucciones;
        nuevaRecetaDiv.appendChild(nombreElement);
        nuevaRecetaDiv.appendChild(ingredientesElement);
        nuevaRecetaDiv.appendChild(instruccionesElement);

        recetasDiv.appendChild(nuevaRecetaDiv);
    }
  }
  window.addEventListener("beforeunload", guardarListaRecetas);
  buton.addEventListener("click", function () {
    guardarListaRecetas();
  });

  
buton.addEventListener("click",function(){
inputIngredientes.style.display="block"
inputInstrucciones.style.display="block"
inputNombre.style.display="block"
})
buton.addEventListener("click",agregarReceta)

window.addEventListener("load", function () {
  const listaRecetasEnJSONRecuperada = localStorage.getItem("listaRecetas");
  if (listaRecetasEnJSONRecuperada) {
    listaRecetas = JSON.parse(listaRecetasEnJSONRecuperada);
    // Luego, puedes reconstruir la interfaz con las recetas recuperadas si es necesario
  }
  console.log(listaRecetas);
});
window.addEventListener("load",mostrarListaRecetas)

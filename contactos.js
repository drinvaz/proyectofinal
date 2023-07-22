let boton=document.getElementById("btn-contactos")
function toggleContactos() {
    var listaContactos = document.getElementById("lista-contactos");
    if (listaContactos.classList.contains("oculto")) {
        listaContactos.classList.remove("oculto");
    } else {
        listaContactos.classList.add("oculto");
    }
}
boton.addEventListener("click",toggleContactos)
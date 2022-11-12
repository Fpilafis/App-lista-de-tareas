//variables

let listaRelax = document.getElementById("lista-relax");
let listaPronto = document.getElementById("lista-pronto");
let listaUrgente = document.getElementById("lista-urgente")
let tareaInput = document.getElementById("tareaInput");
let btnNuevaTarea = document.getElementById("btn-agregar");
let btnNuevaTareaPronto = document.getElementById("btn-agregar-pronto");
let btnNuevaTareaUrgente = document.getElementById("btn-agregar-urgente");

//Funciones
let agregarTarea = function(){
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("a")
    let contenido = document.createTextNode(tarea)
    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida")
        //tareaInput.className = "error"
        return false
    }
    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href y class
    enlace.setAttribute("href", "#");
    enlace.setAttribute("class", "lista-relax list-group-item list-group-item-action");
    // Agregamos el enlace a la nuevaTarea
    nuevaTarea.appendChild(enlace)
    // Le establecemos el atributo class
    nuevaTarea.setAttribute("class", "list-group-item")
    // Agregamos la nuevaTarea (li) a la lista
    listaRelax.appendChild(nuevaTarea)

    tareaInput.value = "";

    for (let i = 0; i <= listaRelax.children.length -1; i++) {
        listaRelax.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
        });
        
    }
};

let agregarTareaPronto = function(){
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("a")
    let contenido = document.createTextNode(tarea)
    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida")
        //tareaInput.className = "error"
        return false
    }
    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href y class
    enlace.setAttribute("href", "#");
    enlace.setAttribute("class", "lista-pronto list-group-item list-group-item-action");
    // Agregamos el enlace a la nuevaTarea
    nuevaTarea.appendChild(enlace)
    // Le establecemos el atributo class
    nuevaTarea.setAttribute("class", "list-group-item")
    // Agregamos la nuevaTarea (li) a la lista
    listaPronto.appendChild(nuevaTarea)

    tareaInput.value = "";

    for (let i = 0; i <= listaPronto.children.length -1; i++) {
        listaPronto.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
        });
        
    }
};

let agregarTareaUrgente = function(){
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("a")
    let contenido = document.createTextNode(tarea)
    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida")
        //tareaInput.className = "error"
        return false
    }
    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href y class
    enlace.setAttribute("href", "#");
    enlace.setAttribute("class", "lista-urgente list-group-item list-group-item-action");
    // Agregamos el enlace a la nuevaTarea
    nuevaTarea.appendChild(enlace)
    // Le establecemos el atributo class
    nuevaTarea.setAttribute("class", "list-group-item")
    // Agregamos la nuevaTarea (li) a la lista
    listaUrgente.appendChild(nuevaTarea)

    tareaInput.value = "";

    for (let i = 0; i <= listaUrgente.children.length -1; i++) {
        listaUrgente.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
        });
        
    }
};



let comprobarInput = function(){
    tareaInput.setAttribute("placeholder", "Agrega tu tareas")
};

let eliminarTarea = function(){
    this.parentNode.removeChild(this)
};


//Eventos

//Agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);
btnNuevaTareaPronto.addEventListener("click", agregarTareaPronto);
btnNuevaTareaUrgente.addEventListener("click", agregarTareaUrgente);


//Comprobar input
tareaInput.addEventListener("click", comprobarInput);

//Borrando elementos de la lista
for (let i = 0; i <= listaRelax.children.length; i++) {
    listaRelax.children[i].addEventListener("click", eliminarTarea);
}
for (let i = 0; i <= listaPronto.children.length; i++) {
    listaPronto.children[i].addEventListener("click", eliminarTarea);
}
for (let i = 0; i <= listaUrgente.children.length; i++) {
    listaUrgente.children[i].addEventListener("click", eliminarTarea);
}
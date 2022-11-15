

//variables
const listaRelax = document.getElementById("lista-relax");
const listaPronto = document.getElementById("lista-pronto");
const listaUrgente = document.getElementById("lista-urgente")
const tareaInput = document.getElementById("tareaInput");
const btnNuevaTarea = document.getElementById("btn-agregar");
const btnNuevaTareaPronto = document.getElementById("btn-agregar-pronto");
const btnNuevaTareaUrgente = document.getElementById("btn-agregar-urgente");
const empty = document.getElementById("empty")
const items = document.querySelectorAll("li")   


/*if(localStorage.getItem("listaRelax")){
    listaRelax = JSON.parse(localStorage.getItem("listaRelax"))
}*/



//Funciones
/*let agregarTarea = function(){
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
        })
    }

    //localStorage.setItem("listaRelax", JSON.stringify(listaRelax))
};*/

/*let agregarTareaPronto = function(){
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
};*/

/*let agregarTareaUrgente = function(){
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
};*/



/*let comprobarInput = () => {
    tareaInput.setAttribute("placeholder", "Agrega tu tareas");
};*/

/*let eliminarTarea = () => {
    this.parentNode.removeChild(this)
};*/

//Eventos
//Agregar tarea
btnNuevaTarea.addEventListener("click", (e) => {
    let tarea = tareaInput.value;
    let nuevaTarea = document.createElement("li");
    let enlace = document.createElement("a")
    let contenido = document.createTextNode(tarea)
    
    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida")
        return false
    }
    
    // Agregamos el contenido(Input) al enlace("a")
    enlace.appendChild(contenido);
    // Le establecemos un atributo href y class a enlace("a")
    enlace.setAttribute("href", "#");
    enlace.setAttribute("class", "lista-relax list-group-item list-group-item-action");
    // Agregamos el enlace("a") a la nuevaTarea("li")
    nuevaTarea.appendChild(enlace)
    // Le establecemos el atributo class a nuevaTarea("li")
    nuevaTarea.setAttribute("class", "list-group-item")
    // Agregamos la nuevaTarea(li) a la lista("ul")
    listaRelax.appendChild(nuevaTarea)
    
    //   Creamos un boton, agregamos la clase y type, lo agregamos al enlace("a") y armamos el evento
    
    /*let btnEdit = document.createElement("button")
    btnEdit.setAttribute("class", "boton btn-danger" )
    btnEdit.setAttribute("type", "button")
    btnEdit.innerHTML = "-"
    enlace.appendChild(btnEdit)
    btnEdit.addEventListener("click", (e) => {
        nuevaTarea.parentNode.removeChild(nuevaTarea)
        if(items.length === 0){empty.style.display = "block"}
    })*/



    tareaInput.value = "";

    empty.style.display = "none"



    //Borrando elementos de la lista
    for (let i = 0; i <= listaRelax.children.length -1; i++) {
        listaRelax.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
            if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
        })
    }
        //empty.textContent= ""
});

btnNuevaTareaPronto.addEventListener("click", (e) => {
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

    //      Creamos un boton, agregamos la clase y type, lo agregamos al enlace("a") y armamos el evento
    
    /*let btnEdit = document.createElement("button")
    btnEdit.setAttribute("class", "boton btn-danger" )
    btnEdit.setAttribute("type", "button")
    btnEdit.innerHTML = "-"
    enlace.appendChild(btnEdit)
    btnEdit.addEventListener("click", (e) => {
        nuevaTarea.parentNode.removeChild(nuevaTarea)
        if(items.length === 0){empty.style.display = "block"}
    })*/


    tareaInput.value = "";

    empty.style.display = "none"


    //Borrar elementos de la lista
    for (let i = 0; i <= listaPronto.children.length -1; i++) {
        listaPronto.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
        });
        if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
        
    }
    /*empty.textContent= ""*/
});

btnNuevaTareaUrgente.addEventListener("click", (e) => {
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
    
    //      Creamos un boton, agregamos la clase y type, lo agregamos al enlace("a") y armamos el evento
    
    /*let btnEdit = document.createElement("button")
    btnEdit.setAttribute("class", "boton btn-danger" )
    btnEdit.setAttribute("type", "button")
    btnEdit.innerHTML = "-"
    enlace.appendChild(btnEdit)
    btnEdit.addEventListener("click", (e) => {
        nuevaTarea.parentNode.removeChild(nuevaTarea)
        if(items.length === 0){empty.style.display = "block"}
    })*/


    tareaInput.value = "";

    empty.style.display = "none"

    //Borrar elementos de la lista
    for (let i = 0; i <= listaUrgente.children.length -1; i++) {
        listaUrgente.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this)
        });
        if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
    }
    /*empty.textContent= ""*/
});


//Comprobar input
tareaInput.addEventListener("click", (e) => {
    tareaInput.setAttribute("placeholder", "Agrega tu tareas");
});

//Borrando elementos de la lista

for (let i = 0; i <= listaRelax.children.length -1; i++) {
    listaRelax.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this)
    })
    if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
}

for (let i = 0; i <= listaUrgente.children.length -1; i++) {
    listaUrgente.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this)
    });
    if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
}

for (let i = 0; i <= listaPronto.children.length -1; i++) {
    listaPronto.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this)
    });
    if(items.length === 0){empty.textContent= "No tienes tareas pendientes"}
}

//VARIABLES
const botones = document.getElementById("botones")
const formulario = document.getElementById('formulario')
const placeholder = document.getElementById("placeholder")
const listasAll = document.getElementById("listas")
const listaTareas = document.getElementById('lista-tareas')
const listaTareasPronto = document.getElementById('lista-tareas-pronto')
const listaTareasUrgente = document.getElementById('lista-tareas-urgente')
const template = document.getElementById('template').content
const templateTwo = document.getElementById('templatetwo').content
const templatethree = document.getElementById('templatethree').content
const fragment = document.createDocumentFragment()
let tareas = {}
let tareasPronto = {}
let tareasUrgente = {}


//////////////////////////////////////////////////////////////---------------------------//////////////////////////////////////////////////////////


//LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintarTareas()
    if (localStorage.getItem('tareass')) {
        tareasPronto = JSON.parse(localStorage.getItem('tareass'))
    }
    pintarTareasPronto()
    console.log("donde estoy?")
    if (localStorage.getItem('tareasss')) {
        tareasUrgente = JSON.parse(localStorage.getItem('tareasss'))

    }
    pintarTareasUrgente()
});

//EVENTO DE BOTONES(BORRADO O TACHADO)
listas.addEventListener('click', (e) => {
    btnAccion(e) 
})

botones.addEventListener('click', e => {
    setTareaRelax(e)
})

//FUNCIONES
const setTareaRelax = e => {
    const texto = placeholder.value
    
    texto.length > 120 ? (
        placeholder.setAttribute("placeholder", "excede 120 caracteres"),
        formulario.reset(),
        alert("Maximo de 120 caracteres"))
    : texto.trim() === '' ? (
        placeholder.setAttribute("placeholder", "Agrega una tarea valida"))
    : e.target.classList.contains('btn-urgente') ? (
        tareaUrgente = {
            id: Date.now(),
            texto: texto,
            estado: false
        },
        placeholder.setAttribute("placeholder", "Ingrese tarea"),
        tareasUrgente[tareaUrgente.id] = tareaUrgente,
        pintarTareasUrgente(),
        formulario.reset()
        )
    : e.target.classList.contains('btn-pronto') ? (
        tareaPronto = {
            id: Date.now(),
            texto: texto,
            estado: false
        },
        placeholder.setAttribute("placeholder", "Ingrese tarea"),
        tareasPronto[tareaPronto.id] = tareaPronto,
        pintarTareasPronto(),
        formulario.reset()
        )
    : e.target.classList.contains('btn-relax') ? (
        tarea = {
            id: Date.now(),
            texto: texto,
            estado: false
        },
        placeholder.setAttribute("placeholder", "Ingrese tarea"),
        tareas[tarea.id] = tarea,
        pintarTareas(),
        formulario.reset()
        ) : console.log("a")
    }


const pintarTareas = () => {
    
    localStorage.setItem('tareas', JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTareas.innerHTML = `
        <div class="alert alert-primary text-center">
        <strong><p class="h8"><u>Relax</u></p>Sin tareas pendientes</strong>
        </div>
        `
        return
    }
    
    listaTareas.innerHTML = ''

    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        if (tarea.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('.alert').classList.replace('alert-primary', 'alert-dark')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })

    listaTareas.appendChild(fragment)
}

const btnAccion = e => {
    if (e.target.classList.contains("lista-tareas")){
        if (e.target.classList.contains('fa-check-circle')) {
            tareas[e.target.dataset.id].estado = true
            pintarTareas()
        }
        if (e.target.classList.contains('fa-minus-circle')) {
            delete tareas[e.target.dataset.id]
            pintarTareas()
        }
        if (e.target.classList.contains('fa-undo-alt')) {
            tareas[e.target.dataset.id].estado = false
            pintarTareas()
        }
        e.stopPropagation()
    }
    else if(e.target.classList.contains("lista-tareas-pronto")){
        if (e.target.classList.contains('fa-check-circle')) {
            tareasPronto[e.target.dataset.id].estado = true
            pintarTareasPronto()
        }
        if (e.target.classList.contains('fa-minus-circle')) {
            delete tareasPronto[e.target.dataset.id]
            pintarTareasPronto()
        }
        if (e.target.classList.contains('fa-undo-alt')) {
            tareasPronto[e.target.dataset.id].estado = false
            pintarTareasPronto()
        }
        e.stopPropagation()
    }
    else if(e.target.classList.contains("lista-tareas-urgente")){
        if (e.target.classList.contains('fa-check-circle')) {
            tareasUrgente[e.target.dataset.id].estado = true
            pintarTareasUrgente()
        }
        if (e.target.classList.contains('fa-minus-circle')) {
            delete tareasUrgente[e.target.dataset.id]
            pintarTareasUrgente()
        }
        if (e.target.classList.contains('fa-undo-alt')) {
            tareasUrgente[e.target.dataset.id].estado = false
            pintarTareasUrgente()
        }
        e.stopPropagation()
    }
}

//////////////////////////////////////////////////////////////---------------------------//////////////////////////////////////////////////////////

//LISTA PRONTO

const pintarTareasPronto = () => {
    
    localStorage.setItem('tareass', JSON.stringify(tareasPronto))

    if (Object.values(tareasPronto).length === 0) {
        listaTareasPronto.innerHTML = `
        <div class="alert alert-success text-center">
        <strong><p class="h8"><u>Pronto</u></p>Sin tareas pendientes</strong>
        </div>
        `
        return
    }
    
    listaTareasPronto.innerHTML = ''

    Object.values(tareasPronto).forEach(tareaPronto => {
        const clone = templateTwo.cloneNode(true)
        clone.querySelector('p').textContent = tareaPronto.texto
        if (tareaPronto.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('.alert').classList.replace('alert-success', 'alert-dark')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fas')[0].dataset.id = tareaPronto.id
        clone.querySelectorAll('.fas')[1].dataset.id = tareaPronto.id
        fragment.appendChild(clone)
    })

    listaTareasPronto.appendChild(fragment)
}

//////////////////////////////////////////////////////////////---------------------------//////////////////////////////////////////////////////////

// LISTA URGENTE

const pintarTareasUrgente = () => {

    localStorage.setItem('tareasss', JSON.stringify(tareasUrgente))

    if (Object.values(tareasUrgente).length === 0) {
        listaTareasUrgente.innerHTML = `
        <div class="alert alert-danger text-center">
        <strong><p class="h8"><u>Urgente</u></p>Sin tareas pendientes</strong>
        </div>
        `
        return
    }
    
    listaTareasUrgente.innerHTML = ''

    Object.values(tareasUrgente).forEach(tareaUrgente => {
        const clone = templatethree.cloneNode(true)
        clone.querySelector('p').textContent = tareaUrgente.texto
        if (tareaUrgente.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')
            clone.querySelector('.alert').classList.replace('alert-danger', 'alert-dark')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fas')[0].dataset.id = tareaUrgente.id
        clone.querySelectorAll('.fas')[1].dataset.id = tareaUrgente.id
        fragment.appendChild(clone)
    })
    
    listaTareasUrgente.appendChild(fragment)
}


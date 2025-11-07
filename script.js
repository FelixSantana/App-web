const contenedor = document.querySelector(".contenedor");
const header_ul = document.querySelector(".header_ul");
const btnAgregarOpcion = document.getElementById("btnAgregarOpcion");
const btnActualizarOpcion = document.getElementById("btnActualizarOpcion");
const btnEliminarOpcion = document.getElementById("btnEliminarOpcion");

let datos = {
    "menu": [
        {
            "id": 1,
            "nombre": "Inicio",
            "enlace": "/inicio"
        },
        {
            "id": 2,
            "nombre": "Sobre Nosotros",
            "enlace": "/sobre-nosotros"
        },
        {
            "id": 3,
            "nombre": "Servicios",
            "enlace": "/servicios"
        },
        {
            "id": 4,
            "nombre": "Contacto",
            "enlace": "/contacto"
        },
    ]
}
// Codigo para agregar una funcion
const agregarOpcion = (datos) => {
    header_ul.innerHTML += `<li class="nav-item" id="${datos.nombre}"><a href="${datos.enlace}" class="nav-link" aria-current="page">${datos.nombre}</a></li>`;
}
//Agregando al menu las opciones por defecto
datos.menu.forEach(item => {
    agregarOpcion(item);
});

btnAgregarOpcion.addEventListener("click", () => {
    document.getElementById("btnAgregarNuevaOpcion").addEventListener("click", () => {
        const nuevaOpcionId = document.getElementById("nuevaOpcionId").value;
        const nuevaOpcionNombre = document.getElementById("nuevaOpcionNombre").value;
        const nuevaOpcionEnlace = document.getElementById("nuevaOpcionEnlace").value;
        if (nuevaOpcionId == " " || nuevaOpcionNombre == " " || nuevaOpcionEnlace == "") {
            alert("Debe llenar todos los campos");
        }
        else {
            let nuevaOpcionJson = {
                "id": parseInt(nuevaOpcionId),
                "nombre": nuevaOpcionNombre,
                "enlace": nuevaOpcionEnlace
            }
            datos.menu.push(nuevaOpcionJson);
            agregarOpcion(nuevaOpcionJson);
            alert("Opcion agregada correctamente");
        }
    })
}, { once: true })

//Codigo para actualizar una opcion
btnActualizarOpcion.addEventListener("click", () => {
    const modalActualizarOpcion = document.querySelector(".modalActualizarOpcion");
    datos.menu.forEach(opcion => {
        modalActualizarOpcion.innerHTML += `<input type="checkbox" id="${opcion.nombre}"><label for="${opcion.nombre}"> ${opcion.nombre}</label><br>`
    })
    const btnSiguinte = document.getElementById("btnSiguiente");
    btnSiguinte.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const haySeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (haySeleccionado > 1) {
            alert("Solo puede editar una opcion a la vez");
        }
        else if (haySeleccionado == 1) {
            btnSiguinte.setAttribute("data-bs-target", "#exampleModalToggle2");
            btnSiguinte.setAttribute("data-bs-toggle", "modal");
            const opcionSelecionada = Array.from(checkboxes).find(checkbox => checkbox.checked);
            datos.menu.forEach(opcion => {
                if (opcion.nombre == opcionSelecionada.getAttribute("id")) {
                    document.getElementById("actualizarOpcionId").value = opcion.id;
                    document.getElementById("actualizarOpcionNombre").value = opcion.nombre;
                    document.getElementById("actualizarOpcionEnlace").value = opcion.enlace;
                    document.getElementById("btnGuardarCambios").addEventListener("click", () => {
                        let id= document.getElementById("actualizarOpcionId").value;
                        let nombre=document.getElementById("actualizarOpcionNombre").value;
                        let enlace=document.getElementById("actualizarOpcionEnlace").value;
                        if(id=="" || nombre=="" ||enlace==""){
                            alert("Debe llenar todos los campos");
                        }
                        else{
                           datos.menu.forEach(item=>{
                            if(item.nombre==opcionSelecionada.getAttribute("id")){
                                item.id = id;
                                item.nombre = nombre;
                                item.enlace = enlace;
                                document.querySelectorAll(".nav-item").forEach(elemento=>{
                                    header_ul.removeChild(elemento);
                                })
                                datos.menu.forEach(item => {
                                    agregarOpcion(item);
                                })
                                alert("Opcion actualizada correctamente");
                            }
                           })
                        }
                    });
                }
            })
        }
        else {
            alert("Ninguna opcion marcada");
        }
    },{once:true})
}, { once: true })

//Codigo para eliminar una opcion
btnEliminarOpcion.addEventListener("click",()=>{
    const eliminarOpcionModal = document.querySelector(".eliminarOpcionModal");
    datos.menu.forEach(opcion => {
        eliminarOpcionModal.innerHTML+= `<input type="checkbox" id="${opcion.nombre}"><label for="${opcion.nombre}"> ${opcion.nombre}</label><br>`
    });
    document.getElementById("btnEliminar").addEventListener("click",()=>{
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox=>{
            if(checkbox.checked){
                document.querySelectorAll(".nav-item").forEach(elemento=>{
                    if(elemento.textContent==checkbox.getAttribute("id")){
                        header_ul.removeChild(elemento);
                        datos.menu = datos.menu.filter(opcion => opcion.nombre !== elemento.textContent);
                        alert("Opcion eliminada correctamente");
                    }
                })
            }         
        })
    })
},{once:true})
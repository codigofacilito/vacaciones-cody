console.log("Script initing...")

import { info_fotos } from './info-fotos.js'

const modal = document.getElementsByClassName('modal')[0]
const fotos_galeria = document.getElementsByClassName('fotos')[0]


// CARGAMOS LAS FOTOS QUE TENGAMOS EN EL ARCHIVO info-fotos.js
info_fotos.forEach( (obj_foto) => {
    fotos_galeria.innerHTML += `<img class="fotos__tarjeta_foto" id="${obj_foto.id}" draggable="false" src="${obj_foto.url}" alt="${obj_foto.descripcion}">`
} )



// AGREGAMOS LA FUNCION renderizarForo A CADA FOTO AGREGADA COMO EVENTO CLICK
const fotos = [ ...document.getElementsByClassName('fotos__tarjeta_foto') ]
fotos.map((foto) => foto.addEventListener('click', (e) => renderizarFoto(e.target.id)) )



// FUNCION PARA RENDERIZAR EL MODAL CON LA IMAGEN DEL id
const renderizarFoto = async (id) => {
    console.log("renderizando foto #", await getFotoWithId(id))
    const obj_foto = await getFotoWithId(id)

    const imagen = modal.getElementsByTagName('img')[0]
    const titulo = modal.getElementsByClassName('modal__componente-info-titulo')[0]
    const descripcion = modal.getElementsByClassName('modal__componente-info-descripcion')[0]
    const ubicacion = modal.getElementsByClassName('modal__componente-info-ubicacion')[0]
    const loved = document.getElementById('item-loved')

    // Insertamos el valor del id del obeto foto al item LOVED, por si presionan "ME ENCANTA"
    loved.setAttribute("id_foto", obj_foto.id)

    // Obtenemos el valor de LOVED desde LocalStorage (si existe)
    let isLoved = JSON.parse(localStorage.getItem(id))
    console.log("Is loved? :: ", isLoved)
    console.log("tipe:: ", typeof(isLoved))



    imagen.src = obj_foto.url
    titulo.textContent = obj_foto.titulo
    descripcion.textContent = obj_foto.descripcion
    ubicacion.textContent = obj_foto.ubicacion
    loved.checked = isLoved? isLoved : false

    modal.style.display = ""
}


// FUNCION PARA OBTENER EL OBJETO DE LA INFORMACION DE LA FOTO CON EL id QUE SE NOS PASE COMO PARAMETRO
const getFotoWithId = (id) => {
    return new Promise(
        (resolve, reject) => {
            info_fotos.forEach( 
                (obj_foto) => {
                    if (obj_foto.id === id) {
                        resolve(obj_foto)
                    }
                }
            )
            reject(new Error("No se encontro la foto con el ID: ", id))
        }
    )
}




// AGREGAMOS LA FUNCION loveding AL ICONO DE CORAZON
const itemLoved = document.getElementById('item-loved')
itemLoved.addEventListener('click', (e) => {
    console.log("Corazon fue presionado, item:: ", e.target)
    console.log("ID:: ", e.target.getAttribute("id_foto"))

    const idFoto = e.target.getAttribute("id_foto")
    const isLoved = e.target.checked

    saveLovedOf(idFoto, isLoved)

})


// FUNCION PARA GUARDAR EN LocalStorage EL VALOR DE UN "Me encanta" DE UNA FOTO DADO SU id
const saveLovedOf = (id, loved) => {
    localStorage.setItem(id, loved)
} 









// CLICK FUERA DEL AREA DEL MODAL (Oculta el modal)
modal.style.display = "none"

modal.addEventListener('click', (e) => {
    [...e.target.classList].forEach((clase) => {

        if (clase === "modal") {
            modal.style.display = "none"
        }

    })
})
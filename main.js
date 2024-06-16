let botonEnviar = document.getElementById ("botonEnviar")
botonEnviar.addEventListener("click",archivarDatos)
function archivarDatos(){
    const datos = document.getElementById ("miFormulario")
    const datosDeFormulario ={
        nombre: datos.nombre.value,
        edad : datos.edad.value,
        email : datos.mail.value,
        altura : datos.altura.value,
        peso: datos.peso.value,
    }
    const valoresJson = JSON.stringify(datosDeFormulario)
    localStorage.setItem("clave1",valoresJson)
} 

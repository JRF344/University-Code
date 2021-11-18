'use strict';

const cuerpoTabla = document.querySelector('#tabla-usuarios tbody');
let lista = obtenerUsuarios();

const mostrarTabla = () => {
    lista.forEach(objUsuario => {
        let fila = cuerpoTabla.insertRow();

        //Foto
        //fila.insertCell().innerHTML = '';
        fila.insertCell().innerHTML = objUsuario.nombre;
        fila.insertCell().innerHTML = objUsuario.correo;
        fila.insertCell().innerHTML = objUsuario.nacimiento;
        fila.insertCell().innerHTML = objUsuario.edad;
        let celdaTelefonos = fila.insertCell();
        //Crear un parrafo para cada telefono
        objUsuario.telefono.forEach(objTelefono => {
            let parrafoTelefono = document.createElement('p');
            parrafoTelefono.innerHTML = objTelefono.numero;

            //Agrega el parrafo con el telefono al hijo dela celda
            celdaTelefonos.appendChild(parrafoTelefono);
        });
        fila.insertCell().innerHTML = obtenerNombreRol(objUsuario.rol);
        fila.insertCell().innerHTML = obtenerNombreStat(objUsuario.estado);
    });
}


mostrarTabla();
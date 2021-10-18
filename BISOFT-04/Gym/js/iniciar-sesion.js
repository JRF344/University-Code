'use strict'

const botonIngresar = document.querySelector('#btn-ingresar');
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasena = document.querySelector('#txt-passw');

const validar = ()=> {
    let error = false;

    //validar correo
    if (inputCorreo.value == '') {
        error = true;
        document.querySelector(".div-correo").classList.add("input-error");
    } else {
        document.querySelector(".div-correo").classList.remove("input-error");
    }

    //validar contraseña
    if (inputContrasena.value == '') {
        error = true;
        document.querySelector(".div-contrasena").classList.add("input-error");
    } else {
        document.querySelector(".div-contrasena").classList.remove("input-error");
    }

    //validar si existe error
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesion',
            'text': 'Por favor llene los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }else{
        Swal.fire({
            'icon': 'success',
            'title': 'Ha iniciado sesion con el correo:',
            'text': inputCorreo.value,
            'confirmButtonText': 'Entendido'
        }).then(()=>{
            window.location.href = 'dashboard.html';    
        });
    }
}

botonIngresar.addEventListener('click', validar);


//evento click con funcion anonima
/*
botonIngresar.addEventListener('click', ()=> {
    console.log('test');
}); 
*/
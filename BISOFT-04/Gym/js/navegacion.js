'use strict';

let usuarioConectado = localStorage.getItem('usuarioConectado');

const mostrarOpciones = () => {
    let itemsMenu = document.querySelectorAll('.header-principal nav a');

    switch (usuarioConectado) {
        case 3:
            itemsMenu[1].classList.add('ocultar');
            itemsMenu[2].classList.add('ocultar');
            break;
    
        default:
            break;
    }
}

const verificarUsuarioConectado = () => {
    if (!usuarioConectado) {
        mostrarOpciones();
    } else {
        Swal.fire({
            'icon': 'info',
            'title': 'Debe realizar el inicio de sesion'
        }).then(() => {
            window.location.href = 'index.html'
        });
    }
}

console.log(usuarioConectado);
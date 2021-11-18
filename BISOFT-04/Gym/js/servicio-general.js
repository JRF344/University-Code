    'use strict';
let listaUsuarios = [
    {
        'nombre': 'Pablo Monestel',
        'correo': 'user@example.com',
        'telefono': '5555-1234',
        'contrasena': 'abc123',
        'nacimiento': '1987-10-12',
        'edad': '34',
        'foto': '',
        'rol': 1,
        'estado': 1
    },
    {
        'nombre': 'John Doe',
        'correo': 'user2@example.com',
        'telefono': '5555-1235',
        'contrasena': 'abc123',
        'nacimiento': '1987-10-12',
        'edad': '55',
        'foto': '',
        'rol': 2,
        'estado': 3
    },
    {
        'nombre': 'UNK',
        'correo': 'use3@example.com',
        'telefono': '5555-1236',
        'contrasena': 'abc123',
        'nacimiento': '1987-10-12',
        'edad': '66',
        'foto': '',
        'rol': 3,
        'estado': 4
    }
];

const cerrarSesion = () => {
    localStorage.clear();
};

// More traditional verion of cycle to show info
/* for (let i = 0; i < listaUsuarios.length; i++) {
    console.log(`correo: ${listaUsuarios[i].correo} nombre: ${listaUsuarios[i].nombre}`)   
} */

// Crear una funcion que se llame obtenerNombreRol que reciba el numero del rol y devuelva el nombre del mismo
// Se debe imprimir el nombre del rol para cada usuario

const obtenerNombreRol = (idRol) => {
    let nombreRol = '';

    switch (idRol) {
        case 1:
            nombreRol = 'Administrador';
            break;
        case 2:
            nombreRol = 'Instroctor';
            break;
        case 3:
            nombreRol = 'Cliente';
            break;
        default:
            break;
    }
    return nombreRol;
}

// Crear una funcion llamada obtenerNombreEstado que reciba el numero del estado y retorne el nombre
// Debe imprimirse para cada usuario

const obtenerNombreStat = (estado) => {

    switch (estado) {
        case 1:
            nombreStat = 'Activo';
            break;
        case 2:
            nombreStat = 'Inactivo';
            cerrarSesion();
            break;
        case 3:
            nombreStat = 'Pendiente de aprovacion';
            cerrarSesion();
            break;
        case 4:
            nombreStat = 'Pendiente de cambio de contraseña';
            cerrarSesion();
            break;
        default:
            cerrarSesion();
            break;
    }
}

const obtenerUsuarios = () => listaUsuarios;

const validarEstado = (estado, rol) => {
    switch (estado) {
        case 1:
            window.location.href = 'dashboard.html';
            break;
        case 2:
            Swal.fire({
                'icon': 'info',
                'title': 'No se ha podido iniciar sesion',
                'text': 'Contacte al administrador'
            });
            cerrarSesion();
            break;
        case 3:
            Swal.fire({
                'icon': 'info',
                'title': 'No se ha podido iniciar sesion',
                'text': 'Su usuario se encuentra pendiente de aprobacion'
            });
            cerrarSesion();
            break;
        case 4:
            Swal.fire({
                'icon': 'info',
                'title': 'No se ha podido iniciar sesion',
                'text': 'Debe realizar el cambio de contrasena'
            }).then(() => {
                window.location.href = 'cambiar-contrasena.html'
            });
            cerrarSesion();
            break;
    }
}

const validarCredenciales = (correo, contrasena) => {
    let ingresar = false;
    let estado = 0;
    let rol = 0;
    listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == correo && objUsuario.contrasena == contrasena) {
            rol = objUsuario.rol;
            estado = objUsuario.estado;
            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
            ingresar = true;
        }
    });
    if (ingresar == false) {
        Swal.fire({
            'icon': 'error',
            'title': 'No ha podido iniciar sesion',
            'text': 'Usuario o contrasena incorrectos'
        })
    } else {
        validarEstado(estado, rol)
    }
};

/* listaUsuarios.forEach(objUsuario => {
    console.log(objUsuario.nombre);
    console.log(obtenerNombreRol(objUsuario.rol));
    console.log(obtenerNombreStat(objUsuario.estado));
}); */
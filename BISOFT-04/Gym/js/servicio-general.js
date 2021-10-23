'use strict';
let listaUsuarios = [
    {
        'nombre': 'Pablo Monestel',
        'correo': 'user@example.com',
        'telefono': '5555-1234',
        'contrasena': 'abc123',
        'fechanacimiento': '1987-10-12',
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
        'fechanacimiento': '1987-10-12',
        'edad': '55',
        'foto': '',
        'rol': 2,
        'estado': 1
    },
    {
        'nombre': 'UNK',
        'correo': 'use3@example.com',
        'telefono': '5555-1236',
        'contrasena': 'abc123',
        'fechanacimiento': '1987-10-12',
        'edad': '66',
        'foto': '',
        'rol': 3,
        'estado': 4
    }
];

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

const obtenerNombreStat = (idStat) => {
    let nombreStat = '';

    switch (idStat) {
        case 1:
            nombreStat = 'Activo';
            break;
        case 2:
            nombreStat = 'Inactivo';
            break;
        case 3:
            nombreStat = 'Pendiente de aprovacion';
            break;
        case 4:
            nombreStat = 'Pendiente de cambio de contraseña';
            break;
        default:
            break;
    }
    return nombreStat;
}

listaUsuarios.forEach(objUsuario => {
    console.log(objUsuario.nombre);
    console.log(obtenerNombreRol(objUsuario.rol));
    console.log(obtenerNombreStat(objUsuario.estado));
});
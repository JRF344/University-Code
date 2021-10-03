# Requerimientos

Aplicacion para el manejo de los Cines

Crear plataforma web para poder revender entradas a distintos cines

Empresa compra entradas a cadenas de cines. Permite la compra por medio de plataforma a ciudadanos (Usuarios).

Permite a *encargados* el mantenimiento de cadenas, salas y peliculas

Permite a *clientes* poder comprar o reservar entradas

Aplicacion web usando 
- HTML
- CSS
- JS
- Node.js
- MongoDB (Posiblemente Mongo Atlas)

Debe tener administrados (ya debe estar registrado)

3 tipos de usuarios:

- Super Administrador (No se puede registrar, ya debe existir)
- Jefe de Soporte
- Usuarios

Jefe de soporte solo podran ser registrados por Super Admin

Clientes pueden registrarse por su propia cuenta

## Funciones Principales

- Inicio de sesion 
    - Si usuario no inicia sesion no puede usar el resto de funciones

- Pagina de inicio debe ser comun (un inicio para todos tipos de usuarios)
    - Cada tipo de usuario es redireccionado a diferentes secciones de la pagina

- El sistema requiere usar correo y contraseña para iniciar sesion

- La contraseña debe estar protegida a la vista, pero requiere la opcion de mostrar el valor real

- La aplicacion debe permitir al admin realizar mantenimiento de cadenas (Mantenimiento de cadenas: CRUD con filtros)

- Informacion requerida de cines:
    - Nombre de cadena
    - Codigo de cadena
    - Ubicacion de cadena

- La app debera permitir realizar el manejo de salas para cada cadena disponible

- Informacion requerida de salas:
    - Codigo de sala
    - Cantidad de butacas
    - Espacios disponibles
    - Costo de sala
    - Cantidad de butacas disponibles debe bajar como se van comprando
    - Cada sala debe tener un tipo (IMAX, 3D, 4D, etc) [Salas **NO** pueden ser hibridas]
    - Indicar que se va a eliminar
    - Tipos de asiento (regular, accesibilidad, VIP, etc)

## Catalogos Generales y Parametros

- Seccion donde el Admin puede cambiar nombre e logo de cadena
- Mantenimiento de tipo de asiento
- Categorias de peliculas
- Tipos de salas
- Margen de ganancia

## Funciones Basicas

### Acciones de Admins

- Mantenimiento de peliculas
    - CRUD de peliculas
    - Info de peliculas:
        - Imagen
        - Titulo
        - Categoria
        - Clasificacion de edad
            - Advertencia de clasificacion
        - Duracion de pelicula
        - Idioma
        - Doblada/Subtitulada
            - Idioma de Subtitulado

- Programacion de cartelera/peliculas
    - Admin y encargado de soporte pueden realizar estas acciones
    - Determinan que dia sera proyectada una pelicula
        - Rango de fechas
        - Dia
        - Hora de inicio
        - Hora de fin
        - Costo de entrada
        - Sala de proyeccion
        - Debe tener precio sugerido por sala pero puede ser cambiado
        - Solo se pueden programar peliculas registradas

### Acciones de Clientes
- Reserva de Entradas
- Solo puede ser hecho por clientes
- Puede seleccionar peliculas
    - Muestra fechas del dia actual en adelante
- Opcion de busqueda por titulo
- Solo muestra peliculas activas
- Una vez seleccionada pelicula y horario
    - Se puede seleccionar asiento **de manera visual**
        - Todas las salas son rectangulares
        - Solo se pueden reservar entradas en un espacio disponible
        - Representacion grafica debe mostrar asientos ocupados
        - Representacion grafica debe mostrar tipos de asiento
        - Solo usuarios con desabilidad pueden seleccionar asientos accesibles
        - Indicar cantidad de butacas disponibles
        - Asientos seleccionados deben ser marcados 
        - Asientos quedan reservados para un dia y hora
        - Si una sala no tiene asientos disponibles no se permite compra
    - Cuando se reserva la entrada se debe poder comprar de inmediato o reservado
    - Se debe pedir al cliente el metodo de pago para imprimir factura

### Registro de Usuarios

- Registro general de usuarios
    - Unicamente la tiene el administrador de la plataforma (es para registrar otros usuarios)
    - Requiere:
        - escoger el tipo de usuario
         - Identificacion del usuario
            - Marcar tipo de identificacion (Cedula, DIMEX, etc)
         - nombre del usuario
            - Primer Nombre
            - Segundo nombre (Opcional)
            - Primer Apellido
            - Segundo apellido (Opcional)
            - Correo electronico
            - Fecha de nacimiento
            - Edad
                - Debe calcularse a partir de la fecha de nacimiento
    - Cuando un usuario es registrado por el admin se le envia un correo con una bienvenida y una contraseña temporal
        - consiste de 6 caracteres con numeros y letras
        - Siempre se debe generar una nueva

- Registro de clientes en-linea
    - Para todo publico
    - Solo se pueden registrar clientes
    - Mismos datos menos tipo de usuario (siempre sera tipo de usuario)
    - Requiere contraseña y confirmacion de contraseña
    - Si se valida exitosamente se le envia un correo de bienvenida y un codigo de 3 digitos con un enlace para poder confirmar cuenta.
    - Una vez registrado
        - Usuarios deben poder ver tanto su perfil, como el de otros
        - Cliente puede dar mantenimiento a formas de pago
            - Solo se aceptan tarjetas
            - Metodos de pago ilimitados
            - No se pueden **completar** compras sin metodo de pago
                - Debe ofrecer agregar metodo de pago en el momento
                - **[TODO]** Investigar campos para metodo de pago
                - Debe detectar tipo de metodo de pago automaticamente (Visa, Mastarcard o AE)

- App debe tener landing page con informacion visible para usuarios que no se han registrado
    - Solo puede tener opcion de iniciar sesion y crear cuenta
- App debe tener terminos y condiciones cuando registrandose y cuando comprando
- IVA debe estar incluido
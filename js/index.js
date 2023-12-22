//Variables

let numeroAleatorio = "";//Declaramos una variable vacía que contendrá el número aleatorio.
let btnComprobar = document.querySelector("#comprobar");//Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let btnBorrarDatos = document.querySelector(".borrarDatos");//Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let textoResultado = document.querySelector("#resultado");//Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let textoEstadisticas = document.querySelector("#estadisticas");//Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let intentoExito = localStorage.getItem("exitosos") || 0;//Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let intentoFallido = localStorage.getItem("fallidos") || 0;//Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.

//Funciones

//Funcion generar Número

function generarNumeroAleatorio(){ //Declaramos una función que generará el número aleatorio.

    numeroAleatorio = Math.round(Math.random()*10)//Le añade como valor a la variable que va a contener dicho número un random como número entero.
}

//Función verificadora de número

function comprobarNumero(){ //Declaramos una función que comprobará el número que agreguemos.

    let inputNumero = document.querySelector("#numeroUsuario").value;//Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    inputNumero = parseInt(inputNumero)//Ese valor lo transformamos en un número entero (parseInt).
    if(inputNumero === numeroAleatorio){ //Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
        intentoExito++//Aumentamos el valor de la variable que contiene el número de éxitos.
        localStorage.setItem("exitosos", intentoExito)//Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
        textoResultado.innerHTML = "¡Muy Bien!"//Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
        textoEstadisticas.innerHTML = `Éxitos: ${intentoExito}, Fallidos: ${intentoFallido}`//Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        generarNumeroAleatorio()//Llamamos a la función generadora de números para generar un nuevo número aleatorio.
    } else{
        intentoFallido++//Aumentamos el valor de la variable que contiene el número de fallidos.
        localStorage.setItem("fallidos", intentoFallido)//Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
        textoResultado.innerHTML = "Fallaste"//Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
        textoEstadisticas.innerHTML = `Éxitos: ${intentoExito}, Fallidos: ${intentoFallido}`//Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
    }
}

//Función limpiadora de datos

function limpiarDatos(){//Declaramos una función que se encargará de limpiar los datos del localStorage
    localStorage.clear()//Usamos el método de localStorage para limpiar los datos.
    location.reload()//Utilizamos "location.reload()" para reiniciar la página.
}

//Listeners

//Botón comprobar

btnComprobar.addEventListener("click", comprobarNumero)//Creamos un addEventListener para que al hacer click en el botón de comprobar se active la función verificadora de número.

//Botón limpiar

btnBorrarDatos.addEventListener("click", limpiarDatos)//Creamos un addEventListener para que al hacer click en el botón de limpiar se active la función limpiadora de datos.

//Códigos de inicio

textoEstadisticas.innerHTML = `Éxitos: ${intentoExito}, Fallidos: ${intentoFallido}`//Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.

generarNumeroAleatorio()//Llamamos la función generadora de números para que nos genere el primer número que el usuario debe adivinar.

// guardo cambios
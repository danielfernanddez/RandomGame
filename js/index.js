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

    numeroAleatorio = Math.round(Math.random(10))//Le añade como valor a la variable que va a contener dicho número un random como número entero.
}

//Función verificadora de número

function comprobarNumero(){ //Declaramos una función que comprobará el número que agreguemos.

    let inputNumero = document.querySelector("#numeroUsuario")//Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    //Ese valor lo transformamos en un número entero (parseInt).

}
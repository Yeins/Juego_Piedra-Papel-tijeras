"use strict";

//Se capturan elementos del DOM para opciones
//Piedra papel y tijera

let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

//Se capturan elementos del DOM de imags

let manoUsuario = document.querySelector(".mano-usuario");
let manoComputadora = document.querySelector(".mano-computadora");

let puntajeUsuario = document.querySelector(".puntaje-usuario p");
let puntajeComputadora = document.querySelector(".puntaje-computadora p");

let resultado = document.querySelector(".resultado");

let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputadora = "";

let contadorUsuario = 0;
let contadorComputadora = 0;

function unableToClick(){
    document.querySelector(".piedra").disabled = true;
    document.querySelector(".papel").disabled = true;
    document.querySelector(".tijera").disabled = true;
}
function ableToClick(){
    document.querySelector(".piedra").disabled = false;
    document.querySelector(".papel").disabled = false;
    document.querySelector(".tijera").disabled = false;
}

//ALERTA

const swalInicio = () =>{
    Swal.fire({
        icon: 'question',
        title: 'Juguemos!',
        text: 'Gana el primero que llegue a los 3 puntos en piedra, papel o tijeras',
        confirmButtonText: 'Jugar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
}
swalInicio();

const swalGanador = () =>{
    Swal.fire({
        icon: 'success',
        title: 'Ganastes esta partida!',
        text: 'Listo para otra?.',
        confirmButtonText: 'Reiniciar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
}
const swalPerdedor = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Perdiste la partida!',
        text: 'Sigue intentando.',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
}

const limpiarMarcador = () => {
    contadorUsuario = 0;
    contadorComputadora = 0;
    puntajeUsuario.textContent = contadorUsuario;
    puntajeComputadora.textContent = contadorComputadora;
}

const ganadores = (puntajeUsuario, puntajeComputadora) =>{
    console.log("Usuario:" +puntajeUsuario.textContent ,"Computador:" +puntajeComputadora.textContent, "Se muestra resultado");
    if(puntajeUsuario.textContent == 3 && puntajeUsuario.textContent > puntajeComputadora.textContent){
        console.log("Usuario ganador");
        setTimeout(swalGanador, 1000);
        setTimeout(limpiarMarcador, 1200);
        setTimeout(reinicio, 1500);
    }
    else if(puntajeComputadora.textContent == 3 && puntajeUsuario.textContent < puntajeComputadora.textContent){
        console.log("Computadora ganador");
        setTimeout(swalPerdedor, 1000);
        setTimeout(limpiarMarcador, 1200);
        setTimeout(reinicio, 1500);
    }
}
const reinicio = () =>{
    resultado.textContent = "Seleccione una opción";
    manoComputadora.src = "assets/piedra_computadora.png";
    manoUsuario.src = "assets/piedra_ada.png";
}

const resul = () =>{
    if(eleccionUsuario == "piedra"){
        if(eleccionComputadora == "piedra"){
            resultado.textContent = "Empate!! 😐";
            ableToClick();
        }
        if(eleccionComputadora == "papel"){
            resultado.textContent = "Perdiste!! 😥";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
            ganadores(puntajeUsuario, puntajeComputadora);
            ableToClick();
        }
        if(eleccionComputadora == "tijera"){
            resultado.textContent = "Ganasteee!! 🤩";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(puntajeUsuario, puntajeComputadora);
            ableToClick();
        }
    }
    else if(eleccionUsuario == "papel"){
        if(eleccionComputadora == "piedra"){
            resultado.textContent = "Ganasteee!! 🤩";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(puntajeUsuario, puntajeComputadora);
            ableToClick();
        }
        if(eleccionComputadora == "papel"){
            resultado.textContent = "Empate!! 😐";
            ableToClick();
        }
        if(eleccionComputadora == "tijera"){
            resultado.textContent = "Perdiste!! 😥";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
            ganadores(puntajeUsuario, puntajeComputadora);
            ableToClick();
        }
    }
    else if(eleccionUsuario == "tijera"){
        if(eleccionComputadora == "piedra"){
            resultado.textContent = "Perdiste!! 😥";
            contadorComputadora++;
            puntajeComputadora.textContent = contadorComputadora;
            ganadores(puntajeUsuario, puntajeComputadora);
            ableToClick();
        }
        if(eleccionComputadora == "papel"){
            resultado.textContent = "Ganasteee!! 🤩";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario;
            ganadores(puntajeUsuario, puntajeComputadora);   
            ableToClick();
        }
        if(eleccionComputadora == "tijera"){
            resultado.textContent = "Empate!! 😐";
            ableToClick();
        }
    }
}

const IACOMPUTADORA = () =>{
    let RNG = Math.floor(Math.random()*3);

    if (RNG == 0){
        manoComputadora.src = "assets/piedra_computadora.png";
        eleccionComputadora = "piedra";
    } 
    else if (RNG == 1){
        manoComputadora.src = "assets/papel_computadora.png";
        eleccionComputadora = "papel";
    } 
    else{
        manoComputadora.src = "assets/tijera_computadora.png";
        eleccionComputadora = "tijera";
    }
}

botonPiedra.onclick = () =>{
    unableToClick();
    manoUsuario.src = "assets/piedra_ada.png";
    manoComputadora.src = "assets/piedra_computadora.png";
    resultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "piedra";
        manoUsuario.src = "assets/piedra_ada.png";
        IACOMPUTADORA();
        tablero.classList.remove("jugando");
        resul();
    }, 2000);
}

botonTijera.onclick = () =>{
    unableToClick();
    manoUsuario.src = "assets/piedra_ada.png";
    manoComputadora.src = "assets/piedra_computadora.png";
    resultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "tijera";
        manoUsuario.src = "assets/tijera_ada.png";
        IACOMPUTADORA();
        tablero.classList.remove("jugando");
        resul();
    }, 2000);
}

botonPapel.onclick = () =>{
    unableToClick();
    manoUsuario.src = "assets/piedra_ada.png";
    manoComputadora.src = "assets/piedra_computadora.png";
    resultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "papel";
        manoUsuario.src = "assets/papel_ada.png";
        IACOMPUTADORA();
        tablero.classList.remove("jugando");
        resul();
    }, 2000);
}
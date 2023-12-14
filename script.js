//console.log("empezamos de nuevo");

window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'CROWD', 'CLOWN', 'TASTE', 'GREEN', 'BRICK'];


//Funcion para comparar la palabra ingresada con la palabra aleatoria
function intentar(){
    const INTENTO = leerIntento();
    const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE! 😀</h1>")
        return;
    }
    for (const i in palabra){
        if (INTENTO[i] === Number){
            ("Debe ingresar un caracter valido");
            return;
        }
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos==0){
        terminar("<h1>PERDISTE! 😖</h1>")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input")
    intento = intento.value;
    if (intento.length == 5){
        intento= intento.toUpperCase();
    } else {
        alert('Ingreso no valido')
    }
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
    let resultado = document.getElementById("word");
    resultado.innerHTML = palabra;
}

const input = document.getElementById("guess-input");
const valor = input.value;




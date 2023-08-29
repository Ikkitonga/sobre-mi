const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';
const EMPATE = "Empate";
const GANADOR = "Ganaste";
const PERDISTE = "Perdiste";

let ganadorPC = 0;
let ganadorUsuario = 0;
let partidosJugados = 0;
let intentos = 0;
let maxIntentos = 5;
let victoriasUsuario = 0;
let victoriasPC = 0;

let btnPapel = document.getElementById('papel');
let btnPiedra = document.getElementById('piedra');
let btnTijeras = document.getElementById('tijeras');
let partidosJugadosElement = document.getElementById('partidos-jugados');
let puntuacionPcElement = document.getElementById('puntuacion-pc');
let tuPuntuacionElement = document.getElementById('tu-puntuacion');
let partidas = document.getElementById('partida');
let eleccionPc = document.getElementById('eleccion-depc');
let inicio = document.getElementById('saludo');

btnPapel.addEventListener("click", () => {
  jugar(PAPEL);
});

btnPiedra.addEventListener("click", () => {
  jugar(PIEDRA);
});

btnTijeras.addEventListener("click", () => {
  jugar(TIJERAS);
});

function saludar() {
  let nombreJugador = document.getElementById('nombre').value;

  if (nombreJugador === "" || !(isNaN(nombreJugador))) {
    saludo.innerHTML = "Ingresa un nombre real";
  } else {
    saludo.innerHTML = "Hola, " + nombreJugador + " Bienvenido al juego.";
  }
}

function jugar(opcionUsuario) {
  intentos++;
  partidosJugados++;
  partidosJugadosElement.textContent = partidosJugados;

  if (intentos <= maxIntentos) {
    const opcionPc = calcOpcionPc();
    const resultado = calcResultado(opcionUsuario, opcionPc);

    switch (resultado) {
      case GANADOR:
        victoriasUsuario++;
        tuPuntuacionElement.textContent = victoriasUsuario;
        partidas.innerHTML = '¡Ganaste!';
        eleccionPc.innerHTML = 'La PC eligió: ' + opcionPc;
        break;
      case PERDISTE:
        victoriasPC++;
        puntuacionPcElement.textContent = victoriasPC;
        partidas.innerHTML = '¡Perdiste!';
        eleccionPc.innerHTML = 'La PC eligió: ' + opcionPc;
        break;
      case EMPATE:
        partidas.innerHTML = 'Empate';
        eleccionPc.innerHTML = 'La PC eligió: ' + opcionPc;
        break;
    }

    if (victoriasUsuario === 3 || victoriasPC === 3) {
      mostrarResultadoFinal();
    }
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  if (victoriasUsuario >= 3) {
    partidas.innerHTML = '¡Has ganado el mejor de 5!';
  } else if (victoriasPC >= 3) {
    partidas.innerHTML = '¡La PC ha ganado el mejor de 5!';
  }

  // Reinicia los valores para una nueva partida
  intentos = 0;
  victoriasUsuario = 0;
  victoriasPC = 0;
  puntuacionPcElement.textContent = victoriasPC;
  tuPuntuacionElement.textContent = victoriasUsuario;
}

function calcOpcionPc() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return PIEDRA;
      break;
    case 1:
      return PAPEL;
      break;
    case 2:
      return TIJERAS;
      break;
  }
}

function calcResultado(opcionUsuario, opcionPc) {
  if (opcionPc === opcionUsuario) {
    return "Empate";
  } else if ((opcionUsuario === PIEDRA && opcionPc === TIJERAS) ||
             (opcionUsuario === PAPEL && opcionPc === PIEDRA) ||
             (opcionUsuario === TIJERAS && opcionPc === PAPEL)) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

function reiniciarJuego() {
  intentos = 0;
  victoriasUsuario = 0;
  victoriasPC = 0;
  partidosJugados = 0;
  puntuacionPcElement.textContent = victoriasPC;
  tuPuntuacionElement.textContent = victoriasUsuario;
  partidosJugadosElement.textContent = partidosJugados;
  partidas.innerHTML = '';
  eleccionPc.innerHTML = '';
}






















// // 


  

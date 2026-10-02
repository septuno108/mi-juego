let dialogos = [

    {
        personaje: "ANA",
        texto: "¿Escuchaste eso?"
    },

    {
        personaje: "DANIEL",
        texto: "Sí... viene de aquella casa."
    },

    {
        personaje: "ANA",
        texto: "No deberíamos estar aquí."
    },

    {
        personaje: "DANIEL",
        texto: "Tenemos que descubrir qué está pasando."
    }

];


let dialogoActual = 0;


/* INICIAR JUEGO */

function iniciarJuego() {

    document.getElementById("menu")
        .classList.add("oculto");

    document.getElementById("juego")
        .classList.remove("oculto");

    mostrarDialogo();

}


/* MOSTRAR DIÁLOGO */

function mostrarDialogo() {

    let dialogo = dialogos[dialogoActual];

    document.getElementById("nombre")
        .textContent = dialogo.personaje;

    document.getElementById("texto")
        .textContent = dialogo.texto;

}


/* SIGUIENTE DIÁLOGO */

function siguienteDialogo() {

    dialogoActual++;

    if (dialogoActual >= dialogos.length) {

        comenzarCinematica();

        return;
    }

    mostrarDialogo();

}


/* CINEMÁTICA */

function comenzarCinematica() {

    document.getElementById("juego")
        .classList.add("oculto");

    document.getElementById("cinematica")
        .classList.remove("oculto");

    let video =
        document.getElementById("videoHistoria");

    video.play();

    video.onended = function() {

        document.getElementById("cinematica")
            .classList.add("oculto");

        document.getElementById("decision")
            .classList.remove("oculto");

    };

}


/* DECISIÓN */

function elegir(opcion) {

    document.getElementById("decision")
        .classList.add("oculto");

    if (opcion === "investigar") {

        alert(
            "Has decidido investigar...\n\n" +
            "La historia continuará."
        );

    }

    else {

        alert(
            "Has decidido huir...\n\n" +
            "Pero quizá nunca descubras la verdad."
        );

    }

}

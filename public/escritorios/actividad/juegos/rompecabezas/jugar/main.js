const titulo = "00:00";
let intentosEst = parseInt(localStorage.getItem("intentos"));


const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    const tiempoJuego = await codigoJuego();
    prepararConteo(tiempoJuego);
    await terminarJugar();
}

const terminarJugar = () => {
    const finJuego = document.querySelector('#est0');
    //const datosJuego = document.querySelector('#contenidoJuego');

    showLoad();
    setTimeout(() => {
        draggable();
        hiddenLoad();
    }, 2000);
    finJuego.addEventListener('click', async(e) => {
        e.preventDefault();
        showLoad();
        if (intentosEst < 1)
            dibujarPopAlerta("Ya no tienes más intentos");
        else if (acomodados === 1) {
            const enviarRespuestas = await jugarJuego([respuestas]);

            console.log(enviarRespuestas);

            if (enviarRespuestas.calificacion == "10.00" || intentosEst === 0) {
                dibujarPopAlerta("aciertos", "Lo armaste correctamente, tu calificación es: " + enviarRespuestas.calificacion + " <br>Intentos restantes: " + enviarRespuestas.intentos, "desactivarOverlay");
                const btnContinuar = document.querySelector("#continuarC");
                btnContinuar.style.display = "none";
            } else {
                dibujarPopAlerta("aciertos", "Lo armaste incorrectamente, tu calificación es: " + enviarRespuestas.calificacion + " <br>Intentos restantes: " + enviarRespuestas.intentos);
            }
            console.log("Tienes " + enviarRespuestas.intentos + " aciertos");
        } else
            dibujarPopAlerta("No has acabado de armar el rompecabezas");
        hiddenLoad();
    });
}

const main = async() => {
    showLoad();
    await validarJWT();
    await dibujarJuego();
    checarExpiracion(fecha);
}

main();
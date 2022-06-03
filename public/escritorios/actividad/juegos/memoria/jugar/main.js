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
    botonesPar();
    funcTarjetas();
    terminarJugar();
}

const terminarJugar = () => {
    const finJuego = document.querySelector('#est0');

    finJuego.addEventListener('click', async(e) => {
        e.preventDefault();
        showLoad();

        if (intentosEst === 0) {
            dibujarPopAlerta("Ya no tienes más intentos");
        } else {

            const enviarRespuestas = await jugarJuego(tarjetasElegidas, "memorama/");

            const califNum = parseFloat(enviarRespuestas.calificacion);

            if (califNum >= 8) {
                dibujarPopAlerta("aciertos", "Tienes " + enviarRespuestas.pares + " pares correctos, Lo has hecho excelente <br>Intentos restantes: " + enviarRespuestas.intentos, "desactivarOverlay");
            }
            if (califNum > 5 && califNum < 8) {
                dibujarPopAlerta("aciertos", "Tienes " + enviarRespuestas.pares + " pares correctos, sigue estudiando <br>Intentos restantes: " + enviarRespuestas.intentos);
            }
            if (califNum <= 5) {
                dibujarPopAlerta("aciertos", "Tienes " + enviarRespuestas.pares + " pares correctos, Puedes mejorar, no dejes de intentarlo <br>Intentos restantes: " + enviarRespuestas.intentos);
            }

            if (enviarRespuestas.intentos === 0 || califNum === 10.00) {
                const btnContinuar = document.querySelector("#continuarC");
                btnContinuar.style.display = "none";
            }

        }
    });
}

const main = async() => {
    showLoad();
    await validarJWT();
    await dibujarJuego();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
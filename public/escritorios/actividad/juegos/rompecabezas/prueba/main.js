console.log("Bienvenido a Rompecabezas");

const titulo = "60:00";

const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    await codigoJuego();
    let reactivos = await obtenerRespuestas();
    console.log(reactivos.respuestas[0]);
    terminarProbar(reactivos.respuestas[0]);
}

const terminarProbar = (respuestasValidas) => {
    showLoad();
    setTimeout(() => {
        draggable();
        hiddenLoad();
    }, 2000);
    console.log(respuestas, acomodados);
    const finJuego = document.querySelector('#pro0');
    const datosJuego = document.querySelector('#contenidoJuego');
    finJuego.addEventListener('click', (e) => {
        e.preventDefault();
        showLoad();
        if (acomodados === 1)
            if (respuestas == respuestasValidas)
                dibujarPopAlerta("Está armado correctamente");
            else
                dibujarPopAlerta("No está bien armado")
        else
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
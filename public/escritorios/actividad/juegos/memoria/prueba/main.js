const titulo = "60:00";

const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    await codigoJuego();
    let reactivos = await obtenerRespuestas();
    botonesPar();
    funcTarjetas();
    terminarProbar(reactivos.respuestas[0]);
}

const terminarProbar = (respuestasBien) => {
    const finJuego = document.querySelector('#pro0');
    const datosJuego = document.querySelector('#contenidoJuego');
    const strRespuestas = respuestasBien.split("/?");
    const arrRespuestas = [];

    strRespuestas.forEach(respuesta => {
        arrRespuestas.push(respuesta.split(","));
    });

    finJuego.addEventListener('click', (e) => {
        e.preventDefault();
        showLoad();
        let bandera = 0;
        let resultado = 0;

        arrRespuestas.forEach(respuesta => {
            let i = 0;
            bandera = 0;
            console.log(tarjetasElegidas.length);
            while (i < tarjetasElegidas.length && bandera === 0) {
                if (tarjetasElegidas[i][0] == respuesta[0])
                    if (tarjetasElegidas[i][1] == respuesta[1]) {
                        resultado++;
                        bandera = 1;
                    }
                if (tarjetasElegidas[i][0] == respuesta[1])
                    if (tarjetasElegidas[i][1] == respuesta[0]) {
                        resultado++;
                        bandera = 1;
                    }
                if (bandera === 1)
                    tarjetasElegidas.splice(i, 1);

                i++;
            }
        });
        dibujarPopAlerta(`Pares de tarjetas seleccionados correctamente: ${resultado}`);
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
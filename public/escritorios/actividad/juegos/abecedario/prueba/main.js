const titulo = "60:00";

const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    await codigoJuego();
    let reactivos = await obtenerRespuestas();
    console.log(reactivos.respuestas);
    terminarProbar(reactivos.respuestas);
}

const terminarProbar = (respuestasValidas) => {
    const finJuego = document.querySelector('#pro0');
    const datosJuego = document.querySelector('#contenidoJuego');
    finJuego.addEventListener('click', (e) => {
        e.preventDefault();
        showLoad();
        let respuestasContestadas  = Object.values(dataForm(datosJuego));
        let aciertos = [];
        let contador = 0;

        respuestasContestadas.forEach((respuesta, index) => {
            let cajaReactivo = document.querySelector(`#elemento${index}`)
            if(respuestasValidas[index] == respuesta){
                cajaReactivo.style.borderColor = "green";
                aciertos.push("o");
                contador++;
            }
            else{
                cajaReactivo.style.borderColor = "red";
                aciertos.push("x");
            }
        });

        aciertos.forEach((respuesta, index) => {
            /*if(respuesta == "o")

            else*/
        });
        dibujarPopAlerta("Tienes " + contador + " aciertos");
        console.log(aciertos);
        console.log("Tienes " + contador + " aciertos");

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
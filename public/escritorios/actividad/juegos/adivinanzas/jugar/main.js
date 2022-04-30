const titulo = "60:00";

const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    await codigoJuego();
    await terminarJugar();
}

const terminarJugar = async() => {
    const finJuego = document.querySelector('#est0');
    const datosJuego = document.querySelector('#contenidoJuego');

    finJuego.addEventListener('click', async(e) => {
        e.preventDefault();
        showLoad();
        let respuestasContestadas  = Object.values(dataForm(datosJuego));

        const enviarRespuestas = await jugarJuego(respuestasContestadas, 'juego/')

        console.log(enviarRespuestas);

        let contador = 0;
        
        enviarRespuestas.respuestas.forEach((respuesta, index) => {
            let cajaReactivo = document.querySelector(`#elemento${index}`)
            if(respuesta == "o"){
                cajaReactivo.style.borderColor = "green";
                contador++;
            }
            else{
                cajaReactivo.style.borderColor = "red";
            }
        });

        dibujarPopAlerta("aciertos", "Tienes " + contador + " aciertos, tu calificación es: " + enviarRespuestas.calificacion);
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
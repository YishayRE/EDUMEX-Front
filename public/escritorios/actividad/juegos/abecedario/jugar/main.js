const titulo = "60:00";
let intentosEst = parseInt(localStorage.getItem("intentos"));

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
        if(intentosEst === 0){
            dibujarPopAlerta("Ya no tienes más intentos");
        }else if(intentosEst > 0){
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

            --intentosEst;

            hiddenLoad();

            if(enviarRespuestas.calificacion == "10.00" || intentosEst === 0){
                dibujarPopAlerta("aciertos", "Tienes " + contador + " aciertos, tu calificación es: " + enviarRespuestas.calificacion + " <br>Intentos restantes: " + intentosEst, "desactivarOverlay");
                const btnContinuar = document.querySelector("#continuarC");
                btnContinuar.style.display = "none";
            }else{
                dibujarPopAlerta("aciertos", "Tienes " + contador + " aciertos, tu calificación es: " + enviarRespuestas.calificacion + " <br>Intentos restantes: " + intentosEst);
            }
            console.log("Tienes " + contador + " aciertos");
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
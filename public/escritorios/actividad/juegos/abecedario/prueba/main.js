const titulo = "60:00";

const accesosPrueba = [{
    'nombre': 'Finalizar Juego',
    'referencia': ``
}];

const dibujarJuego = async() => {
    dibujarNavBar(accesosPrueba, titulo);
    await codigoJuego();
    let respuestas = await obtenerRespuestas();
    console.log(respuestas);
    terminarProbar(respuestas);
}

const terminarProbar = (respuestas) => {
    const finJuego = document.querySelector('#pro0');
    const datosJuego = document.querySelector('#juego');
    finJuego.addEventListener('click', (e) => {
        e.preventDefault();
        showLoad();
        let respPruebas = dataForm(datosJuego);
        console.log(respPruebas);        
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
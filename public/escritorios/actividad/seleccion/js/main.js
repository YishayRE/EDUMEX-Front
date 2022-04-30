const btnJuego = document.querySelectorAll('#btnJuego'); 
const titulo = "Seleccion de juego";

const elegirJuego = () => {
    btnJuego.forEach(btn => {
        btn.addEventListener('click', async(e) => {
            showLoad();
            localStorage.setItem('tipoJ', btn.attributes.name.value);
            let actividadActual = localStorage.getItem('actividad');
            const infoJuego = await crearJuego(actividadActual);
            localStorage.setItem('juego', infoJuego);
            window.location.replace(`${juegosUrl}juegos/${btn.attributes.name.value}`);
            hiddenLoad();
        });  
    });
}

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar([], titulo, 'materia');
        cerrarSesion();
    }else if(rol == "EST_ROLE"){
        dibujarNavBar();
        cerrarSesion();
    }
}


const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    checarExpiracion(fecha);
    elegirJuego();
    hiddenLoad();
}

main();
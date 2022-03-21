const titulo = localStorage.getItem('tituloJ');

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar();
        cerrarSesion();
    }else if(rol == "EST_ROLE"){
        window.location.replace(`${baseUrl}`);
    }
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    await obtenerInfo();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
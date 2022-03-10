const btnJuego = document.querySelectorAll('#btnJuego'); 
const titulo = localStorage.getItem('tituloJ');

const elegirJuego = () => {
    btnJuego.forEach(btn => {
        btn.addEventListener('click', (e) => {
            localStorage.setItem('tipoJ', btn.attributes.name.value);
            window.location.replace(`${juegosUrl}juegos/${btn.attributes.name.value}`);
        });  
    });
}

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar();
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
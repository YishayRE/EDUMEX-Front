//-------------convertir hex a rgba----------------------
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
    }
    throw new Error('Bad Hex');
}

//-----------------------Cerrar Sesion----------------------
function cerrarSesion(){
    const btnSalir = document.querySelector('#logout');
    btnSalir.addEventListener('click', e => {
        localStorage.removeItem('token');
        window.location = `${baseUrl}pantalla_inicial`;
    });
}

/*
function mostrarBotones(tipo){
    if(tipo === 1){
        const pop1 = document.querySelector('#vp1');
        pop1.style.visibility = "visible";
    }else{
        const pop2 = document.querySelector('#vp2');
        pop2.style.visibility = "visible";
    }
}
*/
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

//se recomienda mover a otro js

//-----------------------Cerrar Sesion----------------------
function cerrarSesion(){
    const btnSalir = document.querySelector('#logout');
    btnSalir.addEventListener('click', e => {
        localStorage.removeItem('token');
        window.location = `${baseUrl}`;
    });
}

const formData = () => {
    showLoad();

    if(!validarCamposVacios()){
        hiddenLoad();
        throw Error('Falta algun dato');
    }

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }
    return formData;
}
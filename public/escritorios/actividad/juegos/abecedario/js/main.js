const btnJuego = document.querySelectorAll('#btnJuego'); 
const materia = document.querySelector('#materia');
const actividad = document.querySelector('#actividad');
const tipoJ = document.querySelector('#tipoJ');
const objetivo = document.querySelector('#objetivo');
const descripcion = document.querySelector('#descripcion');
const contenedor = document.querySelector('#contenedor');
const adicion = document.querySelector('#adicion');
const opcion = document.querySelector('#opcion0');
const select = document.querySelector('#select0');

const titulo = localStorage.getItem('tituloJ');

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    contadorEtiqueta++;
    contenedor.innerHTML += `
        <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}">
        <select name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
            <option value="Palabra">Palabra</option>
            <option value="Oración">Oración</option>
        </select>
        <h1 id="select${contadorEtiqueta}">
            Palabra
        </h1>
        <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
    `;
});

opcion.addEventListener('change', () => {
    if(opcion.selectedIndex === 1)
        select.innerHTML = 'Oración';
    else
        select.innerHTML = 'Palabra';
});

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
    await obtenerInfo();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
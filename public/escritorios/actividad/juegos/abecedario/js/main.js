const btnJuego = document.querySelectorAll('#btnJuego'); 
const materia = document.querySelector('#materia');
const actividad = document.querySelector('#actividad');
const tipoJ = document.querySelector('#tipoJ');
const objetivo = document.querySelector('#objetivo');
const descripcion = document.querySelector('#descripcion');
const adicion = document.querySelector('#adicion');
const select = document.querySelectorAll('#select');
let opcion = document.querySelectorAll(`#opcion`);


const titulo = localStorage.getItem('tituloJ');

const accesoP = [
    {
        'nombre': 'Terminar Juego',
        'referencia': ``
    },
    {
        'nombre': 'Probar',
        'referencia': ``
    }
];

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    let contenedor = document.querySelector('#contenedor');
    contadorEtiqueta++;
    contenedor.innerHTML += `
        <div class="elementoJuego">
            <div class="image-upload">
                <label for="imagen${contadorEtiqueta}">
                <img id="cargaImagen" src="../../../../images/upload.png"/>
                </label>
                
                <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
            </div>
            <select name="opcion${contadorEtiqueta}" id="opcion">
                <option value="Palabra" selected>Palabra</option>
                <option value="Oración">Oración</option>
            </select>
            <h1 id="select${contadorEtiqueta}">
                Palabra
            </h1>
            <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    `;
});

opcion.forEach((btn, index) => {
    btn.addEventListener('change', () => {
        if(opcion.selectedIndex === 1)
            select.innerHTML = 'Oración';
        else
            select.innerHTML = 'Palabra';
    });
});

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP, 'abecedario', 'materia');
        cerrarSesion();
    }else if(rol == "EST_ROLE"){
        window.location.replace(`${baseUrl}`);
    }
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    //await obtenerInfo();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
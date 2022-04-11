const btnJuego = document.querySelectorAll('#btnJuego');
const materia = document.querySelector('#materia');
const actividad = document.querySelector('#actividad');
const tipoJ = document.querySelector('#tipoJ');
const objetivo = document.querySelector('#objetivo');
const descripcion = document.querySelector('#descripcion');
const contenedor = document.querySelector('#contenedor');
const adicion = document.querySelector('#adicion');
//const opcion = document.querySelector('#opcion0');
//const select = document.querySelector('#select0');

const titulo = localStorage.getItem('tituloJ');

const accesoP = [{
        'nombre': 'Terminar Juego',
        'referencia': ``
    },
    {
        'nombre': 'Probar',
        'referencia': ``
    }
];

/*
adicion.addEventListener('click', () => {
    contadorEtiqueta++;
    contenedor.innerHTML += `
        <div class="elementoJuego">
            <div class="image-upload">
                <label for="imagen${contadorEtiqueta}">
                <img id="cargaImagen" src="../../../../images/upload.png"/>
                </label>
                
                <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
            </div>
            <select name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
                <option value="" selected disabled hidden>Elige el tipo</option>
                <option value="Palabra">Palabra</option>
                <option value="Oración">Oración</option>
            </select>
            <h1 id="select${contadorEtiqueta}">
                Palabra
            </h1>
            <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    `;
});

opcion.addEventListener('change', () => {
    if(opcion.selectedIndex === 2)
        select.innerHTML = 'Secuencia';
    else
        select.innerHTML = 'Operación';
});
*/

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    insertarCodigo(contadorEtiqueta++);
});

const checarRol = async() => {
    if (rol == "PRO_ROLE") {
        dibujarNavBar(accesoP, 'numeros', 'materia');
        cerrarSesion();
    } else if (rol == "EST_ROLE") {
        dibujarNavBar();
        cerrarSesion();
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
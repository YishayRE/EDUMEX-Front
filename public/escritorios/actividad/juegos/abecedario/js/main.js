const btnJuego = document.querySelectorAll('#btnJuego');
const materia = document.querySelector('#materia');
const actividad = document.querySelector('#actividad');
const tipoJ = document.querySelector('#tipoJ');
//const objetivo = document.querySelector('#objetivo');
//const descripcion = document.querySelector('#descripcion');
const adicion = document.querySelector('#adicion');
const resta = document.querySelector('#resta');
const quitar = document.querySelector('#quitar');
const select = document.querySelectorAll('#select');


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

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    insertarCodigo(contadorEtiqueta++);
    console.log(contadorEtiqueta);
    if(contadorEtiqueta > 0)
        resta.style.display = "block";
});

resta.style.display = "none";

resta.addEventListener('click', () => {
    eliminarCodigo(--contadorEtiqueta);
    if(contadorEtiqueta == 0)
        resta.style.display = "none";
});

const checarRol = async() => {
    if (rol == "PRO_ROLE") {
        dibujarNavBar(accesoP, localStorage.getItem("tipoJ"), 'materia');
        cerrarSesion();
    } else if (rol == "EST_ROLE") {
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
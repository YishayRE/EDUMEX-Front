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

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    insertarCodigo(contadorEtiqueta++);
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
    await obtenerInfo();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
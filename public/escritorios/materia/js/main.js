const formCrear = document.querySelector('#form_crearActividad');
const crearActividad = document.querySelector('#enviar_actividad');
const titulo = localStorage.getItem('tituloM');


const accesoP = [
    {
        'nombre': 'Calificaciones',
		'referencia': ``
	},
    {
        'nombre': 'Crear Actividad',
        'referencia': ``
    }
];

const datosPop = [
    'Crear Actividad',
    'actividad',
    [
        {
            'type': 'text',
            'name': 'nombre',
            'titulo': 'Nombre de la actividad'
        },
        {
            'type': 'text',
            'name': 'descripcion',
            'titulo': 'Descripcion de la actividad'
        },
        {
            'type': 'text',
            'name': 'objetivo',
            'titulo': 'Objetivo de la actividad'
        }
    ],
    'Crear'
];

function validarCamposVacios(){
    var c1 = document.getElementById("Nom_materia").value;
    var c2 = document.getElementById("Desc_materia").value;

    if (c1.length == 0 || c2.length == 0) {
        return false;
    }
    return true;
}

const checarRol = async() => {
    const materia = localStorage.getItem('materia');
    const color = localStorage.getItem('color');

    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP, titulo, 'grupo');
        colorNav(color);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {actividades} = await obtenerArray(`actividad/`, materia);
        dibujarActividad(actividades);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar([], titulo, 'grupo');
        colorNav(color);
        cerrarSesion();
        const {actividades} = await obtenerArray(`actividad/`, materia);
        dibujarActividad(actividades);
    }
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
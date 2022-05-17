const formCrear = document.querySelector('#form_crearMateria');
const crearMateria = document.querySelector('#enviar_materia');
const titulo = localStorage.getItem('tituloG');
let disponibleGrupo;


const accesoP = [
    {
        'nombre': 'Calificaciones',
		'referencia': ``
	},
    {
        'nombre': 'Activar Grupo',
		'referencia': ``
	},
    {
        'nombre': 'Crear Materia',
		'referencia': ``
	}
];

const datosPop = [
    'Crear Materia',
    'materia',
    [
        {
            'type': 'color',
            'name': 'color',
            'titulo': 'Color de la materia'
        }
    ],
    'Crear',
    [
        'Español',
        'Matemáticas',
        'Ciencias Naturales',
        'Civismo'
    ]
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
    const grupo = localStorage.getItem('grupo');
    if(rol == "PRO_ROLE"){
        const {materias} = await obtenerArray(`materia/`, grupo);
        disponibleGrupo = materias[0].grupo.disponible;
        dibujarNavBar(accesoP, titulo, 'inicial');
        cerrarSesion();
        dibujarPopUp(datosPop);
        dibujarMateria(materias);
    }else if(rol == "EST_ROLE"){
        const {materias} = await obtenerArray(`materia/`, grupo);
        dibujarNavBar([], titulo, 'inicial');
        cerrarSesion();
        dibujarMateria(materias);
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
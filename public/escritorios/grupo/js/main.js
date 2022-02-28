const formCrear = document.querySelector('#form_crearMateria');
const crearMateria = document.querySelector('#enviar_materia');
const titulo = localStorage.getItem('titulo');

const accesoP = [
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
            'type': 'list',
            'name': 'nombre',
            'titulo': 'Nombre de la materia'
        },
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

const checarRol = async() => {
    const grupo = localStorage.getItem('grupo');
    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP, titulo);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {materias} = await obtenerArray(`materia/${grupo}`);
        dibujarMateria(materias);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar([], titulo);
        cerrarSesion();
        const {materias} = await obtenerArray(`materia/${grupo}`);
        dibujarMateria(materias);
    }
}

function validarCamposVacios(){
    var c1 = document.getElementById("Nom_materia").value;
    var c2 = document.getElementById("Desc_materia").value;

    if (c1.length == 0 || c2.length == 0) {
        return false;
    }
    return true;
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
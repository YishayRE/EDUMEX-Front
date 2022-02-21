const formUnir = document.querySelector('#form_unirGrupo');
const formCrear = document.querySelector('#form_crearGrupo');

const accesoP = [
    {
        'nombre': 'Crear Grupo',
		'referencia': ``
	}
];
const accesoE = [
    {
        'nombre': 'Unirme a Grupo',
        'referencia': ``

    }
];

const datosPopP = [
    'Crear Grupo',
    'grupo',
    [
        {
            'type': 'text',
            'name': 'nombre',
            'titulo': 'Nombre del grupo'
        },
        {
            'type': 'text',
            'name': 'saludo',
            'titulo': 'Texto de Bienvenida'
        }
    ],
    'Crear'
];

const datosPopE = [
    'Unirme a Grupo',
    'inscrito',
    [
        {
            'type': 'text',
            'name': 'codigo',
            'titulo': 'Código del grupo'
        }
    ],
    'Unirme'
];

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP);
        cerrarSesion();
        dibujarPopUp(datosPopP);
        const {grupos} = await obtenerArray(`grupo/${uid}`);
        dibujarGrupo(grupos);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesoE);
        cerrarSesion();
        dibujarPopUp(datosPopE);
        const {grupos} = await obtenerArray(`inscrito/${uid}`);
        dibujarGrupo(grupos);
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
const formUnir = document.querySelector('#form_unirGrupo');
const formCrear = document.querySelector('#form_crearGrupo');
const titulo = "Escritorio Principal"

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
            'type': 'list',
            'name': 'grado',
            'titulo': 'Grado'
        },
        {
            'type': 'list',
            'name': 'grupo',
            'titulo': 'Letra'
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
        dibujarNavBar(accesoP, titulo);
        cerrarSesion();
        dibujarPopUp(datosPopP);
        const {grupos} = await obtenerArray(`grupo/`, uid);
        dibujarGrupo(grupos);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesoE, titulo);
        cerrarSesion();
        dibujarPopUp(datosPopE);
        const {grupos} = await obtenerArray(`inscrito/`, uid);
        if(grupos.length > 0){
            const btnUnir = document.querySelector("#est0");
            btnUnir.style.display = "none";
        }
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

window.history.length = 0;
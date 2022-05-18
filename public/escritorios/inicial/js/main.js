const formUnir = document.querySelector('#form_unirGrupo');
const formCrear = document.querySelector('#form_crearGrupo');
const titulo = "Escritorio Principal"
let infoGrupos = null;

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
        infoGrupos = grupos;
        dibujarGrupo(grupos);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesoE, titulo);
        cerrarSesion();
        dibujarPopUp(datosPopE);
        const {grupo} = await obtenerArray(`inscrito/`, uid);
        if(grupo){
            const btnUnir = document.querySelector("#est0");
            btnUnir.style.display = "none";
        }
        dibujarGrupo([grupo]);
        estiloAlumno();
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

const estiloAlumno = () => {
    const tarjetaGrupo = document.querySelector(".tarjeta");
    const tarjetaNombre = document.querySelector(".tarjeta_nombre");
    const tarjetaBienvenida = document.querySelector(".tarjeta_bienvenida");
    const textoTarjetas = document.querySelector(".textoTarjetas");
    const tarjetaBoton = document.querySelector(".tarjeta_button");

    tarjetaGrupo.style.width = "300px";
    tarjetaGrupo.style.height = "300px";
    tarjetaGrupo.style.fontSize = "25px";
    tarjetaNombre.style.fontSize = "35px";
    tarjetaBienvenida.style.maxWidth = "300px";
    tarjetaBienvenida.style.fontSize = "30px";
    textoTarjetas.style.overflowY = "hidden";
    textoTarjetas.style.maxHeight = "85px";
    textoTarjetas.style.marginBottom = "15px";
    textoTarjetas.style.maxWidth = "300px";
    tarjetaBoton.style.width = "100px";
    tarjetaBoton.style.marginTop = "auto";
    tarjetaBoton.style.borderWidth = "8px";
}
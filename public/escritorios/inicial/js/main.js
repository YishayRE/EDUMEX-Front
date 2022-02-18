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
    {
        'nombre': 'Unirme a Grupo',
        'form': `inscrito`,
        'boton': `Unirme`

    }
];

//-----------------------------Formulario para crear un nuevo grupo--------------------------
/*formCrear.addEventListener('submit', ev => {
    ev.preventDefault();
    showLoad();

    if(!validarCamposVacios()){
        hiddenLoad();
        throw Error('Falta algun dato');
    }

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }

    fetch(baseApi + 'grupo', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then (({msg, token}) => {
        if(msg){
            hiddenLoad();
            return console.error(msg);
        }
        localStorage.setItem('token',token);
        window.location = '../escritorio_inicial';
    })
    .catch(err => {
        hiddenLoad();
        console.log(err)
    })
});*/

//-----------------------------Formulario para unirse a un grupo------------------------------
/*formUnir.addEventListener('submit', ev => {
    ev.preventDefault();
    showLoad();

    if(!validarCamposVacios()){
        hiddenLoad();
        throw Error('Falta algun dato');
    }

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }

    fetch(baseApi + 'login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then (({msg, token}) => {
        if(msg){
            hiddenLoad();
            return console.error(msg);
        }
        localStorage.setItem('token',token);
        window.location = '../escritorio_inicial';
    })
    .catch(err => {
        hiddenLoad();
        console.log(err)
    })
});*/

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
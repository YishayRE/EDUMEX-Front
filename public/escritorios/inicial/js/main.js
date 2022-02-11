const formUnir = document.querySelector('#form_unirGrupo');
const formCrear = document.querySelector('#form_crearGrupo');

const accesoP = [
    {
        'nombre': 'Crear Grupo',
		'referencia': `#popup1`
	}
];
const accesoE = [
    {
        'nombre': 'Unirme a Grupo',
        'referencia': `#popup2`

    }
];

const datosPop = [
    {
        'nombre': 'Unirme a Grupo',
        'form': `form_unirGrupo`,
        'boton': `Unirme`

    },
    {
        'nombre': 'Crear Grupo',
        'form': `form_crearGrupo`,
        'boton': `Crear`

    }
];

//-----------------------------Formulario para crear un nuevo grupo--------------------------
formCrear.addEventListener('submit', ev => {
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
});

//-----------------------------Formulario para unirse a un grupo------------------------------
formUnir.addEventListener('submit', ev => {
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
});

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {grupos} = await obtenerArray(`grupo/${uid}`);
        dibujarGrupo(grupos);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesoE);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {grupos} = await obtenerArray(`inscrito/${uid}`);
        dibujarGrupo(grupos);
    }
}

function checarExpiracion(exp){
    const fechaExp = new Date(exp * 1000);
    console.log(fechaExp.toUTCString());

    const actual = Date.now();
    const fechaAhorita = new Date(actual);
    console.log(fechaAhorita.toUTCString());

    if(fechaExp > fechaAhorita){
        console.log("SE RENOVÓ EL TOKEN")
        renovarJWT();
    } else if(fechaExp < fechaAhorita){
        console.log("EL TOKEN HA EXPIRADO");
        //otra cosa, checar esta parte
    }
}

const renovarJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if(token.length <= 10){
        throw new Error('No hay token en el servidor');
    }

    const resp = await fetch(baseApi + "auth", {
        method: 'GET',
        headers: {'x-token': token}
    });
    const {usuario: userDB, token: tokenDB} = await resp.json();

    localStorage.setItem('token', tokenDB);
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    hiddenLoad();
}

main();
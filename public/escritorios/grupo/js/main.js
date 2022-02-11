const formCrear = document.querySelector('#form_crearMateria');
const crearMateria = document.querySelector('#enviar_materia');

const accesoP = [
    {
        'nombre': 'Crear Materia',
		'referencia': `#popup1`
	}
];

const datosPop = [
    {
        'nombre': 'Crear Materia',
        'form': `form_crearMateria`,
        'boton': `Crear`

    }
];

//-----------------------------Formulario para crear una nueva materia--------------------------
formCrear.addEventListener('submit', ev => {
    
    const token = localStorage.getItem('token');
    const grupo = localStorage.getItem('grupo');

    console.log(grupo);
    console.log(token);


    ev.preventDefault();
    showLoad();

    if(!validarCamposVacios()){
        hiddenLoad();
        //dibujarAlerta(tipo);
        throw Error('Falta algun dato');
    }

    const formData = {};

    for(let el of formCrear.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }
    formData["grupo"] = grupo;

    console.log(formData);

    fetch(url + 'materia', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'x-token': token, 
        'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then (({msg, token}) => {
        if(msg){
            hiddenLoad();
            return console.error(msg);
        }
    })
    .catch(err => {
        hiddenLoad();
        console.log(err)
    })
});

const checarRol = async() => {
    const grupo = localStorage.getItem('grupo');
    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {materias} = await obtenerArray(`materia/${grupo}`);
        dibujarMateria(materias);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar([]);
        cerrarSesion();
        const {materias} = await obtenerArray(`materia/${grupo}`);
        dibujarMateria(materias);
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
    const resp = await fetch(url + "auth", {
        method: 'GET',
        headers: {'x-token': token}
    });
    const {usuario: userDB, token: tokenDB} = await resp.json();

    localStorage.setItem('token', tokenDB);
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
    hiddenLoad();
}

main();
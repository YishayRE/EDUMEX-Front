const popCrear = document.querySelector('#vp2');
const formCrear = document.querySelector('#form_crearActividad');
const crearActividad = document.querySelector('#enviar_actividad');

const accesos = [
    {
        'nombre': 'Crear Actividad',
        'referencia': `#popup1`

    },
    {
		'nombre': 'Cerrar sesión',
		'referencia': ``
	}
];

//-----------------------------Formulario para crear una nueva actividad--------------------------
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
    const materia = localStorage.getItem('materia');

    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesos);
        cerrarSesion();
        mostrarBotones(1);
        const {actividades} = await obtenerArray(`actividad/${materia}`);
        dibujarActividad(actividades);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesos);
        cerrarSesion();
        const {actividades} = await obtenerArray(`actividad/${materia}`);
        dibujarActividad(actividades);
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

/*function dibujarAlerta(tipo) {
    let alertasHtml = '';
    let alerta = '';

    if(tipo == 1){
        alerta = "Falta información en uno o más campos";
    }else if(tipo==2){
        alerta = "Las contraseñas no coinciden";
    }
    alertasHtml += `
		<h5>
        ${alerta}
		</h5>
	    `;
    alertas.innerHTML = alertasHtml;
}*/

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
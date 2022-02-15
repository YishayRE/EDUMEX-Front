const formCrear = document.querySelector('#form_crearActividad');
const crearActividad = document.querySelector('#enviar_actividad');

const accesoP = [
    {
        'nombre': 'Crear Actividad',
        'referencia': `#popup1`

    }
];

const datosPop = [
    {
        'nombre': 'Crear Actividad',
        'form': `form_crearActividad`,
        'boton': `Crear`

    }
];

//-----------------------------Formulario para crear una nueva actividad--------------------------
/*formCrear.addEventListener('submit', ev => {
    
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
});*/

const checarRol = async() => {
    const materia = localStorage.getItem('materia');

    if(rol == "PRO_ROLE"){
        dibujarNavBar(accesoP);
        cerrarSesion();
        dibujarPopUp(datosPop);
        const {actividades} = await obtenerArray(`actividad/${materia}`);
        dibujarActividad(actividades);
    }else if(rol == "EST_ROLE"){
        dibujarNavBar(accesos);
        cerrarSesion();
        const {actividades} = await obtenerArray(`actividad/${materia}`);
        dibujarActividad(actividades);
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
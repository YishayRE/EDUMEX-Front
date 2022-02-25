const formCrear = document.querySelector('#form_crearMateria');
const crearMateria = document.querySelector('#enviar_materia');

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

//-----------------------------Formulario para crear una nueva materia--------------------------
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
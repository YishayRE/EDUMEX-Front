document.cookie = " ";
const miFormulario = document.querySelector('#form_registro');
const alertas = document.querySelector("#alertas");
const titulo = "";
let tipo = null;

console.log("hola");


const accesos = [
	{
		'nombre': 'Iniciar Sesión',
		'referencia': `auth/inicio_sesion/`
	}
];

const inputEst = document.querySelector("#cb1");
const inputPro = document.querySelector("#cb2");

let auxCont = 0;
let auxCont2 = 0;

inputEst.addEventListener('click', () => {
    
    if(auxCont === 0){
        inputPro.disabled = true;
        auxCont = 1;
    }else if(auxCont === 1){
        inputPro.disabled = false;
        auxCont = 0;
    }
});

inputPro.addEventListener('click', () => {
    if(auxCont2 === 0){
        inputEst.disabled = true;
        auxCont2 = 1;
    }else if(auxCont2 === 1){
        inputEst.disabled = false;
        auxCont2 = 0;
    }
});

miFormulario.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    showLoad();

    if(!validarFormulario())
        throw new Error("Hubo un error en los datos del formulario");

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }

    formData["rol"] = valorRol();
    

    await registrar(formData);

    hiddenLoad();
});

function validarFormulario() {
    let c1 = document.querySelector("#Nom_registro").value;
    let c2 = document.querySelector("#Pat_registro").value;
    let c3 = document.querySelector("#Mat_registro").value;
    let c4 = document.querySelector("#Correo_registro").value;
    let c5 = document.querySelector("#Contra_registro").value;
    let c6 = document.querySelector("#ContraC_registro").value;
    let c7 = document.querySelector("#cb1").checked;
    let c8 = document.querySelector("#cb2").checked;
    if(c1.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado el nombre");
        return false;
    }else if(c2.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado el apellido paterno");
        return false;
    }else if(c3.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado el apellido materno");
        return false;
    }else if(c4.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado el correo");
        return false;
    }else if(c5.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado la contraseña");
        return false;
    }else if(c6.length === 0){
        hiddenLoad();
        dibujarPopAlerta("Confirma tu contraseña");
        return false;
    }else if(!(c7 || c8)){
        hiddenLoad();
        dibujarPopAlerta("No has seleccionado el tipo de usuario");
        return false;
    }

    if (c5 !== c6) {
        hiddenLoad();
        dibujarPopAlerta("La contraseña no coincide");
        return false;
    }
    if (c5.length !== 6) {
        hiddenLoad();
        dibujarPopAlerta("La contraseña debe ser de 6 caracteres");
        return false;
    }

    return true;
}

const validarCampos = () => {
    console.log("hola");

    let c1 = document.querySelector("#Nom_registro").value;
    let c2 = document.querySelector("#Pat_registro").value;
    let c3 = document.querySelector("#Mat_registro").value;
    c1.onkeypress = function() {return soloLetras(event)};
    c2.onkeypress = function() {return soloLetras(event)};
    c3.onkeypress = function() {return soloLetras(event)};
}

function valorRol(){
    let auxValor;
    let checkedValue = null;
    const inputElements = document.getElementsByClassName("rolCheckbox");
    
    for(let i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){            
            checkedValue = inputElements[i].value;
            console.log(checkedValue);
            return checkedValue;
        }
    }
}

const main = async() => {
    localStorage.clear();
    dibujarNavBar(accesos, titulo);
    await tieneJWT();
    validarCampos();
}

main();
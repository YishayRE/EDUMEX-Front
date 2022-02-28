document.cookie = " ";
const miFormulario = document.querySelector('#form_registro');
const alertas = document.querySelector("#alertas");
const titulo = "";
let tipo = null;

const accesos = [
	{
		'nombre': 'Iniciar Sesión',
		'referencia': `auth/inicio_sesion/`
	}
];

miFormulario.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    showLoad();

    if(!validarCamposVacios()){
        hiddenLoad();
        const msg = "Falta algún dato";
        dibujarPopAlerta(msg);
        throw Error(msg);
    }

    if(!validarContraseña()){
        hiddenLoad();
        const msg = "La contraseña no coincide o no ha sido ingresada";
        dibujarPopAlerta(msg);
        throw Error('La contraseña no coincide o no ha sido ingresada');
    }

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

function validarContraseña(){
    var p1 = document.getElementById("Contra_registro").value;
    var p2 = document.getElementById("ContraC_registro").value;

    if (p1 !== p2) {
        return false;
    }else if(p1.length === 0 || p2.length === 0){
        return false;
    }else {
        return true; 
    }
}

function validarCamposVacios(){
    var c1 = document.getElementById("Nom_registro").value;
    var c2 = document.getElementById("Pat_registro").value;
    var c3 = document.getElementById("Mat_registro").value;
    var c4 = document.getElementById("Correo_registro").value;
    var c5 = document.getElementById("Contra_registro").value;
    var c6 = document.getElementById("ContraC_registro").value;
    var c7 = document.getElementById("cb1").checked;
    var c8 = document.getElementById("cb2").checked;
    

    if (c1.length == 0 || c2.length == 0 || c3.length == 0 || c4.length == 0 || c5.length == 0 || c6.length == 0 || !(c7 || c8)) {
        return false;
    }
    return true;
}


function valorRol(){
    var checkedValue = null;
    var inputElements = document.getElementsByClassName("rolCheckbox");
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            return checkedValue;
        }
    }
}

const main = async() => {
    dibujarNavBar(accesos, titulo);
    await tieneJWT();
}

main();
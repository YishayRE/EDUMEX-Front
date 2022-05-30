document.cookie = " ";
const miFormulario = document.querySelector('#form_registro');
const alertas = document.querySelector("#alertas");
const titulo = "";
let tipo = null;

const accesos = [{
    'nombre': 'Iniciar Sesión',
    'referencia': `auth/inicio_sesion/`
}];

const inputEst = document.querySelector("#cb1");
const inputPro = document.querySelector("#cb2");

let auxCont = 0;
let auxCont2 = 0;

inputEst.addEventListener('click', () => {

    if (auxCont === 0) {
        inputPro.disabled = true;
        auxCont = 1;
    } else if (auxCont === 1) {
        inputPro.disabled = false;
        auxCont = 0;
    }
});

inputPro.addEventListener('click', () => {
    if (auxCont2 === 0) {
        inputEst.disabled = true;
        auxCont2 = 1;
    } else if (auxCont2 === 1) {
        inputEst.disabled = false;
        auxCont2 = 0;
    }
});

miFormulario.addEventListener('submit', async(ev) => {
    ev.preventDefault();
    showLoad();

    const formData = dataForm(miFormulario);

    const arrayRegistro = Object.entries(formData);

    arrayRegistro.forEach(campo => {
        if (campo[1] == "") {
            switch (campo[0]) {
                case "nombre":
                    dibujarPopAlerta(`El nombre no puede estar vacío`);
                    hiddenLoad();
                    throw new Error(`El campo nombre está vacío`);
                    break;
                case "apellidoP":
                    dibujarPopAlerta(`El apellido paterno no puede estar vacío`);
                    hiddenLoad();
                    throw new Error(`El campo apellidoP está vacío`);
                    break;
                case "apellidoM":
                    dibujarPopAlerta(`El apellido materno no puede estar vacío`);
                    hiddenLoad();
                    throw new Error(`El campo apellidoM está vacío`);
                    break;
                case "correo":
                    dibujarPopAlerta(`El correo no puede estar vacío`);
                    hiddenLoad();
                    throw new Error(`El campo correo está vacío`);
                    break;
                case "password":
                    dibujarPopAlerta(`No has ingresado una contraseña`);
                    hiddenLoad();
                    throw new Error(`El campo password está vacío`);
                    break;
                case "passwordC":
                    dibujarPopAlerta(`Necesitas confirmar tu contraseña`);
                    hiddenLoad();
                    throw new Error(`El campo passwordC está vacío`);
                    break;
            }
        }
    });

    if (!validarFormulario())
        throw new Error("Hubo un error en los datos del formulario");

    if (valorRol())
        formData["rol"] = valorRol();
    else {
        dibujarPopAlerta("No has seleccionado el tipo de usuario");
        hiddenLoad();
        throw new Error("No se seleccionó el tipo de usuario");
    }
    console.log(formData)

    await registrar(formData);

    hiddenLoad();
});

function validarFormulario() {
    let c1 = document.querySelector("#Nom_registro").value;
    let c2 = document.querySelector("#Pat_registro").value;
    let c3 = document.querySelector("#Mat_registro").value;
    let c5 = document.querySelector("#Contra_registro").value;
    let c6 = document.querySelector("#ContraC_registro").value;

    if (c1.length < 2) {
        hiddenLoad();
        dibujarPopAlerta("Ingresa un nombre válido");
        return false;
    }
    if (c2.length < 2) {
        hiddenLoad();
        dibujarPopAlerta("Ingresa un apellido paterno válido");
        return false;
    }
    if (c3.length < 2) {
        hiddenLoad();
        dibujarPopAlerta("Ingresa un apellido materno válido");
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
    let d1 = document.querySelector("#Nom_registro");
    let d2 = document.querySelector("#Pat_registro");
    let d3 = document.querySelector("#Mat_registro");
    d1.onkeypress = function() { return sinEspecialesLetras(event) };
    d2.onkeypress = function() { return sinEspecialesLetras(event) };
    d3.onkeypress = function() { return sinEspecialesLetras(event) };
}

function valorRol() {
    let auxValor;
    let checkedValue = null;
    const inputElements = document.getElementsByClassName("rolCheckbox");

    for (let i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = inputElements[i].value;
            return checkedValue;
        }
    }
}

const main = async() => {
    localStorage.clear();
    dibujarNavBar(accesos, titulo);
    validarCampos();
    await tieneJWT();
}

main();
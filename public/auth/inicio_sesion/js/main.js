document.cookie = " ";
const miFormulario = document.querySelector('#form_inicio');
const alertas = document.querySelector("#alertas");
const titulo = "";
const accesos = [{
    'nombre': 'Registrar',
    'referencia': `auth/registro/`
}];

miFormulario.addEventListener('submit', async(ev) => {
    ev.preventDefault();
    showLoad();

    const formData = dataForm(miFormulario);

    const arrayInicio = Object.entries(formData);

    arrayInicio.forEach(campo => {
        if (campo[1] == "") {
            switch (campo[0]) {
                case "correo":
                    dibujarPopAlerta(`No has ingresado tu correo`);
                    hiddenLoad();
                    throw new Error(`El campo correo está vacío`);
                    break;
                case "password":
                    dibujarPopAlerta(`No has ingresado tu contraseña`);
                    hiddenLoad();
                    throw new Error(`El campo password está vacío`);
                    break;
            }
        }
    });

    if (!validarFormulario())
        throw new Error("Hubo un error en los datos del formulario");

    await iniciar(formData);

    hiddenLoad();
});

function validarFormulario() {
    let c1 = document.getElementById("Correo_inicio").value;
    let c2 = document.getElementById("Contra_inicio").value;

    if (c2.length != 6) {
        hiddenLoad();
        dibujarPopAlerta("La contraseña no es valida, debe ser de 6 caracteres");
        return false;
    }

    return true;
}

/*const validarCampos = () => {
    let c1 = document.getElementById("Correo_inicio").value;
    let c2 = document.getElementById("Contra_inicio").value;

    c1.onkeypress = function() { return sinEspecialesLetras(event) };
    c2.onkeypress = function() { return sinEspecialesLetras(event) };
}*/

const main = async() => {
    localStorage.clear();
    dibujarNavBar(accesos, titulo);
    validarCampos();
    await tieneJWT();
}

main();
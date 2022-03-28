document.cookie = " ";
const miFormulario = document.querySelector('#form_inicio');
const alertas = document.querySelector("#alertas");
const titulo = "";
const accesos = [
	{
		'nombre': 'Registrar',
		'referencia': `auth/registro/`
	}
];

miFormulario.addEventListener('submit', async(ev) => {
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

    await iniciar(formData);
    
    hiddenLoad();
});
  
function validarFormulario() {
    let c1 = document.getElementById("Correo_inicio").value;
    let c2 = document.getElementById("Contra_inicio").value;

    if(c1.length === 0 && c2.length === 0) {
        hiddenLoad();
        dibujarPopAlerta("No has ingresado ningún dato");
        return false;
    }else if(c1.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado el correo");
        return false;
    }else if(c2.length === 0){
        hiddenLoad();
        dibujarPopAlerta("No has ingresado la contraseña");
        return false;
    }

    if (c2.length != 6) {
        hiddenLoad();
        dibujarPopAlerta("La contraseña no es valida, debe ser de 6 caracteres");
        return false;
    }

    return true;
}

const main = async() => {
    dibujarNavBar(accesos, titulo);
    await tieneJWT();
}

main();
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

    if(!validarCamposVacios()){
        hiddenLoad();
        const msg = "Falta algún dato";
        dibujarPopAlerta(msg);
        throw new Error(msg);
    }

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }

    await iniciar(formData);
    
    hiddenLoad();
});

function validarCamposVacios() {
    var c1 = document.getElementById("Correo_inicio").value;
    var c2 = document.getElementById("Contra_inicio").value;

    if (c1.length === 0 || c2.length === 0) {
        return false;
    }
    return true;
}

const main = async() => {
    dibujarNavBar(accesos, titulo);
    await tieneJWT();
}

main();
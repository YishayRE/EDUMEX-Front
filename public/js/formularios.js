const dataForm = (formulario) => {
    const datosForm = {};

    for(let el of formulario.elements){
        if(el.name.length > 0){
            datosForm[el.name] = el.value.trim();
        }
    }

    return datosForm;
} 

const valForm = (datosForm) => {
    for (const key in datosForm) {
        if (Object.hasOwnProperty.call(datosForm, key)) {
            const element = datosForm[key];
            console.log(element);
            if(!element)
                return false;
        }
    }
    return true;
}

/*
if(!validarCamposVacios()){
        hiddenLoad();
        throw Error('Falta algun dato');
    }

    const formData = {};

    for(let el of miFormulario.elements){
        if(el.name.length > 0){
            formData[el.name] = el.value;
        }
    }
*/

/*
forof/forin
.foreach
.map
*/
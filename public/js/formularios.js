function validarFormulario(formulario) {
    var todoCorrecto = true;
    for (var i=0; i<formulario.length; i++) {
                    if(formulario[i].type =='text') {
                                   if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                                   console.log(formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
                                   todoCorrecto=false;
                                   }
    
                    }
    
    }
    if (todoCorrecto ==true) {formulario.submit();}
}

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
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

/*
forof/forin
.foreach
.map
*/
const validarVacios = (valoresForm) => {
    let estaCompleto = true;
    let camposVacios = [];
    for (const [nombre, valor] of Object.entries(valoresForm)) {
        if(valor == ""){
            camposVacios.push(`${nombre}`);
            estaCompleto = false;
        }
    }
    return {estaCompleto, camposVacios};
}

const validarVaciosAdivinanza = (valoresForm) => {
    let estaCompleto = true;
    let camposVacios = [];
    for (const [nombre, valor] of Object.entries(valoresForm)) {
        if(nombre.startsWith("imagen") && valor == ""){
            console.log("Las imagenes son opcionales");
        }else if(!(nombre.startsWith("imagen")) && valor == ""){
            camposVacios.push(`${nombre}`);
            estaCompleto = false;
        }
    }
    return {estaCompleto, camposVacios};
}
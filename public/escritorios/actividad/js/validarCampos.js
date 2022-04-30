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
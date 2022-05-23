const validarVacios = (valoresForm) => {
    let estaCompleto = true;
    let camposVacios = [];
    for (const [nombre, valor] of Object.entries(valoresForm)) {
        if (valor == "") {
            camposVacios.push(`${nombre}`);
            estaCompleto = false;
        }
    }
    return { estaCompleto, camposVacios };
}

const validarVaciosAdivinanza = (valoresForm) => {
    let estaCompleto = true;
    let camposVacios = [];

    for (const [nombre, valor] of Object.entries(valoresForm)) {
        if (nombre.startsWith("imagen") && valor == "") {
            console.log("Las imagenes son opcionales");
        } else if (!(nombre.startsWith("imagen")) && valor == "") {
            camposVacios.push(`${nombre}`);
            estaCompleto = false;
        }
    }
    return { estaCompleto, camposVacios };
}

const validarVaciosMemoria = (valoresForm) => {
    let estaCompleto = true;
    let camposVacios = [];

    for (const [index, valor] of Object.entries(valoresForm).entries()) {
        console.log(index, valor);
        if (Math.abs(index % 2) == 1) {
            if (valor[0].startsWith("imagen") && valor[1] == "")
                console.log("La segunda imagen es opcional");
            else if (!valor[0].startsWith("imagen") && valor[1] == "") {
                console.log("Este campo no puede estar vacío");
                estaCompleto = false;
            }
        } else {
            if (valor[1] == "") {
                camposVacios.push(`${valor[0]}`);
                estaCompleto = false;
            }
        }
        /*if (nombre.startsWith("imagen") && valor == "") {
            console.log("Las imagenes son opcionales");
        } else if (!(nombre.startsWith("imagen")) && valor == "") {
            camposVacios.push(`${nombre}`);
            estaCompleto = false;
        }*/
    }
    return { estaCompleto, camposVacios };
}
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

const validarVaciosTam = (valoresForm) => {
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
    const campos = [];

    for (const [nombre, valor] of Object.entries(valoresForm)) {
        if (nombre.startsWith("opcion")) {
            switch (valor) {
                case "PP":
                    campos.push("PP");
                    const numeroPP = parseInt(nombre.charAt(nombre.length - 1));
                    for (const [palabra, texto] of Object.entries(valoresForm)) {
                        if (palabra == `txt${numeroPP}` || palabra == `txt${numeroPP + 1}`) {
                            if (texto == "") {
                                return [];
                            }

                            campos.push(texto);
                        }
                    }
                    break;
                case "PI":
                    campos.push("PI");
                    const numeroPI = parseInt(nombre.charAt(nombre.length - 1));
                    for (const [palabra, texto] of Object.entries(valoresForm)) {
                        if (palabra == `txt${numeroPI}`) {
                            if (texto == "") {
                                return [];
                            }

                            campos.push(texto);
                        }
                        if (palabra == `imagen${numeroPI + 1}`) {
                            const imagenUrl = document.querySelector(`#cargaImagen${numeroPI + 1}`)
                            if (!imagenUrl.currentSrc.includes("cloudinary")) {
                                return [];
                            }

                            campos.push(imagenUrl.currentSrc);
                        }
                    }
                    break;
                case "II":
                    campos.push("II");
                    const numeroII = parseInt(nombre.charAt(nombre.length - 1));
                    for (const [palabra, texto] of Object.entries(valoresForm)) {
                        if (palabra == `imagen${numeroII}`) {
                            const imagenUrl = document.querySelector(`#cargaImagen${numeroII}`)
                            if (!imagenUrl.currentSrc.includes("cloudinary")) {
                                return [];
                            }

                            campos.push(imagenUrl.currentSrc);
                        }
                        if (palabra == `imagen${numeroII + 1}`) {
                            const imagenUrl = document.querySelector(`#cargaImagen${numeroII + 1}`)
                            if (!imagenUrl.currentSrc.includes("cloudinary")) {
                                return [];
                            }

                            campos.push(imagenUrl.currentSrc);
                        }
                    }
                    break;
            }
        }
    }
    return campos;
}
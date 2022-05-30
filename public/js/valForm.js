function soloLetras(e) {
    let key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toLowerCase(),
        letras = " abcdefABCDEF",
        especiales = [8],
        tecla_especial = false;

    for (let i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        console.log("Solo letras");
        return false;
    }
}

function soloNumeros(e) {
    let key = e.keyCode || e.which,
        tecla = String.fromCharCode(key),
        numeros = " 123456",
        especiales = [8],
        tecla_especial = false;

    for (let i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
        console.log("Solo numeros");
        return false;
    }
}

function sinEspeciales(e) {
    let key = e.keyCode || e.which,
        tecla = String.fromCharCode(key),
        especiales1 = " 0123456789áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        especiales2 = [8],
        tecla_especial = false;

    for (let i in especiales2) {
        if (key == especiales2[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (especiales1.indexOf(tecla) == -1 && !tecla_especial) {
        console.log("sin especiales");
        return false;
    }
}

function sinEspecialesLetras(e) {
    let key = e.keyCode || e.which,
        tecla = String.fromCharCode(key),
        especiales1 = " áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        especiales2 = [8],
        tecla_especial = false;

    for (let i in especiales2) {
        if (key == especiales2[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (especiales1.indexOf(tecla) == -1 && !tecla_especial) {
        console.log("solo letras sin especiales");
        return false;
    }
}
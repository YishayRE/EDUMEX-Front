let acomodados = 0;
let respuestas = '';
let elementSelect = 0;
let currentX = 0;
let currentY = 0;
let currentPosx = 0;
let currentPosy = 0;
let entorno;
let win;
let piezas;
let origX = [];
let origY = [];

function seleccionarElemento(evt) {
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {
    let dx = evt.clientX - currentX;
    let dy = evt.clientY - currentY;
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    elementSelect.setAttribute("x", currentPosx);
    elementSelect.setAttribute("y", currentPosy);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    iman();
}

function deseleccionarElemento(evt) {
    testing();
    if (elementSelect != 0) {
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

function reordenar(evt) {
    let padre = evt.target.parentNode;
    let clone = padre.cloneNode(true);
    let id = padre.getAttribute("id");
    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
}

function iman() {
    for (let i = 0; i < piezas.length; i++) {
        if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

function testing() {
    let bien_ubicada = 0;
    let padres = document.getElementsByClassName('padre');
    respuestas = "";

    origX.forEach((x, indexA) => {
        for (let i = 0; i < piezas.length; i++) {
            let posx = parseFloat(padres[i].firstChild.getAttribute("x"));
            let posy = parseFloat(padres[i].firstChild.getAttribute("y"));

            if (x === posx && origY[indexA] === posy) {
                respuestas += padres[i].attributes.id.value;
                bien_ubicada++;
            }
        }
    });

    if (bien_ubicada === piezas.length) {
        win.play();
        acomodados = 1;
    } else {
        respuestas = ""
        acomodados = 0;
    }

    console.log(respuestas);
    console.log(acomodados);
}

const draggable = () => {
    piezas = document.getElementsByClassName('movil');
    entorno = document.getElementById('entorno');
    win = document.getElementById("win");
    const avanceX = parseInt(piezas[0].style.width.substring(0, piezas[0].style.width.length - 2));
    const avanceY = parseInt(piezas[0].style.height.substring(0, piezas[0].style.width.length - 2));
    const imgX = parseInt(document.querySelector("image").attributes.width.value);
    const imgY = parseInt(document.querySelector("image").attributes.height.value);
    const piezasX = imgX / avanceX;
    const piezasY = imgY / avanceY;

    for (let i = 0; i < piezas.length; i++) {
        piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
        piezas[i].setAttribute("y", Math.floor((Math.random() * imgY) + 1));
        piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
    }

    let bandY = 50;
    let bandX = avanceX;

    for (let i = 0; i < piezasY; i++) {
        bandX = avanceX;
        for (let j = 0; j < piezasX; j++) {
            origX.push(bandX);
            origY.push(bandY);
            bandX = bandX + avanceX
        }
        bandY = bandY + avanceY
    }
}
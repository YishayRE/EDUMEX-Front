let overlayPop = "";
let botonPop = "";
const emergentes = document.querySelector("#emergentes");
const footerDiv = document.querySelector("#footer");

const datosPop = [{
        'nombre': 'Nosotros',
    },
    {
        'nombre': 'Contáctanos',
    },
    {
        'nombre': 'Manual',
    }
];

const dibujarFooter = () => {
    let footerHtml = '';

    footerHtml += `
        <input type="checkbox" id="select" name="select">
        <label for="select" class="selectbtn" id="menuFoot">
                <i class="flecha"><img src="./images/information.png" alt="EDUMEX" class="logo"></i>
        </label>
        <ul class="opciones">
            <li><a id="nosotros" href>Nosotros</a></li>
            <li><a id="contacto" href>Contactanos</a></li>
            <li><a id="manual" href>¿Cómo usar la plataforma?</a></li>
        </ul>
    `;
    footerDiv.innerHTML = footerHtml;
}

const dibujarPopFooter = () => {
    let popFooterHtml = '';

    datosPop.forEach(({ nombre }, index) => {
        popFooterHtml += `
        <div id="popFooter${index+1}" class="overlay">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close" id="close${index+1}">&times;</a>

                <div class="content">
        `;
        if (nombre === "Nosotros") {
            popFooterHtml += `
                        <div class="center">
                            <div class="contTexto">
                                <div>
                                    <img src="${baseUrl}/images/nosotros.png" alt="¿Quienes sómos?" class="imgTexto">
                                </div>
                            </div>
                        </div>    
        `;
        } else if (nombre === "Contáctanos") {
            popFooterHtml += `
                        <div class="center">
                            <div>
                                <div class="elementFooter">
                                    <img src="${baseUrl}/images/telephone-call.png" alt="Telefono" class="imgFooter">
                                    <h2>55 - 1234 - 5678</h2>
                                </div>
                                <div class="elementFooter">
                                    <img src="${baseUrl}/images/email.png" alt="Correo" class="imgFooter">
                                    <h2>edumex@edu.mx</h2>
                                </div>
                            </div>
                        </div>
    `;
        } else if (nombre === "Manual") {
            popFooterHtml += `
                        <div class="center">
                            <div class="opcionesManual">
                                <div class="elementFooter2">
                                    <h2>Video explicativo</h2>
                                    <img src="${baseUrl}/images/video.png" alt="Video" class="imgFooter2">
                                </div>
                            </div>
                        </div>
            `;
        }
        popFooterHtml += `
                </div>
            </div>
        </div>
    `;
        aux = 1;
    });

    emergentes.innerHTML = popFooterHtml;

    const overlay = document.querySelector(".overlay");
    const overlayPop1 = document.querySelector("#popFooter1");
    const overlayPop2 = document.querySelector("#popFooter2");
    const overlayPop3 = document.querySelector("#popFooter3");

    const botonClose1 = document.querySelector("#close1");
    const botonClose2 = document.querySelector("#close2");
    const botonClose3 = document.querySelector("#close3");

    const botonPop1 = document.querySelector("#nosotros");
    const botonPop2 = document.querySelector("#contacto");
    const botonPop3 = document.querySelector("#manual");


    botonPop1.addEventListener('click', (event) => {
        event.preventDefault();
        showPop(overlayPop1);
    });

    botonPop2.addEventListener('click', (event) => {
        event.preventDefault();
        showPop(overlayPop2);
    });

    botonPop3.addEventListener('click', (event) => {
        event.preventDefault();
        showPop(overlayPop3);
    });

    botonClose1.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop(overlayPop1);
    });

    botonClose2.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop(overlayPop2);
    });

    botonClose3.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop(overlayPop3);
    });

    overlayPop1.addEventListener('click', (event) => {
        if (event.target == overlayPop1) {
            hiddenPop(overlayPop1);
        }
    });

    overlayPop2.addEventListener('click', (event) => {
        if (event.target == overlayPop2) {
            hiddenPop(overlayPop2);
        }
    });

    overlayPop3.addEventListener('click', (event) => {
        if (event.target == overlayPop3) {
            hiddenPop(overlayPop3);
        }
    });

}

function showPop(overlayPop) {
    overlayPop.style.opacity = "1";
    overlayPop.style.visibility = "visible";
}

function hiddenPop(overlayPop) {
    overlayPop.style.opacity = "0";
    overlayPop.style.visibility = "hidden";
}
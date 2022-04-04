let overlayPop = "";
let botonPop = "";
const emergentes =  document.querySelector("#emergentes");
const footerDiv = document.querySelector("#footer");

const datosPop = [
    {
        'nombre': 'Nosotros',
    },
    {
        'nombre': 'Contáctanos',
    },
    {
        'nombre': 'Manual',
    },
    {
        'nombre': 'T&C',
    },
    {
        'nombre': 'Políticas',
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
            <li><a id="manual" href>Manual</a></li>
            <li><a id="tc" href>T&C</a></li>
            <li><a id="politics" href>Políticas</a></li>
        </ul>
    `;
    footerDiv.innerHTML = footerHtml;
}

const dibujarPopFooter = () => {
    let popFooterHtml = '';
    
    datosPop.forEach(({ nombre },index) => {
        popFooterHtml += `
        <div id="popFooter${index+1}" class="overlay">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close" id="close${index+1}">&times;</a>

                <div class="content">
        `;
    if(nombre === "Nosotros"){
        popFooterHtml += `
                        <div class="center">
                            <div class="contTexto">
                                <div>
                                    <img src="${baseUrl}/images/nosotros.png" alt="¿Quienes sómos?" class="imgTexto">
                                </div>
                            </div>
                        </div>    
        `;
    }else if(nombre === "Contáctanos"){
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
    }else if(nombre === "Manual"){
        popFooterHtml += `
                        <div class="center">
                            <div class="opcionesManual">
                                <div class="elementFooter2">
                                    <h2>Manual</h2>
                                    <img src="${baseUrl}/images/manual.png" alt="Manual" class="imgFooter2">
                                </div>
                                <div class="elementFooter2">
                                    <h2>Video explicativo</h2>
                                    <img src="${baseUrl}/images/video.png" alt="Video" class="imgFooter2">
                                </div>
                            </div>
                        </div>
    `;
    }else if(nombre === "T&C"){
        popFooterHtml += `
                        <div class="center">
                            <div>
                                <div class="elementFooter">
                                    <h2>Terminos y Condiciones</h2>
                                    <img src="${baseUrl}/images/download-pdf.png" alt="T&C" class="imgFooter2">
                                </div>
                            </div>
                        </div>
    `;
    }else if(nombre === "Políticas"){
        popFooterHtml += `
                        <div class="center">
                            <div>
                                <div class="elementFooter2">
                                    <h2>Politicas de privacidad</h2>
                                    <img src="${baseUrl}/images/download-pdf.png" alt="Politicas" class="imgFooter2">
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
        aux=1;
    });

    emergentes.innerHTML = popFooterHtml;

    const overlay = document.querySelector(".overlay");

    const botonClose1 = document.querySelector("#close1");
    const botonClose2 = document.querySelector("#close2");
    const botonClose3 = document.querySelector("#close3");
    const botonClose4 = document.querySelector("#close4");
    const botonClose5 = document.querySelector("#close5");


    const botonPop1 = document.querySelector("#nosotros");
    const botonPop2 = document.querySelector("#contacto");
    const botonPop3 = document.querySelector("#manual");
    const botonPop4 = document.querySelector("#tc");
    const botonPop5 = document.querySelector("#politics");


    botonPop1.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter1");
        showPop(overlayPop);
    });

    botonPop2.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter2");
        showPop(overlayPop);
    });

    botonPop3.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter3");
        showPop(overlayPop);
    });

    botonPop4.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter4");
        showPop(overlayPop);
    });

    botonPop5.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter5");
        showPop(overlayPop);
    });

    botonClose1.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter1");
        hiddenPop(overlayPop);
    });

    botonClose2.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter2");
        hiddenPop(overlayPop);
    });

    botonClose3.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter3");
        hiddenPop(overlayPop);
    });

    botonClose4.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter4");
        hiddenPop(overlayPop);
    });

    botonClose5.addEventListener('click', (event) => {
        event.preventDefault();
        overlayPop = document.querySelector("#popFooter5");
        hiddenPop(overlayPop);
    });

    overlay.addEventListener('click', (event) => {
        if(event.target == overlayPop){
            hiddenPop();
        }
    });    
}

function showPop(overlayPop) {
    overlayPop.style.opacity = "1";
    overlayPop.style.visibility = "visible";
}

function hiddenPop(overlayPop){
    overlayPop.style.opacity = "0";
    overlayPop.style.visibility = "hidden";
}
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
                                <h3>
                                    Somos una empresa enfocada en el avance tecnológico para las escuelas del páis.<br> 
                                    A medida que el tiempo avanza hemos observado que la mayoría de la escuelas en méxico no cuentan 
                                    con sistemas que les permitan digitalizar los conocimientos y materiales que se usan en el aula, por lo que
                                    nos dimos a la tarea de crear un sistema que ofreciera las herramientas necesarias que un profesor necesita, para poder
                                    extender sus clases de manera virtual mediante la creación y uso de juegos didácticos, con los que un niño pueda entender de mejor manera
                                    lo aprendido en clase.
                                </h3>
                            </div>
                        </div>    
        `;
    }else if(nombre === "Contáctanos"){
        popFooterHtml += `
                        <div class="center">
                            <div>
                                <div class="elementFooter">
                                    <img src="${baseUrl}/images/telephone-call.png" alt="Telefono" class="imgFooter">
                                    <h2>Tel: 55 - 1234 - 5678</h2>
                                </div>
                                <div class="elementFooter">
                                    <img src="${baseUrl}/images/email.png" alt="Correo" class="imgFooter">
                                    <h2>EDUMEX@edu.com.mx</h2>
                                </div>
                            </div>
                        </div>
    `;
    }else if(nombre === "Manual"){
        popFooterHtml += `
                        <div class="center">
                            <div>
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
                            <div class="contTexto">
                                <h3 id=textoPol>
                                EDUMEX Inc. ("EDUMEX") opera cada sitio web ("Sitio") que enlaza con estos Términos de uso para brindar acceso en línea a información sobre EDUMEX y los productos, servicios y oportunidades que brindamos. <br>
                                El uso del Servicio de EDUMEX se rige por nuestros Términos de servicio para clientes, disponibles en http://legal.EDUMEX.com/terms-of-service/ <br>

                                Al acceder y utilizar el Sitio, usted acepta estos Términos de uso. <br>
                                
                                EDUMEX se reserva el derecho de modificar estos Términos de uso en cualquier momento sin previo aviso. Su uso del Sitio después de cualquier modificación constituye su acuerdo de seguir y estar sujeto a estos Términos de uso modificados. <br> La última fecha en que se revisaron estos Términos de uso se establece a continuación. <br>
                                
                                1. Uso Permitido del Sitio <br>
                                
                                Puede usar el Sitio y la información, los escritos, las imágenes y/u otros trabajos que vea, escuche o experimente de otro modo en el Sitio (individual o colectivamente, el "Contenido") únicamente para sus fines personales no comerciales y/ o para conocer los productos y servicios de EDUMEX, y únicamente de conformidad con estos Términos de uso. <br>
                                
                                2. Uso Prohibido del Sitio <br>
                                
                                Al acceder al Sitio, usted acepta que no: <br>
                                
                                Usar el Sitio en violación de estos Términos de uso; <br>
                                <br>•	Usar el Sitio en violación de los términos de la Política de uso aceptable de EDUMEX en http://legal.EDUMEX.com/acceptable-use/.
                                <br>•	Copiar, modificar, crear un trabajo derivado, realizar ingeniería inversa o ensamblar de forma inversa el Sitio, o intentar descubrir cualquier código fuente, o permitir que un tercero lo haga;
                                <br>•	Vender, ceder, sublicenciar, distribuir, explotar comercialmente, otorgar un derecho de garantía o transferir cualquier derecho, o poner a disposición de un tercero, el Contenido o el Servicio de cualquier manera;
                                <br>•	Usar o iniciar cualquier sistema automatizado, incluidos, entre otros, "robots", "arañas" o "lectores sin conexión", que acceden al Sitio de una manera que envía más mensajes de solicitud a los servidores de EDUMEX en un período de tiempo determinado que un ser humano. puede producir razonablemente en el mismo período utilizando un navegador web en línea convencional;
                                <br>•	Usar el Sitio de cualquier manera que dañe, deshabilite, sobrecargue o perjudique cualquier sitio web de EDUMEX o interfiera con el uso y disfrute del Sitio por parte de terceros;
                                <br>•	Reflejar o enmarcar el Sitio o cualquier parte del mismo en cualquier otro sitio web o página web.
                                <br>•	Intentar obtener acceso no autorizado al Sitio;
                                <br>•	Acceder al Sitio por cualquier medio que no sea a través de la interfaz proporcionada por EDUMEX para acceder al Sitio;
                                <br>•	Usar el Sitio para cualquier propósito o de cualquier manera que sea ilegal o esté prohibida por este Acuerdo.
                                <br>•	Cualquier uso no autorizado de cualquier Contenido o del Sitio puede violar patentes, derechos de autor, marcas registradas y otras leyes.
                                3. Derechos de autor y marcas registradas <br>
                                El Sitio se basa en la tecnología patentada de EDUMEX e incluye el Contenido. El Sitio está protegido por la propiedad intelectual aplicable y otras leyes, incluidas las leyes de marcas registradas y derechos de autor. El Sitio, incluidos todos los derechos de propiedad intelectual en el Sitio, pertenece y es propiedad de EDUMEX o sus licenciantes (si corresponde). EDUMEX posee y retiene todos los derechos de autor del Contenido. <br> Salvo que se permita específicamente en el Sitio en cuanto a cierto Contenido, el Contenido no puede copiarse, reproducirse, modificarse, publicarse, cargarse, publicarse, transmitirse, ejecutarse o distribuirse de ninguna manera, y usted acepta no modificar, alquilar, arrendar, prestar, vender, distribuir, transmitir, transmitir o crear trabajos derivados basados en el Contenido o el Sitio, en su totalidad o en parte, por cualquier medio. EDUMEX, el diseño Sprocket, los logotipos de EDUMEX y otras marcas utilizadas por EDUMEX de vez en cuando son marcas comerciales y propiedad de EDUMEX. <br> La apariencia, el diseño, la combinación de colores y el diseño del sitio de EDUMEX.com son imágenes comerciales protegidas. El cliente no recibe ningún derecho o licencia para usar lo anterior. EDUMEX puede usar e incorporar en el Sitio o el Servicio de EDUMEX cualquier sugerencia u otro comentario que proporcione, sin pago ni condición.
                                De conformidad con el Título 17, Código de los Estados Unidos, Sección 512(c)(2), las notificaciones de reclamos de infracción de derechos de autor en el Sitio o el Servicio deben enviarse al Agente de derechos de autor designado por EDUMEX. Consulte las instrucciones de Reclamaciones de infracción de derechos de autor a continuación.
                                4. Información y materiales que publica o proporciona <br>
                                Declaras que tienes todos los derechos, títulos e intereses sobre los materiales que publicas en el Sitio o proporcionas a EDUMEX ("Materiales"), incluidos, entre otros, cualquier consentimiento, autorización, liberación, autorización o licencia de cualquier tercero (como como, pero no limitado a, cualquier liberación relacionada con los derechos de privacidad o publicidad) necesaria para que usted proporcione, publique, cargue, ingrese o envíe los Materiales, y que la publicación de dichos Materiales no viola ni constituye la infracción de ninguna patente, derecho de autor , marca registrada, secreto comercial, derecho de privacidad, derecho de publicidad, derechos morales u otro derecho de propiedad intelectual reconocido por cualquier jurisdicción aplicable de cualquier persona o entidad, o que de otro modo constituya el incumplimiento de cualquier acuerdo con cualquier otra persona o entidad. Además, declara y garantiza que no ha enviado información ficticia, falsa o inexacta sobre usted, y que toda la información contenida en los Materiales publicados es verdadera y su propio trabajo o el trabajo que está autorizado a enviar, y que los Materiales publicados no contienen ninguna amenaza, acoso, calumnioso, falso, difamatorio, ofensivo, obsceno o pornográfico, material u otro material que violaría cualquier otra ley o regulación aplicable. <br> Usted acepta que no proporcionará información material y engañosa a sabiendas y con la intención de defraudar. Usted declara y garantiza que los Materiales que proporciona no violan estos Términos de uso.
                                </h3>
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
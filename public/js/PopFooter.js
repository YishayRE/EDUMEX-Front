let overlayPop = "";
let botonPop = "";
const emergentes =  document.querySelector("#emergentes");

const datosPop = [
    {
        'nombre': 'Nosotros',
    },
    {
        'nombre': 'Contactanos',
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
            <li><a id="nosotros" href="">Nosotros</a></li>
            <li><a id="contacto" href="">Contactanos</a></li>
            <li><a id="manual" href="">Manual</a></li>
            <li><a id="tc" href="">T&C</a></li>
            <li><a id="politicas" href="">Políticas</a></li>
        </ul>
    `;
    navBar.innerHTML = navBarHtml;
}

const dibujarPopFooter = () => {
    let popFooterHtml = '';
    
    datosPop.forEach(({ nombre },index) => {
        popFooterHtml += `
        <div id="popFooter${index+1}" class="overlay">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close">&times;</a>

                <div class="content">
        `;
    if(nombre === "Nosotros"){
        popFooterHtml += `
                        <div class="inputbox">

                        </div>    
        `;
    }else if(nombre === "Contáctanos"){
        popFooterHtml += `
                        <div class="inputbox">

                        </div>
    `;
    }else if(nombre === "Manual"){
        popFooterHtml += `
                        <div class="inputbox">

                        </div>
    `;
    }else if(nombre === "T&C"){
        popFooterHtml += `
                        <div class="inputbox">

                        </div>
    `;
    }else if(nombre === "Políticas"){
        popFooterHtml += `
                        <div class="inputbox">

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

    overlay = document.querySelector(".overlay");
    botonClose = document.querySelector(".close");

    botonPop1 = document.querySelector("#nosotros");
    botonPop2 = document.querySelector("#contacto");
    botonPop3 = document.querySelector("#manual");
    botonPop4 = document.querySelector("#tc");
    botonPop5 = document.querySelector("#politicas");


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

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop();
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

function hiddenPop(){
    overlayPop.style.opacity = "0";
    overlayPop.style.visibility = "hidden";
}
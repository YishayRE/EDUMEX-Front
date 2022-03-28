const dibujarNavBar = (accesos = [], titulo, url) => {
    let navBarHtml = '';
    let extraHtml = '';
    let i = null;
    const role = (rol === 'PRO_ROLE')
        ? 'pro'
        : 'est';

    navBarHtml += `
        <nav id=barraNav>
            <input type="checkbox" id="check">

            <div id="titulo">
                <h2>${titulo}</h2>
            </div>

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>
    `;
        if(titulo == 'Escritorio Principal'){
            navBarHtml += `
            <div class="enlace">
                <img src="${baseUrl}/images/logoPNG.png" alt="EDUMEX" class="logo">
            </div>
            `;
        }else{
            navBarHtml += `
            <div class="enlace" id="regresar">
                <img src="${baseUrl}/images/atras.png" alt="Regresar" class="logo">
            </div>
            `;
        }
        navBarHtml += `
            <ul id="lista">
        `;

    accesos.forEach(({ nombre, referencia },index) => {
        if(titulo.startsWith('Grupo') && nombre == "Activar Grupo"){
            switch (disponibleGrupo) {
                case true:
                    extraHtml += `
                    <li>
                        <a id="${role}${index}" href class="botonesNav">
                            <div class="activar">
                                <img src="${baseUrl}/images/switch-on.png" alt="Activar grupo" class="logoBoton">
                            </div>
                        </a>
                    </li>
                    `;
                    break;
                case false:
                    extraHtml += `
                    <li>
                        <a id="${role}${index}" href class="botonesNav">
                            <div class="activar">
                                <img src="${baseUrl}/images/switch-off.png" alt="Activar grupo" class="logoBoton">
                            </div>
                        </a>
                    </li>
                    `;
                    break;
                default:
                    break;
            }
            
            navBarHtml += extraHtml;
        }else{
            navBarHtml += `
                <li><a id="${role}${index}" href="${referencia}" class="botonesNav">${nombre}</a></li>
            `;
        }
    });
    
    navBarHtml += `
                <li><a id="logout" href class="botonesNav">Salir</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = navBarHtml;

    if(titulo != 'Escritorio Principal'){
        const btnRegresar = document.querySelector('#regresar');
        btnRegresar.addEventListener('click', e => {
            window.location.replace(`${escritoriosUrl}${url}`);
        });
    }

    const lista = document.querySelector("#lista");

    if(titulo.startsWith('Grupo')){
        i = 1;
        let grupoActual = new Object();
        grupoActual.disponible = !disponibleGrupo;

        activar = document.querySelector('#pro0');
        activar.addEventListener('click', (event) =>{
            event.preventDefault();
            console.log(grupoActual);
            activarGrupo(grupoActual, localStorage.getItem('grupo'));
        });
    }else{
        i = 0;
    }

    for(i; i < (lista.children.length - 1); i++){
        document.querySelector(`#${role}${i}`).addEventListener('click', (event) => {
            event.preventDefault();
            showPop();
        });
    }
}

const colorNav = (color) => {
    let barraNav = document.querySelector("#barraNav");
    let fondo = hexToRgbA(color);

    barraNav.style.background = `${fondo}`;
    barraNav.style.borderColor = `${color}`;
}
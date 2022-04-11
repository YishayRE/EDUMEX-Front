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
                <h3>${titulo}</h3>
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
        if(nombre == "Calificaciones"){
            navBarHtml += `
                <li>
                    <a id="${role}${index}" href class="botonesNav">
                        <div class="activar">
                            <img src="${baseUrl}/images/calificaciones.png" alt="Calificaciones" class="logoBoton">
                        </div>
                    </a>
                </li>
            `;
        }
        else if(titulo.startsWith('Grupo') && nombre == "Activar Grupo" && rol === 'PRO_ROLE'){
            switch (disponibleGrupo) {
                case true:
                    extraHtml += `
                    <li>
                        <a id="${role}${index}" href class="botonesNav">
                            <div class="activar">
                                <img src="${baseUrl}/images/activado.png" alt="Activar grupo" class="logoBoton">
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
                                <img src="${baseUrl}/images/desactivado.png" alt="Activar grupo" class="logoBoton">
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

    if(titulo.startsWith('Grupo') && rol === 'PRO_ROLE'){
        i = 2;
        let grupoActual = new Object();
        grupoActual.disponible = !disponibleGrupo;

        activar = document.querySelector('#pro1');
        activar.style.padding = "10px 70px";
        calificaciones = document.querySelector('#pro0');
        calificaciones.style.padding = "10px 60px 10px 70px";
        
        activar.addEventListener('click', async(event) =>{
            event.preventDefault();
            const {codigo} = await activarGrupo(grupoActual, localStorage.getItem('grupo'));
            if(disponibleGrupo == false){
                dibujarPopAlerta("codGrupo", codigo);
            }
            else{
                location.reload();
            }
            
        });
    }else if(titulo.startsWith('Materia')){
        calificaciones = document.querySelector('#pro0');
        calificaciones.style.padding = "10px 60px 10px 70px";
        i = 1;
    }else{
        i = 0;
    }

    const lista = document.querySelector("#lista");

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
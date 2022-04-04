const alertPop = document.querySelector("#popAlert");
let overlayAlert = "";

const dibujarPopAlertas = (errors = []) => {
    let popAlertaHtml = '';

        popAlertaHtml += `
        <div id="popError" class="overlayAlerta">
            <div class="popupAlerta">
                <h2>Aviso</h2>

                <a class="close" href="#">&times;</a>

                <div class="contentAlerta">
                    <div class="centerAlerta" id="infoAlerta">
                        <div class="alertas">
        `;
        errors.forEach((err,index) => { 
            popAlertaHtml += `
                    <h2>${err}</h2>
            `;
        });
        popAlertaHtml += `
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        `;  
        aux=1;
    alertPop.innerHTML = popAlertaHtml;
    porError = document.getElementById('popError');
    showAlert();
}

const dibujarPopAlerta = (err, route) => {
    let popAlertaHtml = '';
        popAlertaHtml += `
        <div id="popError" class="overlayAlerta">
            <div class="popupAlerta">
                <h2>Aviso</h2>

                <a class="close" href="">&times;</a>

                <div class="contentAlerta">
                    <div class="centerAlerta" id="infoAlerta">
                        <div class="alertas">
        `;
        switch (err) {
            case 'salir':
                popAlertaHtml += `
                            <h2>¿Seguro que quieres salir?</h2>
                            <div>
                                <button id="logoutC" href="">Salir</button>
                            </div>
                `; 
                break;
            case 'eliminar':
                popAlertaHtml += `
                            <h2>¿Seguro que quieres eliminarlo?</h2>
                            <div>
                                <button id="eliminarC" href="">Eliminar</button>
                            </div>
                `; 
                break;
            case 'codGrupo':
                popAlertaHtml += `
                            <h2>El código del grupo es:</h2>
                            <h3>${route}</h3>
                            <div>
                                <button id="aceptarAct" href="">Aceptar</button>
                            </div>
                `; 
                break;
            default:
                popAlertaHtml += `
                            <h2>${err}</h2>
                `; 
                break;
        }
        popAlertaHtml += `
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        `;  
        aux=1;
    alertPop.innerHTML = popAlertaHtml;
    overlayAlert = document.getElementById('popError');
    botonClose = document.querySelector(".close");

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenAlert();
    });

    overlayAlert.addEventListener('click', (event) => {
        if(event.target == overlayAlert){
            hiddenAlert();
        }
    });
    
    showAlert();

    switch (err) {
        case 'salir':
            const btnSalir = document.querySelector('#logoutC');
            btnSalir.addEventListener('click', e => {
                localStorage.removeItem('token');
                localStorage.clear();
                window.location = `${baseUrl}`;
            });
            break;
        case 'eliminar':
            const btnEliminar = document.querySelector('#eliminarC');
            btnEliminar.addEventListener('click', async(e) => {
                e.preventDefault();
                showLoad();
                await elimTarjeta(route);
                hiddenLoad();
            });
            break;
        case 'codGrupo':
            const btnAceptar = document.querySelector('#aceptarAct');
            btnAceptar.addEventListener('click', async(e) => {
                e.preventDefault();
                location.reload();
            });
            break;
        default:
            break;
    }
}

function showAlert() {
    overlayAlert.style.opacity = "1";
    overlayAlert.style.visibility = "visible"
}

function hiddenAlert() {
    overlayAlert.style.opacity = "0";
    overlayAlert.style.visibility = "hidden"
}
    

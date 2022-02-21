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

const dibujarPopAlerta = (err) => {
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
        if(err == "salir"){
            popAlertaHtml += `
                            <h2>¿Seguro que quieres salir?</h2>
                            <div>
                                <button id="logoutC" href="">Salir</button>
                            </div>
            `; 
        }else{
            popAlertaHtml += `
                            <h2>${err}</h2>
            `; 
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
    if(err == "salir"){
        const btnSalir = document.querySelector('#logoutC');
        btnSalir.addEventListener('click', e => {
            localStorage.removeItem('token');
            window.location = `${baseUrl}`;
        });
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
    

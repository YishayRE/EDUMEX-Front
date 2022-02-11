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

                <a class="close" href="#">&times;</a>

                <div class="contentAlerta">
                    <div class="centerAlerta" id="infoAlerta">
                        <div class="alertas">
        `;
        popAlertaHtml += `
                            <h2>${err}</h2>
        `;
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

    overlayAlert.addEventListener('click', (event) => {
        hiddenAlert();
    });
    
    showAlert();
}

function showAlert() {
    overlayAlert.style.opacity = "1";
}

function hiddenAlert() {
    overlayAlert.style.opacity = "0";
}
    

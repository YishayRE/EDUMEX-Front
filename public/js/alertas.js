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
    errors.forEach((err, index) => {
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
    aux = 1;
    alertPop.innerHTML = popAlertaHtml;
    porError = document.getElementById('popError');
    showAlert();
}

const dibujarPopAlerta = (err, route, idT) => {
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
                            <div class="elementosBox" id="elementosCod">
                                <div>
                                    <h2>El código del grupo es:</h2>
                                    <textarea id="codGrupo">${route}</textarea>
                                </div>
                                <div id="copiarCodigo" class="clipboard">
                                    <img src="${baseUrl}/images/paste.png" alt="Activar grupo" class="logoBoton">
                                </div>
                            </div>
                            <div>
                                <button id="aceptarAct" href="">Aceptar</button>
                            </div>
                `;
            break;
        case 'aciertos':
            popAlertaHtml += `
                            <h2>${route}</h2>
                            <div class="centrarBotones">
                                <button class="botonesAfinados" id="continuarC" href="">Continuar</button>
                                <button class="botonesAfinados" id="salirC" href="">Salir</button>
                            </div>
                `;
            break;
        case 'listaEst':
            popAlertaHtml += `
                    <h2>Inscritos</h2>
                    <div id="listaCompleta">
                `;
            console.log(idT.length);
            if (idT.length > 0) {
                idT.forEach((alumno, index) => {
                    popAlertaHtml += `
                            <div class="elementosBox" id="estudianteLista${alumno.inscripcion}">
                                <label class="nomAlumno">${alumno.nombreC}</label> 
                                <div id="quitarEst">
                                    <img src="${baseUrl}/images/remove.png" alt="Quitar estudiante" class="logoBoton">
                                </div>
                            </div>
                        `;
                });
            } else {
                popAlertaHtml += `
                            <div class="elementosBox">
                                <h2>Este grupo no tiene estudiantes inscritos</h2> 
                            </div>
                    `;
            }
            popAlertaHtml += `
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
    aux = 1;
    alertPop.innerHTML = popAlertaHtml;

    overlayAlert = document.getElementById('popError');
    botonClose = document.querySelector(".close");

    if (idT == "desactivarOverlay") {
        botonClose.style.visibility = "hidden";
    } else {
        botonClose.addEventListener('click', (event) => {
            event.preventDefault();
            hiddenAlert();
        });

        overlayAlert.addEventListener('click', (event) => {
            if (event.target == overlayAlert) {
                hiddenAlert();
            }
        });
    }

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
                await elimTarjeta(route, idT);
                hiddenLoad();
            });
            break;
        case 'codGrupo':
            const copiarCodigo = document.querySelector('#copiarCodigo');
            copiarCodigo.addEventListener('click', function(event) {
                let copytextCod = document.querySelector('#codGrupo');
                copytextCod.focus();
                copytextCod.select();

                try {
                    let successful = document.execCommand('copy');
                    let msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Copying text command was ' + msg);
                } catch (err) {
                    console.log('Oops, unable to copy');
                }
            });
            const btnAceptar = document.querySelector('#aceptarAct');
            btnAceptar.addEventListener('click', async(e) => {
                e.preventDefault();
                location.reload();
            });
            break;
        case 'aciertos':
            const btnContinuarC = document.querySelector('#continuarC');
            const btnSalirC = document.querySelector('#salirC');
            btnContinuarC.addEventListener('click', async(e) => {
                e.preventDefault();
                hiddenAlert();
                location.reload();
            });
            btnSalirC.addEventListener('click', async(e) => {
                e.preventDefault();
                window.location.replace(`${escritoriosUrl}materia`);
            });
            break;
        case 'listaEst':
            const btnQuitarEst = document.querySelectorAll('#quitarEst');

            btnQuitarEst.forEach((quitar, index) => {
                quitar.addEventListener('click', async(e) => {
                    e.preventDefault();
                    showLoad();
                    await elimTarjeta(route, idT[index].inscripcion);
                    const elemEliminado = document.getElementById(`estudianteLista${idT[index].inscripcion}`);
                    elemEliminado.style.display = "none";
                    hiddenLoad();
                });
            });
            break;
        default:
            break;
    }
}

function showAlert() {
    overlayAlert.style.opacity = "1";
    overlayAlert.style.visibility = "visible"
    overlayAlert.style.display = "block"
}

function hiddenAlert() {
    overlayAlert.style.opacity = "0";
    overlayAlert.style.visibility = "hidden"
    overlayAlert.style.display = "none"
}
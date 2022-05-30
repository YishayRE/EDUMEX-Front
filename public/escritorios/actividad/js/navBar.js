const navBar = document.querySelector('#navBar');
const juegoId = localStorage.getItem('juego');

const dibujarNavBar = (accesos = [], tipoJuego, url) => {
    let navBarHtml = '';

    navBarHtml += `
        <nav id="barraNav">
            <input type="checkbox" id="check">

            <div id="titulo">
    `;
    if (tipoJuego == "tamanos") {
        navBarHtml += `
                <h3>Tamaños y Formas</h3>
        `;
    } else {
        navBarHtml += `
                <h3>${tipoJuego}</h3>
        `;
    }
    navBarHtml += `
            </div>

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>
    `;

    navBarHtml += `
        <div class="enlace" id="regresar">
            <img src="${baseUrl}/images/atras.png" alt="Regresar" class="logo">
        </div>

        <ul>
    `;

    accesos.forEach(({ nombre, referencia }, index) => {
        if (nombre == 'Probar') {
            navBarHtml += `
                <li><a id="probarJ">${nombre}</a></li>
            `;

        } else if (nombre == 'Terminar Juego') {
            navBarHtml += `
                <li><a id="terminarJ">${nombre}</a></li>
            `;
        } else
            navBarHtml += `
                <li><a href="${baseUrl}${referencia}">${nombre}</a></li>
            `;
    });

    navBarHtml += `

                <li><a id="logout" href class="botonesNav">Salir</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = navBarHtml;

    if (tipoJuego !== "Seleccion de juego") {
        const probarJ = document.querySelector('#probarJ');
        const terminarJ = document.querySelector('#terminarJ');

        probarJ.addEventListener('click', async(e) => {
            let bandera = 1;
            let formulario = "";
            formulario = generarHtml();

            if (formulario == false)
                console.log("No se generado el codigo del juego");
            else {
                if (tipoJuego !== "rompecabezas" && tipoJuego !== "memoria")
                    if (formulario[1].length <= 1) {
                        dibujarPopAlerta("Debe agregar minimo dos reactivos");
                        bandera = 0;
                    }

                if (bandera === 1) {
                    showLoad();
                    let idJuego = await actTarjeta({
                        codigo: formulario[0],
                        respuestas: formulario[1]
                    }, "juego/", juegoId, tipoJuego);
                    hiddenLoad();
                }
            }
        });

        terminarJ.addEventListener('click', async(e) => {
            let formulario = generarHtml();
            console.log("Aqui estoy");
            const elementosCalif = dataForm(document.querySelector("#elementosCalif"));
            const valoresBien = validarVacios(elementosCalif);

            if (valoresBien.estaCompleto) {
                showLoad();
                let idJuego = await terminarJuego({
                    codigo: formulario[0],
                    respuestas: formulario[1],
                    tiempo: elementosCalif.tiempo,
                    intentos: elementosCalif.intentos,
                    tipoJuego: tipoJuego
                }, juegoId);
                hiddenLoad();
            } else {
                dibujarPopAlerta("Los siguientes campos están vacios: " + valoresBien.camposVacios);
            }
        });
    }

    const btnRegresar = document.querySelector('#regresar');

    btnRegresar.addEventListener('click', e => {
        window.location.replace(`${escritoriosUrl}${url}`);
    });


}
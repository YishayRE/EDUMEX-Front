const navBar = document.querySelector('#navBar');
const juegoId = localStorage.getItem('juego');

const dibujarNavBar = (accesos = [], tipoJuego, url) => {
    let navBarHtml = '';

    navBarHtml += `
        <nav id="barraNav">
            <input type="checkbox" id="check">

            <div id="titulo">
                <h3>${tipoJuego}</h3>
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
            let formulario = generarHtml();
            console.log(formulario);
            let idJuego = await actTarjeta({
                codigo: formulario[0],
                respuestas: formulario[1]
            }, 'juego/', juegoId, tipoJuego);
        });

        terminarJ.addEventListener('click', async(e) => {
            let formulario = generarHtml();

            let idJuego = await terminarJuego({
                codigo: formulario[0],
                respuestas: formulario[1],
                tiempo: 1,
                intentos: 1
            }, 'juego/', juegoId, tipoJuego);
        });
    }

    const btnRegresar = document.querySelector('#regresar');

    btnRegresar.addEventListener('click', e => {
        window.location.replace(`${escritoriosUrl}${url}`);
    });


}
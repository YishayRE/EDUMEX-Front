const dibujarNavBar = (accesos = [], titulo) => {
    let navBarHtml = '';

    const role = (rol === 'PRO_ROLE') ?
        'pro' :
        'est';

    navBarHtml += `
        <nav id=barraNav>
            <input type="checkbox" id="check">

            <div id="titulo">
                <h1 id="tiempo">${titulo}</h1>
            </div>

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>
    `;
    navBarHtml += `
            <div class="enlace">
                <img src="${baseUrl}/images/logoPNG.png" alt="EDUMEX" class="logo">
            </div>
    `;
    navBarHtml += `
            <ul id="lista">
    `;
    accesos.forEach(({ nombre, referencia }, index) => {
        navBarHtml += `
            <li><a id="${role}${index}" class="botonesNav">${nombre}</a></li>
        `;
    });
    navBarHtml += `
                <li><a id="cerrarPrueba" href class="botonesNav">Cerrar</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = navBarHtml;

    const cerrar = document.querySelector("#cerrarPrueba");


    cerrar.addEventListener('click', (event) => {
        event.preventDefault();
        if (rol == "PRO_ROLE") {
            window.close();
        } else {
            window.location.replace(`${escritoriosUrl}materia`);
        }

    });



}
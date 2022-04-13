const dibujarNavBar = (accesos = [], titulo) => {
    let navBarHtml = '';

    const role = (rol === 'PRO_ROLE')
        ? 'pro'
        : 'est';

    navBarHtml += `
        <nav id=barraNav>
            <input type="checkbox" id="check">

            <div id="titulo">
                <h1>${titulo}</h1>
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
    accesos.forEach(({ nombre, referencia },index) => {
        navBarHtml += `
            <li><a id="${role}${index}" href="${referencia}" class="botonesNav">${nombre}</a></li>
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
        window.close();
    });

    /*const lista = document.querySelector("#lista");

    for(i = 0; i < (lista.children.length - 1); i++){
        document.querySelector(`#${role}${i}`).addEventListener('click', (event) => {
            event.preventDefault();
            showPop();
        });
    }*/
}
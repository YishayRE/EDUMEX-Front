const navBar = document.querySelector('#navBar');

const html1 = `
    <title>EDUMEX INICIO</title>
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/style_inicio.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/generales/esc_general.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/generales/footer.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}escritorios/css/popups.css">
    `;

const dibujarNavBar = (accesos = []) => {
    let navBarHtml = '';

    navBarHtml += `
        <nav id="barraNav">
            <input type="checkbox" id="check">

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>

            <a href="${juegosUrl}seleccion" class="enlace">
                <img src="${baseUrl}images/atras.png" alt="EDUMEX" class="logo">
            </a>

            <ul>
    `;
    
    accesos.forEach(({ nombre, referencia }, index) => {
        if((accesos.length - 1) === index)
            navBarHtml += `
                <li><a id="probarJ">${nombre}</a></li>
            `;
        else
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

    const probarJ = document.querySelector('#probarJ');

   probarJ.addEventListener('click', e => {
        const formulario = generarHtml();
        var win = window.open("", "ABECEDARIO", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
        win.document.head.innerHTML = html1;
        win.document.body.innerHTML = formulario;
        console.log(formulario);
    });
}
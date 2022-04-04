const navBar = document.querySelector('#navBar');


let html1 = `
    <title>EDUMEX INICIO</title>
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/style_inicio.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/generales/esc_general.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}css/generales/footer.css">
    <link rel="stylesheet" type="text/css" href="${baseUrl}escritorios/css/popups.css">
    `;
let htmlJs = `
    <script src="${baseUrl}escritorios/actividad/js/navBar.js"></script>
    <script>window.locaction.reload()</script>
`;

const dibujarNavBar = (accesos = [], tipoJuego, url) => {
    let navBarHtml = '';
    let tipo = '';

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
        if((accesos.length - 1) === index){
            navBarHtml += `
                <li><a id="probarJ">${nombre}</a></li>
            `;
            tipo = nombre;
        }
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

    if(tipo == 'Probar'){
        const probarJ = document.querySelector('#probarJ');
        probarJ.addEventListener('click', async(e) => {
            let formulario = generarHtml();
            let cssJuego = `<link rel="stylesheet" type="text/css" href="${baseUrl}escritorios/actividad/juegos/${tipoJuego}/css/estiloJuego.css">`;
            let jsJuego = `<script src="${baseUrl}escritorios/actividad/juegos/${tipoJuego}/js/logicaJuego.js"></script>`;
            html1 += cssJuego;
            htmlJs += jsJuego;
            formulario += htmlJs;
            let htmlContent = html1 + formulario;
            await fs.writeFile('./my-page.html', htmlContent, (error) => { console.log('No se pudo crear la pagina'); });
        });
    }

    const btnRegresar = document.querySelector('#regresar');

    btnRegresar.addEventListener('click', e => {
        window.location.replace(`${escritoriosUrl}${url}`);
    });


}
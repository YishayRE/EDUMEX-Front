const dibujarNavBar = (accesos = [], userType) => {
    let navBarHtml = '';
    const role = (rol === 'PRO_ROLE')
        ? 'pro'
        : 'est';

    navBarHtml += `
        <nav>
            <input type="checkbox" id="check">

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>

            <a href="#" class="enlace">
                <img src="${baseUrl}/images/logoPNG.png" alt="EDUMEX" class="logo">
            </a>

            <ul id="lista">
    `;

    accesos.forEach(({ nombre, referencia },index) => {
        navBarHtml += `
            <li><a id="${role}${index}" href="${referencia}">${nombre}</a></li>
        `;
        aux=1;
    });
    
    navBarHtml += `
                <li><a id="logout" href="">Salir</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = navBarHtml;

    const lista = document.querySelector("#lista");

    for(let i = 0; i < (lista.children.length - 1); i++){
        document.querySelector(`#${role}${i}`).addEventListener('click', (event) => {
            event.preventDefault();
            showPop();
        });
    }
}
/*
    accesos.forEach(({ nombre, referencia },index) => {
        if(referencia.startsWith('#')){
            navBarHtml += `
            <li><a class="botonesBarra" id="vp${index+1}" href="${referencia}">${nombre}</a></li>
            `;
        }else if(referencia.startsWith(' ')){
            navBarHtml += `
            <li><a id="logout" href="${referencia}">${nombre}</a></li>
            `;
        }else{
            navBarHtml += `
            <li><a href="${baseUrl}${referencia}">${nombre}</a></li>
            `;
        }
        aux=1;
    });
*/


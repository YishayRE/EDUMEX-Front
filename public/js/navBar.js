const navBar = document.querySelector('#navBar');

const dibujarNavBar = (accesos = []) => {
    let navBarHtml = '';

    navBarHtml += `
        <nav id="barraNav">
            <input type="checkbox" id="check">

            <label for="check" class="checkbtn" id="barras">
                    <i class="fas fa-bars"></i>
            </label>

            <a href="${baseUrl}" class="enlace">
                <img src="${baseUrl}images/logoPNG.png" alt="EDUMEX" class="logo">
            </a>

            <ul>
    `;
    
    accesos.forEach(({ nombre, referencia }) => {
        navBarHtml += `
            <li><a href="${baseUrl}${referencia}">${nombre}</a></li>
        `;
        aux=1;
    });

    navBarHtml += `
            </ul>
        </nav>
    `;

    navBar.innerHTML = navBarHtml;
}
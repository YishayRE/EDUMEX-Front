const footer = document.querySelector('#footer');

const dibujarFooter = () => {
    let footerHtml = '';

    footerHtml += `
    <footer id="footer">
        <input type="checkbox" id="select" name="select">
        <label for="select" class="selectbtn" id="menuFoot">
                <i class="flecha"><img src="./images/information.png" alt="EDUMEX" class="logo"></i>
        </label>
        <ul class="opciones">
            <li><a id="nosotros" href="">Nosotros</a></li>
            <li><a id="contacto" href="">Contactanos</a></li>
            <li><a id="manual" href="">Manual</a></li>
        </ul>
    </footer>
    `;
    footer.innerHTML = footerHtml;
}
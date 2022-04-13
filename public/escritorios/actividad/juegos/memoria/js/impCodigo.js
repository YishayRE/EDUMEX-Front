const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
        <div class="image-upload">
            <label for="imagen${contadorEtiqueta}">
            <img class="cargaImagen" id="cargaImagen${contadorEtiqueta}" src="../../../../images/upload.png"/>
            </label>
            
            <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
        </div>
        <select name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
            <option value="Palabra">Palabra</option>
            <option value="Imagen">Imagen</option>
        </select>
        <h5 id="select${contadorEtiqueta}">Palabra</h5>
        <div>
            <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
            <div class="image-upload">
            <label for="imagen${contadorEtiqueta+1}">
                <img class="cargaImagen" id="cargaImagen${contadorEtiqueta}" src="../../../../images/upload.png"/>
            </label>
            <input type="file" name="imagen${contadorEtiqueta+1}" id="imagen${contadorEtiqueta+1}" accept="image/png, image/jpeg">
            </div>
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
    const select = document.querySelector(`#select${contadorEtiqueta}`);

    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1)
            select.innerHTML = 'Imagen';
        else
            select.innerHTML = 'Palabra';
    });
}
const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
        <div id="primeraImagen" class="image-upload">
            <label for="imagen${contadorEtiqueta}">
                <img class="cargaImagen" id="cargaImagen${contadorEtiqueta}" src="../../../../images/upload.png"/>
            </label>
                
            <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
        </div>
        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
                <option value="Tamano" selected>Tamaño</option>
                <option value="Forma">Forma</option>
            </select>
        </div>
        <h5 class="selectTitulo" id="select${contadorEtiqueta}">Tamaño</h5>

        <div class="opcionesRespuesta">
            <input class="valorRespuesta" type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">

            <div id="segundaImagen" class="image-upload">
                <label for="imagen${contadorEtiqueta + 1}">
                    <img class="cargaImagen" id="cargaImagen${contadorEtiqueta + 1}" src="../../../../images/upload.png"/>
                </label>
                    
                <input type="file" name="imagen${contadorEtiqueta + 1}" id="imagen${contadorEtiqueta + 1}" accept="image/png, image/jpeg">
            </div>
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
    const select = document.querySelector(`#select${contadorEtiqueta}`);

    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1)
            select.innerHTML = 'Forma';
        else
            select.innerHTML = 'Tamaño';
    });
}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
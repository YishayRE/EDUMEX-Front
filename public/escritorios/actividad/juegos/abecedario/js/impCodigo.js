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

        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
                <option value="Palabra" selected>Palabra</option>
                <option value="Oración">Oración</option>
            </select>
        </div>

        <h1 class="selectTitulo" id="select${contadorEtiqueta}">
            Palabra
        </h1>
        
        <div class="contenedorRespuesta"> 
            <input class="valorRespuesta" type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
    const select = document.querySelector(`#select${contadorEtiqueta}`);

    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1)
            select.innerHTML = 'Oración';
        else
            select.innerHTML = 'Palabra';
    });
}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
        <div id="primeraImagen" class="image-upload">
            <label for="imagen${contadorEtiqueta - 2}">
            <img class="cargaImagen" id="cargaImagen${contadorEtiqueta - 2}" src="../../../../images/upload.png"/>
            </label>
            
            <input type="file" name="imagen${contadorEtiqueta - 2}" id="imagen${contadorEtiqueta - 2}" accept="image/png, image/jpeg">
        </div>
        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${contadorEtiqueta - 2}" id="opcion${contadorEtiqueta - 2}">
                <option value="Palabra">Palabra</option>
                <option value="Imagen">Imagen</option>
            </select>
        </div>
        <h5 class="selectTitulo" id="select${contadorEtiqueta - 2}">Palabra</h5>
        <div class="opcionesRespuesta">
            <div class="respuestaCambiar" id="respuestaCambiar${contadorEtiqueta - 2}">
            <input class="valorRespuesta" type="text" name="txt${contadorEtiqueta - 2}" id="txt${contadorEtiqueta - 2}">
                <div style="visibility: hidden;" class="image-upload segundaImagen" id="img${contadorEtiqueta - 2}">
                    <label for="imagen${contadorEtiqueta - 1}" id="labelImg">
                        <img class="cargaImagen" id="cargaImagen${contadorEtiqueta - 1}" src="../../../../images/upload.png"/>
                    </label>
                    <input type="file" name="imagen${contadorEtiqueta - 1}" id="imagen${contadorEtiqueta - 1}" value="noImagen" accept="image/png, image/jpeg">
                </div>
            </div>
        </div>
    `;
    //
    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta - 2}`);
    const select = document.querySelector(`#select${contadorEtiqueta - 2}`);
    const respuestaCambiar = document.querySelector(`#respuestaCambiar${contadorEtiqueta - 2}`);
    const campoImagen = document.querySelector(`#img${contadorEtiqueta - 2}`);
    const campoTexto = document.querySelector(`#txt${contadorEtiqueta - 2}`);



    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1) {
            select.innerHTML = 'Imagen';
            campoTexto.style.visibility = "hidden";
            campoTexto.value = "noTexto";
            campoImagen.style.visibility = "visible";
        } else {
            select.innerHTML = 'Palabra';
            campoImagen.style.visibility = "hidden";
            campoTexto.style.visibility = "visible";

        }
    });

    const inputImagen = document.querySelector(`#imagen${contadorEtiqueta - 2}`);
    const cargaImagen = document.querySelector(`#cargaImagen${contadorEtiqueta - 2}`);

    const inputImagenDos = document.querySelector(`#imagen${contadorEtiqueta - 1}`);
    const cargaImagenDos = document.querySelector(`#cargaImagen${contadorEtiqueta - 1}`);

    inputImagen.addEventListener('change', async(event) => {
        const file = inputImagen.files[0];
        console.log(file);

        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
        } else {
            const respuestaImagen = await subirImagen(cargaImagen.src, file);
            console.log(respuestaImagen);
            cargaImagen.src = respuestaImagen.url;
        }
    });

    inputImagenDos.addEventListener('change', async(event) => {
        const file = inputImagenDos.files[0];
        console.log(file);

        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
        } else {
            const respuestaImagen = await subirImagen(cargaImagenDos.src, file);
            console.log(respuestaImagen);
            cargaImagenDos.src = respuestaImagen.url;
        }
    });
}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
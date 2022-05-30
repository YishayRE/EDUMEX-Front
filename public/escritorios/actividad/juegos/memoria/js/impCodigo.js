const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${contadorEtiqueta - 2}" id="opcion${contadorEtiqueta - 2}">
                <option value="PP">Palabra-Palabra</option>
                <option value="PI">Palabra-Imagen</option>
                <option value="II">Imagen-Imagen</option>
            </select>
        </div>
        <div class="opcionesRespuesta">
            <div class="respuestaCambiar" id="respuestaCambiar${contadorEtiqueta - 2}">
                <input class="valorRespuesta" type="text" name="txt${contadorEtiqueta - 2}" id="txt${contadorEtiqueta - 2}">
                <div style="visibility: hidden;" class="image-upload segundaImagen" id="img${contadorEtiqueta - 2}">
                    <label for="imagen${contadorEtiqueta - 2}" id="labelImg">
                        <img class="cargaImagen" id="cargaImagen${contadorEtiqueta - 2}" src="../../../../images/upload.png"/>
                    </label>
                    <input type="file" name="imagen${contadorEtiqueta - 2}" id="imagen${contadorEtiqueta - 2}" value="noImagen" accept="image/png, image/jpeg">
                </div>
            </div>
        </div>
        <div class="opcionesRespuesta">
            <div class="respuestaCambiar" id="respuestaCambiar${contadorEtiqueta - 1}">
                <input class="valorRespuesta" type="text" name="txt${contadorEtiqueta - 1}" id="txt${contadorEtiqueta - 1}">
                <div style="visibility: hidden;" class="image-upload segundaImagen" id="img${contadorEtiqueta - 1}">
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
    const campoImagenUno = document.querySelector(`#img${contadorEtiqueta - 2}`);
    const campoTextoUno = document.querySelector(`#txt${contadorEtiqueta - 2}`);
    const campoImagenDos = document.querySelector(`#img${contadorEtiqueta - 1}`);
    const campoTextoDos = document.querySelector(`#txt${contadorEtiqueta - 1}`);



    opcion.addEventListener('change', () => {
        console.log(opcion.selectedIndex)
        if (opcion.selectedIndex === 0) {
            campoTextoUno.style.visibility = "visible";
            campoTextoDos.style.visibility = "visible";
            campoImagenUno.style.visibility = "hidden";
            campoImagenDos.style.visibility = "hidden";

        }
        if (opcion.selectedIndex === 1) {
            campoImagenUno.style.visibility = "hidden";
            campoTextoUno.style.visibility = "visible";
            campoTextoDos.style.visibility = "hidden";
            campoImagenDos.style.visibility = "visible";
        }
        if (opcion.selectedIndex === 2) {
            campoTextoUno.style.visibility = "hidden";
            campoTextoDos.style.visibility = "hidden";
            campoImagenUno.style.visibility = "visible";
            campoImagenDos.style.visibility = "visible";
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
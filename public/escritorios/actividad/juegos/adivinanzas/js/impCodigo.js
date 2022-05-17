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
        <div>
            <h5 class="titulos">Ingresa la sentencia</h5>
            <input type="text" class="valorSentencia" name="sentencia${contadorEtiqueta}" id="sentencia${contadorEtiqueta}">
        </div>
        <div>
            <h5 class="titulos">Escribe la respuesta</h5>
            <input type="text" class="valorRespuesta" name="respuesta${contadorEtiqueta}" id="respuesta${contadorEtiqueta}">
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const inputImagen = document.querySelector(`#imagen${contadorEtiqueta}`);
    const cargaImagen = document.querySelector(`#cargaImagen${contadorEtiqueta}`);

    inputImagen.addEventListener('change', async(event) => {
        const file = inputImagen.files[0];
        console.log(file);

        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
        }else{
            const respuestaImagen = await subirImagen(cargaImagen.src, file);
            console.log(respuestaImagen);
            cargaImagen.src = respuestaImagen.url;
        }
    });

}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
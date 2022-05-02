const insertarCodigo = (contadorEtiqueta) => {
    let auxContador = 0;
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';

    if(contadorEtiqueta === 0){
        auxContador = contadorEtiqueta;
        elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    }else if(contadorEtiqueta > 0){
        auxContador = contadorEtiqueta;
        --auxContador;
        elementoJuego.id = `elementoJuego${contadorEtiqueta - 1}`;
    }
    elementoJuego.innerHTML = `
        <div id="primeraImagen" class="image-upload">
            <label for="imagen${contadorEtiqueta}">
                <img class="cargaImagen" id="cargaImagen${contadorEtiqueta}" src="../../../../images/upload.png"/>
            </label>
                
            <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
        </div>
        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${auxContador}" id="opcion${auxContador}">
                <option value="Tamaño" selected>Tamaño</option>
                <option value="Forma">Forma</option>
            </select>
        </div>
        <h5 class="selectTitulo" id="select${auxContador}">Tamaño</h5>

        <div class="opcionesRespuesta">
            <input class="valorRespuesta" type="text" name="opt${auxContador}" id="opt${auxContador}">

            <div id="segundaImagen" class="image-upload">
                <label for="imagen${contadorEtiqueta + 1}">
                    <img class="cargaImagen" id="cargaImagen${contadorEtiqueta + 1}" src="../../../../images/upload.png"/>
                </label>
                    
                <input type="file" name="imagen${contadorEtiqueta + 1}" id="imagen${contadorEtiqueta + 1}" accept="image/png, image/jpeg">
            </div>
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${auxContador}`);
    const select = document.querySelector(`#select${auxContador}`);


    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1)
            select.innerHTML = 'Forma';
        else
            select.innerHTML = 'Tamaño';
    });

    const inputImagen = document.querySelector(`#imagen${contadorEtiqueta}`);
    const cargaImagen = document.querySelector(`#cargaImagen${contadorEtiqueta}`);

    const inputImagenDos = document.querySelector(`#imagen${contadorEtiqueta + 1}`);
    const cargaImagenDos = document.querySelector(`#cargaImagen${contadorEtiqueta + 1}`);

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

    inputImagenDos.addEventListener('change', async(event) => {
        const file = inputImagenDos.files[0];
        console.log(file);

        if (file.type && !file.type.startsWith('image/')) {
            console.log('File is not an image.', file.type, file);
        }else{
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
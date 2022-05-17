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
            <h5 class="error" id="error${contadorEtiqueta}"></h5>
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
    const select = document.querySelector(`#select${contadorEtiqueta}`);
    const opt = document.querySelector(`#opt${contadorEtiqueta}`);
    const error = document.querySelector(`#error${contadorEtiqueta}`);

    opcion.addEventListener('change', () => {
        if (opcion.selectedIndex === 1){
            select.innerHTML = 'Oración';
            validarPalabra(false, opt, error);
        }else{
            select.innerHTML = 'Palabra';
            validarPalabra(true, opt, error);
        }
    });

    validarPalabra(true, opt, error);

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

const validarPalabra = (validarActivo, opt, error) => {
    if(!validarActivo){
        opt.value = "";
        error.innerHTML = "";
        opt.oninput = (e) => {
        }
    }else{
        opt.value = "";
        opt.oninput = (e) => {
            const palabra = opt.value;
            const caracter = palabra.charCodeAt(palabra.length - 1);
            if(caracter === 32){
                opt.value = opt.value.substring(0, opt.value.length - 1);
                error.innerHTML = `No puede haber espacios`;
            }else{
                error.innerHTML = "";
            }
        }
    }
}
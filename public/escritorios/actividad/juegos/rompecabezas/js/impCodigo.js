/*const insertarCodigo = (contadorEtiqueta) => {
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
            <option value="Palabra" selected>Palabra</option>
            <option value="Oración">Oración</option>
        </select>

        <h1 id="select${contadorEtiqueta}">
            Palabra
        </h1>

        <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
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
}*/

const inputImagen = document.querySelector(`#imagen`);
const cargaImagen = document.querySelector(`#cargaImagen`);

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
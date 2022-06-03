const inputImagen = document.querySelector(`#imagen`);
const cargaImagen = document.querySelector(`#cargaImagen`);

inputImagen.addEventListener('change', async(event) => {
    const file = inputImagen.files[0];

    if (file.type && !file.type.startsWith('image/')) {
        throw new Error('File is not an image.', file.type, file);
    } else {
        const respuestaImagen = await subirImagen(cargaImagen.src, file);
        cargaImagen.src = respuestaImagen.url;
    }
});
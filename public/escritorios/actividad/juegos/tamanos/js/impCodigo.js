const insertarCodigo = (contadorEtiqueta) => {
    let auxContador = 0;
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;

    elementoJuego.innerHTML = `
        <div id="primeraImagen" class="image-upload">
            <label for="imagen${contadorEtiqueta - 2}">
                <img class="cargaImagen" id="cargaImagen${contadorEtiqueta - 2}" src="../../../../images/upload.png"/>
            </label>
                
            <input type="file" name="imagen${contadorEtiqueta - 2}" id="imagen${contadorEtiqueta  - 2}" accept="image/png, image/jpeg">
        </div>
        <div class="contenedorTipo">
            <select class="selectTipo" name="opcion${contadorEtiqueta - 2}" id="opcion${contadorEtiqueta - 2}">
                <option value="Tamaño" selected>Tamaño</option>
                <option value="Forma">Forma</option>
            </select>
        </div>
        <h5 class="selectTitulo" id="select${contadorEtiqueta - 2}">Tamaño</h5>

        <div class="opcionesRespuesta">
            <div class="respuestaCambiar" id="respuestaCambiar${contadorEtiqueta - 2}">
                <select class="valorRespuesta" name="opt${contadorEtiqueta - 2}" id="opt${contadorEtiqueta - 2}">
                    <option value="Mayor que" selected>Mayor que</option>
                    <option value="Menor que">Menor que</option>
                    <option value="Igual">Igual</option>
                </select>
            </div>

            <div id="segundaImagen" class="image-upload">
                <label id="imgLabel${contadorEtiqueta - 1}" for="imagen${contadorEtiqueta - 1}">
                    <img class="cargaImagen" id="cargaImagen${contadorEtiqueta - 1}" src="../../../../images/upload.png"/>
                </label>
                    
                <input type="file" name="imagen${contadorEtiqueta - 1}" id="imagen${contadorEtiqueta - 1}" accept="image/png, image/jpeg">
            </div>
        </div>
    `;

    contenedor.appendChild(elementoJuego);

    const opcion = document.querySelector(`#opcion${contadorEtiqueta - 2}`);
    const select = document.querySelector(`#select${contadorEtiqueta - 2}`);
    const respuestaCambiar = document.querySelector(`#respuestaCambiar${contadorEtiqueta - 2}`);


    opcion.addEventListener('change', () => {
        const valorRespuesta = document.querySelector(`#opt${contadorEtiqueta - 2}`);
        const inputImg = document.querySelector(`#imagen${contadorEtiqueta - 1}`);
        const labelImg = document.querySelector(`#imgLabel${contadorEtiqueta - 1}`);
        if (opcion.selectedIndex === 1) {
            inputImg.type = "text";
            inputImg.value = "imgOpcional";
            labelImg.style.visibility = "hidden";
            select.innerHTML = 'Forma';
            respuestaCambiar.removeChild(valorRespuesta);
            let campoForma = document.createElement("select");
            campoForma.className = "valorRespuesta";
            campoForma.id = `opt${contadorEtiqueta - 2}`;
            campoForma.name = `opt${contadorEtiqueta - 2}`;
            respuestaCambiar.appendChild(campoForma);
            valorRespuestaForma = document.querySelector(`#opt${contadorEtiqueta - 2}`);
            valorRespuestaForma.style.marginTop = "47px";
            let arrayValores = ["Cuadrado", "Círculo", "Triangulo", "Rectángulo", "Trapecio", "Paralelogramo",
                "Pentágono", "Hexágono", "Rombo", "Cubo", "Pirámide", "Cono", "Cilindro", "Esfera"
            ];
            for (let i = 0; i < arrayValores.length; i++) {
                let option = document.createElement("option");
                option.value = arrayValores[i];
                option.text = arrayValores[i];
                campoForma.appendChild(option);
            }
        } else {
            inputImg.type = "file";
            labelImg.style.visibility = "visible"
            select.innerHTML = 'Tamaño';
            respuestaCambiar.removeChild(valorRespuesta);
            let campoTamaño = document.createElement("select");
            campoTamaño.className = "valorRespuesta";
            campoTamaño.id = `opt${contadorEtiqueta - 2}`;
            campoTamaño.name = `opt${contadorEtiqueta - 2}`;
            respuestaCambiar.appendChild(campoTamaño);

            let arrayValores = ["Mayor que", "Menor que", "Igual"];
            for (let i = 0; i < arrayValores.length; i++) {
                let option = document.createElement("option");
                option.value = arrayValores[i];
                option.text = arrayValores[i];
                campoTamaño.appendChild(option);
            }
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
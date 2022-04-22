const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
    <div class="contenedorTipo">
        <select class="selectTipo" name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
            <option value="Operacion">Operación</option>
            <option value="Secuencia">Secuencia</option>
        </select>
    </div>

    <h1 class="selectTitulo" id="select${contadorEtiqueta}">Operación</h1>
    
    <div class="centrarElementos">
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}">Escribe la operación</label>
            <input class="valorRespuesta" type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}">Resultado</label>
            <input class="valorRespuesta" type="text" name="opt1" id="opt1">
        </div>
    </div>
    
    <div class="centrarElementos">
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}">Escribe la Secuencia</label>
            <input class="valorRespuesta" type="text" name="opt2" id="opt2">
        </div>
    
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}">Escribe su intervalo</label>
            <input class="valorRespuesta" type="text" name="opt3" id="opt3">
        </div>
    </div>
    `;

    contenedor.appendChild(elementoJuego);

        const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
        const select = document.querySelector(`#select${contadorEtiqueta}`);

        opcion.addEventListener('change', () => {
            if (opcion.selectedIndex === 1)
                select.innerHTML = 'Secuencia';
            else
                select.innerHTML = 'Operación';
        });

}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
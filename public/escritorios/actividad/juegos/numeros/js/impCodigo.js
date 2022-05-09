const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
    <div class="contenedorTipo">
        <select class="selectTipo" name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
            <option value="Operacion">Operación</option>
            <option value="Sucesion">Sucesion</option>
        </select>
    </div>

    <h1 class="selectTitulo" id="select${contadorEtiqueta}">Operación</h1>
    
    <div class="centrarElementos">
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}" id="tituloOpcion${contadorEtiqueta}">Escribe la operación</label>
            <input class="valorRespuesta" type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}" id="tituloRespuesta${contadorEtiqueta}">Resultado</label>
            <input class="valorRespuesta" type="text" name="resp${contadorEtiqueta}" id="resp${contadorEtiqueta}">
        </div>
    </div>
    `;

    contenedor.appendChild(elementoJuego);

        const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
        const select = document.querySelector(`#select${contadorEtiqueta}`);
        const tituloOpcion = document.querySelector(`#tituloOpcion${contadorEtiqueta}`);
        const tituloRespuesta = document.querySelector(`#tituloRespuesta${contadorEtiqueta}`);

        opcion.addEventListener('change', () => {
            if (opcion.selectedIndex === 1){
                select.innerHTML = 'Sucesión';
                tituloOpcion.innerHTML = "Escribe la sucesion";
                tituloRespuesta.innerHTML = "¿Qué números siguen?"; 
            }else{
                select.innerHTML = 'Operación';
                tituloOpcion.innerHTML = "Escribe la operación";
                tituloRespuesta.innerHTML = "Resultado"; 
            } 
        });

}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}
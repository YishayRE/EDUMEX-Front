const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
    <select name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
        <option value="" selected disabled hidden>Elige el tipo</option>
        <option value="Palabra">Operación</option>
        <option value="Oración">Secuencia</option>
    </select>

    <h1 id="select${contadorEtiqueta}">Operación</h1>
    
    <div>
        <div>
            <label for="opt${contadorEtiqueta}">Escribe la operación</label>
    
            <input type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
        </div>
    
        <div>
            <label for="opt${contadorEtiqueta}">Resultado</label>
    
            <input type="text" name="opt1" id="opt1">
        </div>
    </div>
    
    <div>
        <div>
            <label for="opt${contadorEtiqueta}">Escribe la Secuencia</label>
    
            <input type="text" name="opt2" id="opt2">
        </div>
    
        <div>
            <label for="opt${contadorEtiqueta}">Escribe su intervalo</label>
    
            <input type="text" name="opt3" id="opt3">
        </div>
    </div>
    `;

    /*
    <div class="elementoJuego">
                        <select name="opcion0" id="opcion0">
                            <option value="" selected disabled hidden>Elige el tipo</option>
                            <option value="Palabra">Operación</option>
                            <option value="Oración">Secuencia</option>
                        </select>
                        <h1 id="select0">Operación</h1>
                        <div>
                            <div>
                                <label for="opt0">Escribe la operación</label>
                                <input type="text" name="opt0" id="opt0">
                            </div>
                            <div>
                                <label for="opt0">Resultado</label>
                                <input type="text" name="opt1" id="opt1">
                            </div>
                        </div>
                        <div>
                            <div>
                                <label for="opt0">Escribe la Secuencia</label>
                                <input type="text" name="opt2" id="opt2">
                            </div>
                            <div>
                                <label for="opt0">Escribe su intervalo</label>
                                <input type="text" name="opt3" id="opt3">
                            </div>
                        </div>
                    </div>
    */

    contenedor.appendChild(elementoJuego);
    /*
        const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
        const select = document.querySelector(`#select${contadorEtiqueta}`);

        opcion.addEventListener('change', () => {
            if (opcion.selectedIndex === 1)
                select.innerHTML = 'Oración';
            else
                select.innerHTML = 'Palabra';
        });
        */
}
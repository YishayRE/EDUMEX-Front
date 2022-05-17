const insertarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');

    const elementoJuego = document.createElement('div');
    elementoJuego.className = 'elementoJuego';
    elementoJuego.id = `elementoJuego${contadorEtiqueta}`;
    elementoJuego.innerHTML = `
    <div class="contenedorTipo">
        <select class="selectTipo" name="opcion${contadorEtiqueta}" id="opcion${contadorEtiqueta}">
            <option value="Sucesion">Sucesión</option>
            <option value="Operacion">Operación</option>
        </select>
    </div>

    <h1 class="selectTitulo" id="select${contadorEtiqueta}">Sucesión</h1>
    
    <div class="centrarElementos">
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}" id="tituloOpcion${contadorEtiqueta}">Escribe la sucesión</label>
            <input class="valorRespuesta" type="text" name="opt${contadorEtiqueta}" id="opt${contadorEtiqueta}">
            <h5 class="error" id="error${contadorEtiqueta}"></h5>
            <input type="number" id="aux${contadorEtiqueta}" style="display: none;"></input>
            <input type="number" id="izq${contadorEtiqueta}" style="display: none;"></input>
        </div>
    
        <div>
            <label class="labelReactivo" for="opt${contadorEtiqueta}" id="tituloRespuesta${contadorEtiqueta}">¿Qué elementos siguen?</label>
            <input class="valorRespuesta" type="text" name="resp${contadorEtiqueta}" id="resp${contadorEtiqueta}">
        </div>
    </div>
    `;

    contenedor.appendChild(elementoJuego);

        const opcion = document.querySelector(`#opcion${contadorEtiqueta}`);
        const select = document.querySelector(`#select${contadorEtiqueta}`);
        const tituloOpcion = document.querySelector(`#tituloOpcion${contadorEtiqueta}`);
        const tituloRespuesta = document.querySelector(`#tituloRespuesta${contadorEtiqueta}`);
        const opt = document.querySelector(`#opt${contadorEtiqueta}`);
        const resp = document.querySelector(`#resp${contadorEtiqueta}`);
        const error = document.querySelector(`#error${contadorEtiqueta}`);
        const aux = document.querySelector(`#aux${contadorEtiqueta}`);
        const izquierda = document.querySelector(`#izq${contadorEtiqueta}`);

        opcion.addEventListener('change', () => {
            if (opcion.selectedIndex === 1){
                select.innerHTML = 'Operación';
                tituloOpcion.innerHTML = "Escribe la operación";
                tituloRespuesta.innerHTML = "Resultado"; 
                validarOperacion(true, opt, resp, error, aux, izquierda);
            }else{
                select.innerHTML = 'Sucesión';
                tituloOpcion.innerHTML = "Escribe la sucesion";
                tituloRespuesta.innerHTML = "¿Qué elementos siguen?";
                validarOperacion(false, opt, resp);
            } 
        });
}

const eliminarCodigo = (contadorEtiqueta) => {
    const contenedor = document.querySelector('#contenedor');
    const elementoJuego = document.getElementById(`elementoJuego${contadorEtiqueta}`);
    contenedor.removeChild(elementoJuego);
}

const validarOperacion = (validarActivo, opt, resp, error, aux, izquierda) => {
    if(!validarActivo){
        opt.value = "";
        resp.value = "";
        opt.oninput = (e) => {
            
        }
    }
    else if(validarActivo){
        opt.value = "";
        resp.value = "";
        opt.oninput = (e) => {
            const operacion = opt.value;
            const caracter = operacion.charCodeAt(operacion.length - 1);
            const anterior = operacion.charCodeAt(operacion.length - 2);
    
            if(!e.data){
                if(parseInt(aux.value) > operacion.length - 1){
                    aux.value = "";
                    izquierda.value = "";
                    console.log("Se borró");
                }
    
                let bandera = 1;
                let i = 0;
    
                while (bandera === 0 || !aux.value) {
                    //console.log(bandera, aux.value);
                    bandera = 0;
    
                    if(i >= operacion.length)
                        bandera = 1;
                    
                    const oper = operacion.charCodeAt(i);
                    if(oper === 42 || oper === 43 || oper === 45 || oper === 47)
                        if(aux.value){
                            let izq;
    
                            if(izquierda.value)
                                izq = parseInt(izquierda.value);
    
                            const der = parseInt(operacion.substring(aux + 1, i - 1));
                            let respuesta;
                            switch (operacion.charAt(aux.value)){
                                case '*':
                                    respuesta = izq * der;
                                    break;
                                case '+':
                                    respuesta = izq + der;
                                    break;
                                case '-':
                                    respuesta = izq - der;
                                    break;
                                case '/':
                                    respuesta = izq / der;
                                    break;
                            }
                            resp.value = respuesta;
                            izquierda.value = respuesta;
                            aux.value = i;
                        }
                        else{
                            izq = parseInt(operacion.substring(0,i));
                            aux.value = i;
                            izquierda.value = izq;
                        }
                    if(bandera === 1 && !aux.value)
                        break;
                    i++;
                }
            }
            
            if(caracter > 41 && caracter < 58 && caracter !== 44 && caracter !== 46){
                if(caracter > 47){
                    if(aux.value){
                        const op = parseInt(aux.value);
                        let izq;
    
                        if(izquierda.value)
                            izq = parseInt(izquierda.value);
                        else
                            izq = parseInt(operacion.substring(0,op));
    
                        const der = parseInt(operacion.substring(op + 1, operacion.length));
                        let respuesta;
                        
                        switch (operacion.charAt(op)){
                            case '*':
                                respuesta = izq * der;
                                break;
                            case '+':
                                respuesta = izq + der;
                                break;
                            case '-':
                                respuesta = izq - der;
                                break;
                            case '/':
                                respuesta = izq / der;
                                break;
                        }
                        resp.value = respuesta;
                        izquierda.value = respuesta;
                        //console.log(izquierda);
                    }
                    else
                        if(!aux.value){
                            resp.value = operacion;
                            console.log("cambiando");
                        }
                    error.innerHTML = ``;
                }
                else
                    if(anterior > 47){
                        if(aux.value)
                            izquierda.value = resp.value;
                        aux.value = operacion.length - 1;
                        error.innerHTML = ``;
                    }else{
                        error.innerHTML = `No se puede iniciar con un operando`;
                        opt.value = opt.value.substring(0, opt.value.length - 1);
                    }   
            }
            else{
                error.innerHTML = `El carácter '${operacion.charAt(opt.value.length - 1)}' no está permitido`;
                opt.value = opt.value.substring(0, opt.value.length - 1);
            }
        }
    }
}
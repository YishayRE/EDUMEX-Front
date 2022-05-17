let overlay = "";
let overlayEditar = "";

const emergentes =  document.querySelector("#emergentes");
const popsEditar =  document.querySelector("#popsEditar");


const dibujarPopUp = ([nombre = '', form = '', datos = [], boton = '', datosList = []]) => {
    let popUpHtml = '';

    popUpHtml += `
        <div class="overlay" id="formsCrear">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close" id="cerrarCrear" href="">&times;</a>

                <div class="content">
                    <form class="center" id="${form}">
        `;
    datos.forEach(({ type, name, titulo }) => {
        if(type == "list"){
            popUpHtml += `
            <div class="inputbox">
                <input list="${type}${name}" name="${name}" id="l${name}">

                <span>${titulo}</span>

                <datalist id="${type}${name}">
            `;
            switch (name) {
                case 'grado':
                    let n = 1;
                    while( n < 7 ){
                        popUpHtml += `
                            <option value="${n}">
                        `;
                        n++;
                    }
                    break;
                case 'grupo':
                    let l = 65;
                    while( l < 71 ){
                        let letra = String.fromCharCode(l);
                        popUpHtml += `
                            <option value="${letra}">
                        `;
                        l++;
                    }
                    break;
                default:
                    datosList.forEach(( valor ) => {
                        popUpHtml += `
                            <option value="${valor}">
                        `;
                    });        
                    break;
            }
            popUpHtml += `
                </datalist>
            </div>       
            `;
        }else{
            popUpHtml += `
            <div class="inputbox">
                <input type="${type}" name="${name}" id="${name}">

                <span>${titulo}</span>
            </div>    
            `;
        }
        
    });
    popUpHtml += `
                        <div>
                            <button id="${form}" type="submit">${boton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    emergentes.innerHTML = popUpHtml;

    overlay = document.querySelector("#formsCrear");
    botonClose = document.querySelector("#cerrarCrear");

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop();
    });

    overlay.addEventListener('click', (event) => {
        if(event.target == overlay){
            hiddenPop();
        }
    });

    switch (form) {
        case 'grupo':
            const grado = document.querySelector('#lgrado');
            const grupo = document.querySelector('#lgrupo');

            grado.onkeypress = function() {return soloNumeros(event)};
            grupo.onkeypress = function() {return soloLetras(event)};

            break;
        case 'materia':
    
            break;
        case 'actividad':
            const nombre = document.querySelector('#nombre');
            const descripcion = document.querySelector('#descripcion');
            const objetivo = document.querySelector('#objetivo');            

            nombre.onkeypress = function() {return sinEspeciales(event)};
            descripcion.onkeypress = function() {return sinEspeciales(event)};
            objetivo.onkeypress = function() {return sinEspeciales(event)};

            break;
        case 'inscrito':
            const codigo = document.querySelector('#codigo');
            codigo.onkeypress = function() {return sinEspeciales(event)};
            
            break;
        default:
                   
            break;
    }
    
    const formulario = document.querySelector(`#${form}`);
    formulario.addEventListener('submit', async(e) => {
        e.preventDefault();
        showLoad();
        let vId = '';
        let validador = '';
        switch (form) {
            case 'grupo':
                validador = "usuario";
                vId = uid;
                break;
            case 'materia':
                validador = "grupo";
                vId = localStorage.getItem('grupo');
                break;
            case 'actividad':
                validador = "materia";
                vId = localStorage.getItem('materia');
                break;
            case 'inscrito':
                validador = "estudiante";
                vId = uid;
                break;
            default:
                hiddenLoad();
                throw new Error("No se ha podido validar la petición");        
                break;
        }
        let datos = dataForm(formulario);
        datos[`${validador}`] = vId;

        if(valForm(datos))
            switch (form) {
                case 'inscrito':
                    const estu = {estudiante: `${datos['estudiante']}`}
                    const gru = {codigo: `${datos['codigo']}`}
                    const finalResult = Object.assign(estu,gru);
                    await inscripcion(finalResult, form);
                    break;
                default:
                    await creacion(datos, form, vId);
                    break;
            }
        else{
            console.log("Faltan Datos");  
            dibujarPopAlerta("Faltan campos por llenar"); 
            hiddenLoad();
        }  
    });
}

const dibujarPopEditar = ([nombre = '', form = '', datos = [], boton = '', datosList = []], editarId) => {
    let popEditarHtml = '';

    popEditarHtml += `
        <div class="overlay" id="formsEditar">
            <div class="popup">
                <h2>Editar Información</h2>

                <a class="close" id="cerrarEditar" href="">&times;</a>

                <div class="content">
                    <form class="center" id="e${form}">
        `;
    datos.forEach(({ type, name, titulo }) => {
        if(type == "list"){
            if(name != "grado"){
            popEditarHtml += `
                <div class="inputbox">
            `;
            popEditarHtml += `
                <input list="${type}${name}" name="${name}" id="le${name}">

                <span>${titulo}</span>

                <datalist id="${type}${name}">
            `;
            switch (name) {
                case 'grado':
                    let n = 1;
                    while( n < 7 ){
                        popEditarHtml += `
                            <option value="${n}">
                        `;
                        n++;
                    }
                    break;
                case 'grupo':
                    let l = 65;
                    while( l < 71 ){
                        let letra = String.fromCharCode(l);
                        popEditarHtml += `
                            <option value="${letra}">
                        `;
                        l++;
                    }
                    break;
                default:
                    datosList.forEach(( valor ) => {
                        popEditarHtml += `
                            <option value="${valor}">
                        `;
                    });        
                    break;
            }
            popEditarHtml += `
                </datalist>
            </div>       
            `;
        }
        }else{
            popEditarHtml += `
            <div class="inputbox">
                <input type="${type}" name="${name}" id="e${name}">

                <span>${titulo}</span>
            </div>    
            `;
        }
    });
    popEditarHtml += `
                        <div>
                            <button id="e${form}" type="submit">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    popsEditar.innerHTML = popEditarHtml;

    overlayEditar = document.querySelector("#formsEditar");
    botonClose = document.querySelector("#cerrarEditar");

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenEditar();
    });

    overlayEditar.addEventListener('click', (event) => {
        if(event.target == overlayEditar){
            hiddenEditar();
        }
    });  

    switch (form) {
        case 'grupo':
            const grupo = document.querySelector('#legrupo');
            grupo.onkeypress = function() {return soloLetras(event)};

            break;
        case 'materia':
    
            break;
        case 'actividad':
            const nombre = document.querySelector('#enombre');
            const descripcion = document.querySelector('#edescripcion');
            const objetivo = document.querySelector('#eobjetivo');            

            nombre.onkeypress = function() {return sinEspeciales(event)};
            descripcion.onkeypress = function() {return sinEspeciales(event)};
            objetivo.onkeypress = function() {return sinEspeciales(event)};

            break;
        case 'inscrito':
            const codigo = document.querySelector('#grupo');
            codigo.onkeypress = function() {return sinEspeciales(event)};
            
            break;
        default:
                   
            break;
    }
    
    const formulario = document.querySelector(`#e${form}`);
    formulario.addEventListener('submit', async(e) => {
        e.preventDefault();
        showLoad();
        const datos = dataForm(formulario);
        if(valForm(datos))
            await actTarjeta(datos, `${form}/`, editarId);
        else{
            console.log("Faltan Datos");
            dibujarPopAlerta("Faltan campos por llenar"); 
            hiddenLoad();
        }  
    });
}

function showPop() {
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
}

function hiddenPop(){
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
}

function showEditar() {
    overlayEditar.style.opacity = "1";
    overlayEditar.style.visibility = "visible";
}

function hiddenEditar(){
    overlayEditar.style.opacity = "0";
    overlayEditar.style.visibility = "hidden";
    popsEditar.innerHTML = "";
}
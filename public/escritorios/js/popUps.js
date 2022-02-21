let overlay = "";
let botonPop = "";
const emergentes =  document.querySelector("#emergentes");


const dibujarPopUp = ([nombre = '', form = '', datos = [], boton = '']) => {
    let popUpHtml = '';

    popUpHtml += `
        <div class="overlay">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close" href="">&times;</a>

                <div class="content">
                    <form class="center" id="${form}">
        `;
    
    
    datos.forEach(({ type, name, titulo }) => {
        popUpHtml += `
            <div class="inputbox">
                <input type="${type}" name="${name}">

                <span>${titulo}</span>
            </div>    
        `;
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

    overlay = document.querySelector(".overlay");
    botonClose = document.querySelector(".close");

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop();
    });

    overlay.addEventListener('click', (event) => {
        if(event.target == overlay){
            hiddenPop();
        }
    });  
    
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
            default:
                hiddenLoad();
                throw new Error("No se ha podido validar la petición");        
                break;
        }
        const datos = dataForm(formulario, validador, vId);
        datos[`${validador}`] = vId;
        if(valForm(datos))
            await creacion(datos, form);
        else{
            console.log("Faltan Datos");  
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
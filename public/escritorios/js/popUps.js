let overlay = "";
let botonPop = "";
const emergentes =  document.querySelector("#emergentes");


const dibujarPopUp = ([nombre = '', form = '', datos = [], boton = '']) => {
    let popUpHtml = '';
    let valorForm = "";

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
        //aux=1;
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
    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const datos = dataForm(formulario);
        datos["usuario"] = uid;
        if(valForm(datos)){
            const { grupo } = creacion(datos, form);
            console.log(grupo);
        }
        else
            console.log("Faltan Datos");    
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
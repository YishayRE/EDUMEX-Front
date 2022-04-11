const emergentesComentarios =  document.querySelector("#emergenteComentarios");
let overlayComentarios = "";
let cerrarComentarios = "";


const dibujarPopComentarios = ([form = '', datos = [], boton = '']) => {
    let popUpHtml = '';

    popUpHtml += `
        <div class="overlay" id="formComentarios">
            <div class="popup">
                <h2>Comentarios</h2>

                <a class="close" id="cerrarComentarios" href="">&times;</a>

                <div class="content">
                    <form class="center" id="${form}">
                        <div id="comentariosLista">
                            <h1>Aqui van los comentarios</h1>
                        </div>
        `;
    datos.forEach(({ type, name, titulo }) => {
            popUpHtml += `
            <div class="inputbox">
                <input type="${type}" name="${name}" id="${name}">

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
    emergentesComentarios.innerHTML = popUpHtml;

    overlayComentarios = document.querySelector("#formComentarios");
    cerrarComentarios = document.querySelector("#cerrarComentarios");

    cerrarComentarios.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPopComentarios();
    });

    overlayComentarios.addEventListener('click', (event) => {
        if(event.target == overlayComentarios){
            hiddenPopComentarios();
        }
    });

    const formComentarios = document.querySelector(`#${form}`);
    formComentarios.addEventListener('submit', async(e) => {
        e.preventDefault();
        showLoad();
        let datosComentarios = dataForm(formComentarios);
        
        if(valForm(datosComentarios))
            await inscripcion(finalResult, form);

    });
}

function showPopComentarios() {
    overlayComentarios.style.opacity = "1";
    overlayComentarios.style.visibility = "visible";
}

function hiddenPopComentarios(){
    overlayComentarios.style.opacity = "0";
    overlayComentarios.style.visibility = "hidden";
}
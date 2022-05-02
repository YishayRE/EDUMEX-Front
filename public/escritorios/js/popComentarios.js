const emergentesComentarios =  document.querySelector("#emergenteComentarios");
let overlayComentarios = "";
let cerrarComentarios = "";


const dibujarPopComentarios = (conversacionesAct) => {
    const color = localStorage.getItem("color");
    const fondo = hexToRgbA(color);
    let popUpHtml = '';

    popUpHtml += `
        <div class="overlay" id="formComentarios">
            <div class="popup" id="popComentarios">
                <h2>Comentarios</h2>

                <a class="close" id="cerrarComentarios" href="">&times;</a>

                <div class="content">
                    <form class="center">
                        <div id="comentariosLista" class="comentariosLista">
        `;
    conversacionesAct.forEach((conversacion,index) => {
        popUpHtml += `
        <div class="conversacionIndividual" style="background-color: ${fondo}; border: 3px solid ${color};">
        `;
        conversacion.forEach((mensaje, index) => {
            console.log(mensaje);
            if(index === 0)
                popUpHtml += `
                    <h4>${mensaje[0]}: ${mensaje[1]}</h4>
                `;
            else
                popUpHtml += `
                <div class="mensajeConversacion">
                    <h5>${mensaje[0]}: ${mensaje[1]}</h5>
                </div>
                `;
                popUpHtml += `
                <div class="mensajeConversacion">
                    <h5>${mensaje[0]}: ${mensaje[1]}</h5>
                </div>
                `;
        });
        popUpHtml += `  
        </div>
            <div class="botonConversacion">
                    
            </div>
        `;     
    });
    popUpHtml += `
                        </div>
                        <div class="inputsComentario">
                            <input type="text" name="mensaje" id="textoComentario" class="textoComentario">
                            <button id="enviarComentario" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    console.log(popUpHtml);
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

    /*const formComentarios = document.querySelector(`#${form}`);
    formComentarios.addEventListener('submit', async(e) => {
        e.preventDefault();
        showLoad();
        let datosComentarios = dataForm(formComentarios);
        
        if(valForm(datosComentarios))
            await inscripcion(finalResult, form);

    });*/
}

function showPopComentarios() {
    overlayComentarios.style.opacity = "1";
    overlayComentarios.style.visibility = "visible";
}

function hiddenPopComentarios(){
    overlayComentarios.style.opacity = "0";
    overlayComentarios.style.visibility = "hidden";
}
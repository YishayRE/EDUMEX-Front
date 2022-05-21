const emergentesComentarios =  document.querySelector("#emergenteComentarios");
let overlayComentarios = "";
let cerrarComentarios = "";


const dibujarPopComentarios = (conversacionesAct, numTarjeta) => {
    console.log(numTarjeta);
    const color = localStorage.getItem("color");
    const fondo = hexToRgbAFuerte(color);
    let popUpHtml = '';
    let auxFlag = "true";
    let auxCampo = "true";

    popUpHtml += `
        <div class="overlay" id="formComentarios">
            <div class="popup" id="popComentarios" style="background-color: ${fondo}; border: 3px solid ${color};">
                <h2>Comentarios</h2>

                <a class="close" id="cerrarComentarios" href="">&times;</a>

                <div class="content">
                    <form class="center" style="padding: 10px; width:700px;">
                        <div id="comentariosLista" class="comentariosLista" style="border-color: ${color};">
        `;
    conversacionesAct.comentarios.comentarios.forEach((conversacion,index) => {
        popUpHtml += `
        <div class="conversacionIndividual" style="background-color: ${fondo}; border: 3px solid ${color};">
            <div class="mensajesConversacion">
        `;
        conversacion.forEach((mensaje, index) => {
            console.log(mensaje);
            if(index === 0)
                popUpHtml += `
                    <h4 class="mensajePrincipal">${mensaje[0]}:</h4>
                    <h4 class="mensajePrincipal">${mensaje[1]}</h4>
                `;
            else
                popUpHtml += `
                <div class="mensajeConversacion">
                    <h5 class="mensajeSecundario">${mensaje[0]}: ${mensaje[1]}</h5>
                </div>
                `;
        });
        popUpHtml += `
                </div>
                    <div class="botonConversacion" id="botonConversacion">
                            <input name="comentarioAct" type="text" class="enviarRespuesta invisible" id="respuesta${index + 1}" style="border-color: ${color};">
                            <button class="seleccionarComentario" id="nuevoComentario${index + 1}" style="background-color: ${fondo}; border: 3px solid ${color};">Responder</button>        
                    </div> 
            </form> 
        </div>
        `;     
    });
    popUpHtml += `
                        </div>
                        <div class="inputsComentario">
                            <input name="comentarioAct" type="text" name="mensaje" class="textoComentario invisible" id="respuesta0" Style="border: 3px solid ${color};">
                            <button class="enviarComentario" id="nuevoComentario0" type="submit" style="background-color: ${fondo}; border: 3px solid ${color};">Nuevo Comentario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    emergentesComentarios.innerHTML = popUpHtml;

    overlayComentarios = document.querySelector("#formComentarios");
    cerrarComentarios = document.querySelector("#cerrarComentarios");
    botonConversacion = document.querySelectorAll("#botonConversacion");
    seleccionarComentario = document.querySelectorAll("#seleccionarComentario");
    comentarioAct = document.querySelectorAll('[name="comentarioAct"]');


    for (let i = 0; i < comentarioAct.length; i++) {
        const boton = document.querySelector(`#nuevoComentario${i}`);
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            comentarioAct.forEach(input => {
                const idInput = input.attributes.id.value;
                const numInput = parseInt(idInput.charAt(idInput.length - 1));
                if(i !== numInput)
                    input.classList.replace("visible", "invisible");
                else
                    input.classList.replace("invisible", "visible");
            });
        });
    }

    comentarioAct.forEach((input,index) => {
        input.addEventListener('keypress', async(e) =>{
            if(e.key == "Enter"){
                e.preventDefault();
                const cerrarComentarios = document.querySelector("#cerrarComentarios");
                const abrirComentarios = document.querySelectorAll("#comentarios");

                console.log(numTarjeta);
                const data = {
                    mensaje: input.value,
                    conversacion: index,
                    actividad: conversacionesAct.comentarios.actividad
                }
                showLoad();
                await mandarComentario(data);
                cerrarComentarios.click();
                abrirComentarios[numTarjeta].click();
                hiddenLoad();
            }
        });
    });

    cerrarComentarios.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPopComentarios();
    });

    overlayComentarios.addEventListener('click', (event) => {
        if(event.target == overlayComentarios){
            hiddenPopComentarios();
        }
    });
}

function showPopComentarios() {
    overlayComentarios.style.opacity = "1";
    overlayComentarios.style.visibility = "visible";
    overlayComentarios.style.display = "block";
}

function hiddenPopComentarios(){
    overlayComentarios.style.opacity = "0";
    overlayComentarios.style.visibility = "hidden";
    overlayComentarios.style.display = "none";
}
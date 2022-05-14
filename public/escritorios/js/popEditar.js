const emergenteEditarUser =  document.querySelector("#emergenteEditarUser");
let overlayEditarUser;
let cerrarEditarUser;

const dibujarPopEditarUser = () => {
    let popUpHtml = '';

    popUpHtml += `
        <div class="overlay" id="formEditarUser">
            <div class="popup" id="popEditarUser">
                <h2>Editar Usuario</h2>

                <a class="close" id="cerrarEditarUser" href="">&times;</a>

                <div class="content">
                    <form class="center" style="padding: 10px;">
                        <div id="contenidoDatosUser" class="contenidoDatosUser">
                        <input name="nombre" type="text" class="textoComentario" id="nombre">
                        <input name="apPat" type="text" class="textoComentario" id="apPat">
                        <input name="apMat" type="text" class="textoComentario" id="apMat">
                        <input name="password" type="password" class="textoComentario" id="password">
                        <input name="passwordC" type="password" class="textoComentario" id="passwordC">
        `;
    popUpHtml += `
                        </div>
                        <div class="inputsDatosUser">
                            <button class="enviarComentario" id="nuevoComentario0" type="submit">Editar Usuario</button>
                            <button class="enviarComentario" id="nuevoComentario0" type="submit">Eliminar Usuario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    emergenteEditarUser.innerHTML = popUpHtml;

    overlayEditarUser = document.querySelector("#formEditarUser");
    cerrarEditarUser = document.querySelector("#cerrarEditarUser");
    
    cerrarEditarUser.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPopEditarUser();
    });

    overlayEditarUser.addEventListener('click', (event) => {
        if(event.target == overlayEditarUser){
            hiddenPopEditarUser();
        }
    });
}

function showPopEditarUser() {
    overlayEditarUser.style.opacity = "1";
    overlayEditarUser.style.visibility = "visible";
    overlayEditarUser.style.display = "block";
}

function hiddenPopEditarUser(){
    overlayEditarUser.style.opacity = "0";
    overlayEditarUser.style.visibility = "hidden";
    overlayEditarUser.style.display = "none";
}
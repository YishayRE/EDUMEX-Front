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
                    <form class="center">
                        <div id="contenidoDatosUser" class="contenidoDatosUser">
                            <div class="inputbox">
                                <input type="text" name="nombre" id="nombre">
                                <span>Nombre</span>
                            </div>
                            <div class="inputbox">
                                <input type="text" name="nombre" id="apPat">
                                <span>Apellido Paterno</span>
                            </div>
                            <div class="inputbox">
                                <input type="text" name="nombre" id="apMat">
                                <span>Apellido Materno</span>
                            </div>  
                            <div class="inputbox">
                                <input type="password" name="nombre" id="password">
                                <span>Contraseña</span>
                            </div>  
                            <div class="inputbox">
                                <input type="password" name="nombre" id="passwordC">
                                <span>Confirmar Contraseña</span>
                            </div>      
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
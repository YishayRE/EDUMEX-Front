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
                    <form class="center" id="eUser">
                        <div id="contenidoDatosUser" class="contenidoDatosUser">
                            <div class="inputbox">
                                <input type="text" name="nombre" id="nombre">
                                <span>Nombre</span>
                            </div>
                            <div class="inputbox">
                                <input type="text" name="apellidoP" id="apPat">
                                <span>Apellido Paterno</span>
                            </div>
                            <div class="inputbox">
                                <input type="text" name="apellidoM" id="apMat">
                                <span>Apellido Materno</span>
                            </div>      
        `;
    popUpHtml += `
                        </div>
                        <div class="botonesDatosUser">
                            <button class="botonUser" id="editarUser" type="submit">Editar Usuario</button>
                            <button class="botonUser" id="eliminarUser">Eliminar Usuario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
    emergenteEditarUser.innerHTML = popUpHtml;

    overlayEditarUser = document.querySelector("#formEditarUser");
    cerrarEditarUser = document.querySelector("#cerrarEditarUser");

    const formulario = document.querySelector(`#eUser`);
    formulario.addEventListener('submit', async(e) => {
        e.preventDefault();
        showLoad();
        const datos = dataForm(formulario);
        if(valForm(datos))
            await actTarjeta(datos, `usuario/`);
        else{
            console.log("Faltan Datos");
            dibujarPopAlerta("Faltan campos por llenar"); 
            hiddenLoad();
        }  
    });

    const elminarUser = document.querySelector("#eliminarUser");
    elminarUser.addEventListener('click', async(e) => {
        e.preventDefault();
        showLoad();
        await elimTarjeta(`usuario/id/`);
    });
    
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
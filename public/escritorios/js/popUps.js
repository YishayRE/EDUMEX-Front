const popUp = document.querySelector('#navBar');

const dibujarNavBar = (datos = []) => {
    let popUpHtml = '';

    popUpHtml += `
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Unirme a Grupo</h2>

                <a class="close" href="#">&times;</a>

                <div class="content">
                    <form class="center" id="form_unirGrupo">
                        <div class="inputbox">
                            <input id="Nom_grupo" type="text" name="nombre">

                            <span>Código del grupo</span>
                        </div>
                        
                        <div>
                            <button id="enviar_codigo" type="submit">Unirme</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    datos.forEach(({ nombre, referencia },index) => {
        if(referencia.startsWith('#')){
            popUpHtml += `
            <li><a class="botonesBarra" id="vp${index+1}" href="${referencia}">${nombre}</a></li>
            `;
        }else if(referencia.startsWith('')){
            popUpHtml += `
            <li><a id="logout" href="${referencia}">${nombre}</a></li>
            `;
        }else{
            popUpHtml += `
            <li><a href="${baseUrl}${referencia}">${nombre}</a></li>
            `;
        }
        aux=1;
    });

    popUpHtml += `
            </ul>
        </nav>
    `;

    popUp.innerHTML = popUpHtml;
}
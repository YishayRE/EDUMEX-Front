let overlay = "";
let botonPop = "";
const emergentes =  document.querySelector("#emergentes");


const dibujarPopUp = (datos = []) => {
    let popUpHtml = '';
    let valorForm = "";
    
    datos.forEach(({ nombre, form, boton },index) => {
        popUpHtml += `
        <div id="popup${index+1}" class="overlay">
            <div class="popup">
                <h2>${nombre}</h2>

                <a class="close" href="">&times;</a>

                <div class="content">
                    <form class="center" id="${form}">
        `;
    if(form === "form_unirGrupo"){
        popUpHtml += `
                        <div class="inputbox">
                            <input id="Nom_grupo" type="text" name="nombre">

                            <span>Código del grupo</span>
                        </div>    
        `;
        valorForm = form;
    }else if(form === "form_crearGrupo"){
        popUpHtml += `
                        <div class="inputbox">
                            <input id="Nom_grupo" type="text" name="nom_grupo" placeholder="Ej. '3°B'">

                            <span>Nombre del grupo</span>
                        </div>
                        
                        <div class="inputbox">
                            <input id="Texto_bienvenida" type="text" name="texto_bienvenida" placeholder="Inserte una bienvenida">
                            
                            <span>Texto de Bienvenida</span>
                        </div>
    `;
    }else if(form === "form_crearMateria"){
        popUpHtml += `
                        <div class="inputbox">
                            <input id="Nom_materia" type="text" name="nombre" placeholder="Ej. '3°B'">
                            <span>Nombre de la materia</span>
                        </div><div class="inputbox">
                            <input id="Desc_materia" type="text" name="desc_materia" placeholder="Inserte una descripción">
                            <span>Descripción de la materia</span>
                        </div><div class="inputbox">
                            <input id="Color_materia" type="color" pattern="#[a-f0-9]{6}" name="color">
                            <span>Color de la materia</span>
                        </div>
    `;
    }else if(form === "form_crearActividad"){
        popUpHtml += `
                        <div class="inputbox">
                            <input id="Nom_actividad" type="text" name="nombre" placeholder="Ej. '3°B'">
                            <span>Nombre de la materia</span>
                        </div><div class="inputbox">
                            <input id="Desc_actividad" type="text" name="descripcion" placeholder="Inserte una descripción">
                            <span>Descripcion de la actividad</span>
                        </div><div class="inputbox">
                            <input id="Obj_actividad" type="text" name="objetivo" placeholder="Inserte un objetivo">
                            <span>Objetivo de la actividad</span>
                        </div><div class="inputbox">
                            <input id="Calif_actividad" type="text" name="calificacion" placeholder="Ej. 10">
                            <span>Calificación</span>
                        </div><div class="inputbox">
                            <input id="Tiempo_actividad" type="text" name="tiempo" placeholder="Ej. 10 min">
                            <span>Tiempo</span>
                        </div>
    `;
    }
    
    popUpHtml += `
                        <div>
                            <button id="enviar${form}" type="submit">${boton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;  
        aux=1;
    });

    emergentes.innerHTML = popUpHtml;

    overlay = document.querySelector(".overlay");
    botonClose = document.querySelector(".close");

    if(valorForm === "form_unirGrupo"){
        botonPop = document.querySelector("#est0");
    }else{
        botonPop = document.querySelector("#pro0");
    }

    botonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hiddenPop();
    });

    botonPop.addEventListener('click', (event) => {
        event.preventDefault();
        showPop();
    });

    overlay.addEventListener('click', (event) => {
        if(event.target == overlay){
            hiddenPop();
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
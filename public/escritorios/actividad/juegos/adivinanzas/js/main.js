const btnJuego = document.querySelectorAll('#btnJuego'); 
const materia = document.querySelector('#materia');
const actividad = document.querySelector('#actividad');
const tipoJ = document.querySelector('#tipoJ');
const objetivo = document.querySelector('#objetivo');
const descripcion = document.querySelector('#descripcion');
const contenedor = document.querySelector('#contenedor');
const adicion = document.querySelector('#adicion');
const opcion = document.querySelector('#opcion0');
const select = document.querySelector('#select0');

const titulo = localStorage.getItem('tituloJ');

let contadorEtiqueta = 0;

adicion.addEventListener('click', () => {
    contadorEtiqueta++;
    contenedor.innerHTML += `
        <div class="elementoJuego">
            <div class="image-upload">
                <label for="imagen${contadorEtiqueta}">
                <img id="cargaImagen" src="../../../../images/upload.png"/>
                </label>
                
                <input type="file" name="imagen${contadorEtiqueta}" id="imagen${contadorEtiqueta}" accept="image/png, image/jpeg">
            </div>
            <div>
                <h5>Ingresa la sentencia</h5>
                <input type="text" name="sentencia${contadorEtiqueta}" id="sentencia${contadorEtiqueta}">
            </div>
            <div>
                <h5>Escribe la respuesta</h5>
                <input type="text" name="respuesta${contadorEtiqueta}" id="respuesta${contadorEtiqueta}">
            </div>
        </div>
    `;
});

const checarRol = async() => {
    if(rol == "PRO_ROLE"){
        dibujarNavBar();
        cerrarSesion();
    }else if(rol == "EST_ROLE"){
        dibujarNavBar();
        cerrarSesion();
    }
}

const main = async() => {
    showLoad();
    await validarJWT();
    await checarRol();
    await obtenerInfo();
    checarExpiracion(fecha);
    hiddenLoad();
}

main();
const dibujarGrupo = (grupos = []) => {
    const tarjetas = document.querySelector('#tarjetas');
    let gruposHtml = '';

    grupos.forEach(({ nombre, saludo },index) => {
        gruposHtml += `
		<div class="tarjeta">
			<div class="tarjeta_nombre">
                <div name="${index}" id="editar" class="button_editar">
                    <img src="${baseUrl}/images/editar.png" alt="..." class="imgEditar">
                </div>
				<h3>${nombre}</h3>
			</div>

			<div class="tarjeta_bienvenida">
				<h5>${saludo}</h5>
			</div>
        <div name="${index}" id="entrar" class="tarjeta_button">
            <h5>Abrir</h5>
        </div>
        </div>
		`;
    });
    tarjetas.innerHTML = gruposHtml;

    const btnEntrar = document.querySelectorAll('#entrar');

    btnEntrar.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            localStorage.setItem('grupo',grupos[index]._id);
            window.location = '../grupo';
        });
    });

    const vistaTarjetas = document.querySelectorAll("#editar");

    vistaTarjetas.forEach((edit, index) => {
        edit.addEventListener('click', (event) => {
            event.preventDefault();
            dibujarPopEditar(datosPopP, grupos[index]._id);
            showEditar();
        });
    });
}

const dibujarMateria = (materias = []) => {
    let materiasHtml = '';
    materias.forEach(({ nombre, color },index) => {
        const fondo = hexToRgbA(color);
        materiasHtml += `
		<div class="tarjetaMateria" 
        style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
                <div name="${index}" id="editar${index}" class="button_editar">
                    <img src="${baseUrl}/images/editar.png" alt="..." class="imgEditar">
                </div>
				<h3>${nombre}</h3>
			</div>
        <div name="${index}" id="entrar" class="tarjetaMateria_button"
        style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
            <h5>Abrir</h5>
        </div>
        </div>
		`;
    });
    tarjetas.innerHTML = materiasHtml;

    const btnEntrar = document.querySelectorAll('#entrar');
    
    btnEntrar.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            localStorage.setItem('materia',materias[index]._id);
            localStorage.setItem('color',materias[index].color);
            window.location = '../materia';
        });
    });

    const vistaTarjetas = document.querySelector("#tarjetas");

    for(let i = 0; i < (vistaTarjetas.children.length); i++){
        document.querySelector(`#editar${i}`).addEventListener('click', (event) => {
            event.preventDefault();
            dibujarPopEditar(datosPop);
            showEditar();
        });
    }
}

const dibujarActividad = (actividades = []) => {
    let actividadesHtml = '';
    const color = localStorage.getItem('color');

    actividades.forEach(({ nombre, descripcion, objetivo },index) => {
        const fondo = hexToRgbA(color);
        actividadesHtml += `
		<div class="tarjetaMateria" 
        style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
                <div name="${index}" id="editar${index}" class="button_editar">
                    <img src="${baseUrl}/images/editar.png" alt="..." class="imgEditar">
                </div>
				<h3>${nombre}</h3>
			</div>
            <div>
                <h5>${descripcion}</h5>
            </div>
            <div>
                <h5>${objetivo}</h5>
            </div>
        <div name="${index}" id="entrar" class="tarjetaMateria_button"
        style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
            <h5>Abrir</h5>
        </div>
        </div>
		`;
    });
    tarjetas.innerHTML = actividadesHtml;
    const btnEntrar = document.querySelectorAll('#entrar');
    btnEntrar.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            localStorage.setItem('juego',juegos[index]._id);
            window.location = '../escritorio_juego';
        });
    });

    const vistaTarjetas = document.querySelector("#tarjetas");

    for(let i = 0; i < (vistaTarjetas.children.length); i++){
        document.querySelector(`#editar${i}`).addEventListener('click', (event) => {
            event.preventDefault();
            dibujarPopEditar(datosPop);
            showEditar();
        });
    }
}
const dibujarGrupo = (grupos = []) => {
    const tarjetas = document.querySelector('#tarjetas');
    let gruposHtml = '';
    let nombreTitulo = '';

    grupos.forEach(({ grado, grupo, saludo },index) => {
        gruposHtml += `
		<div class="tarjeta">
			<div class="tarjeta_nombre">
        `;
        if(rol == "PRO_ROLE"){
            gruposHtml += `
                <div class="buttons_tarjetas">
                    <div name="${index}" id="eliminar">
                        <img src="${baseUrl}/images/eliminar.png" alt="Eliminar" class="imgEliminar">
                    </div>    
                    <div name="${index}" id="editar">
                        <img src="${baseUrl}/images/editar.png" alt="Editar" class="imgEditar">
                    </div>
                </div>
            `;
        }
        gruposHtml += `
				<h3>${grado}°${grupo}</h3>
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
            localStorage.setItem('grupo', grupos[index]._id);
            nombreTitulo = 'Grupo: ' +  grupos[index].grado + '°' + grupos[index].grupo;
            localStorage.setItem('tituloG', nombreTitulo);
            window.location.replace(`${escritoriosUrl}grupo`);
        });
    });

    if(rol == "PRO_ROLE"){
        const vistaTarjetaEd = document.querySelectorAll("#editar");

        vistaTarjetaEd.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopEditar(datosPopP, grupos[index]._id);
                showEditar();
            });
        });

        const vistaTarjetaEl = document.querySelectorAll("#eliminar");

        vistaTarjetaEl.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopAlerta('eliminar', `grupo/${grupos[index]._id}`);
            });
        });
    }
}

const dibujarMateria = (materias = []) => {
    let materiasHtml = '';
    let nombreTitulo = '';

    materias.forEach(({ nombre, color },index) => {
        const fondo = hexToRgbA(color);
        materiasHtml += `
		<div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
        `;
        if(rol == "PRO_ROLE"){
            materiasHtml += `
            <div class="buttons_tarjetas">
                    <div name="${index}" id="eliminar">
                        <img src="${baseUrl}/images/eliminar.png" alt="Eliminar" class="imgEliminar">
                    </div>    
                    <div name="${index}" id="editar">
                        <img src="${baseUrl}/images/editar.png" alt="Editar" class="imgEditar">
                    </div>
            </div>
            `;
        }
        materiasHtml += `
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
            nombreTitulo = 'Materia: ' +  materias[index].nombre;
            localStorage.setItem('tituloM', nombreTitulo);
            window.location.replace(`${escritoriosUrl}materia`);
        });
    });

    if(rol == "PRO_ROLE"){
        const vistaTarjetas = document.querySelectorAll("#editar");

        vistaTarjetas.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopEditar(datosPop, materias[index]._id);
                showEditar();
            });
        });

        const vistaTarjetaEl = document.querySelectorAll("#eliminar");

        vistaTarjetaEl.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopAlerta('eliminar', `materia/${materias[index]._id}`);
            });
        });
    }
}

const dibujarActividad = (actividades = []) => {
    let actividadesHtml = '';
    let nombreTitulo = '';

    const color = localStorage.getItem('color');

    actividades.forEach(({ nombre, descripcion, objetivo },index) => {
        const fondo = hexToRgbA(color);
        actividadesHtml += `
		<div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
        `;
        if(rol == "PRO_ROLE"){
            actividadesHtml += `
            <div class="buttons_tarjetas">
                    <div name="${index}" id="eliminar">
                        <img src="${baseUrl}/images/eliminar.png" alt="Eliminar" class="imgEliminar">
                    </div>    
                    <div name="${index}" id="editar">
                        <img src="${baseUrl}/images/editar.png" alt="Editar" class="imgEditar">
                    </div>
            </div>
            `;
        }
        actividadesHtml += `
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
            localStorage.setItem('actividad',actividades[index]._id);
            window.location.replace(`${baseUrl}escritorios/actividad/seleccion`);
        });
    });

    if(rol == "PRO_ROLE"){
        const vistaTarjetas = document.querySelectorAll("#editar");

        vistaTarjetas.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopEditar(datosPop, actividades[index]._id);
                showEditar();
            });
        });

        const vistaTarjetaEl = document.querySelectorAll("#eliminar");

        vistaTarjetaEl.forEach((edit, index) => {
            edit.addEventListener('click', (event) => {
                event.preventDefault();
                dibujarPopAlerta('eliminar', `actividad/${actividades[index]._id}`);
            });
        });
    }
}
const dibujarGrupo = (grupos = []) => {
    const tarjetas = document.querySelector('#tarjetas');
    let gruposHtml = '';

    grupos.forEach(({ nombre, saludo },index) => {
        gruposHtml += `
		<div class="tarjeta">
			<div class="tarjeta_nombre">
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
}

const dibujarMateria = (materias = []) => {
    let materiasHtml = '';
    materias.forEach(({ nombre, color },index) => {
        const fondo = hexToRgbA(color);
        materiasHtml += `
		<div class="tarjetaMateria" 
        style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
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
}
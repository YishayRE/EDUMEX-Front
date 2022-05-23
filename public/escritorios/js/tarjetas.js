const dibujarGrupo = (grupos = []) => {
    const tarjetas = document.querySelector('#tarjetas');
    let gruposHtml = '';
    let nombreTitulo = '';

    grupos.forEach(({ grado, grupo, saludo }, index) => {
        gruposHtml += `
		<div class="tarjeta">
			<div class="tarjeta_nombre">
        `;
        if (rol == "PRO_ROLE") {
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
				<h5 class="textoTarjetas">${saludo}</h5>
			</div>
        <div name="${index}" id="entrar" class="tarjeta_button">
            <h5>Abrir</h5>
        </div>
		`;
        if (rol == "PRO_ROLE") {
            gruposHtml += `
            <div name="${index}" id="listaEst" class="tarjeta_button">
                <h5>Lista</h5>
            </div>
            </div>
            `;
        }
        gruposHtml += `
        </div>
		`;
    });
    tarjetas.innerHTML = gruposHtml;

    const btnEntrar = document.querySelectorAll('#entrar');

    btnEntrar.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            localStorage.setItem('grupo', grupos[index]._id);
            nombreTitulo = 'Grupo: ' + grupos[index].grado + '°' + grupos[index].grupo;
            localStorage.setItem('tituloG', nombreTitulo);
            window.location.replace(`${escritoriosUrl}grupo`);
        });
    });

    if (rol == "PRO_ROLE") {
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
                dibujarPopAlerta('eliminar', `grupo/id/`, grupos[index]._id);
            });
        });

        const vistaListaEst = document.querySelectorAll("#listaEst");

        vistaListaEst.forEach((lista, index) => {
            lista.addEventListener('click', async(event) => {
                event.preventDefault();
                console.log(grupos[index]._id)
                const listaEstudiantes = await obtenerEstudiantes(grupos[index]._id);
                dibujarPopAlerta('listaEst', `inscrito/id/`, listaEstudiantes);
            });
        });
    }
}

const dibujarMateria = (materias = []) => {
    let materiasHtml = '';
    let nombreTitulo = '';

    materias.forEach(({ nombre, color }, index) => {
        const fondo = hexToRgbA(color);
        materiasHtml += `
		<div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color};">
			<div class="tarjeta_nombre" style="color: ${color};">
        `;
        if (rol == "PRO_ROLE") {
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
            localStorage.setItem('materia', materias[index]._id);
            localStorage.setItem('color', materias[index].color);
            nombreTitulo = 'Materia: ' + materias[index].nombre;
            localStorage.setItem('tituloM', nombreTitulo);
            window.location.replace(`${escritoriosUrl}materia`);
        });
    });

    if (rol == "PRO_ROLE") {
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
                dibujarPopAlerta('eliminar', `materia/id/`, materias[index]._id);
            });
        });
    }
}

const dibujarActividad = (actividades = []) => {
    let actividadesHtml = '';
    let nombreTitulo = '';

    const color = localStorage.getItem('color');
    const fondo = hexToRgbA(color);
    actividades.forEach(({ nombre, descripcion, objetivo, juego, disponible, calificacion, intentos }, index) => {

        if (rol == "PRO_ROLE") {
            actividadesHtml += `
                <div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color};">
                    <div class="tarjeta_nombre" style="color: ${color};">
                `;

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

            actividadesHtml += `
                <div class="tituloTarjetas" style="color: ${color};">
                        <h3 class="tituloAct">${nombre}</h3>
                </div>
                </div>
                <div>
                    <h5 class="textoTarjetas" style="color: ${color};">${descripcion}</h5>
                </div>
                <div>
                    <h5 class="textoTarjetas" style="color: ${color};">${objetivo}</h5>
                </div>
            <div class="botonesActividad">
            `;

            if (!juego) {
                actividadesHtml += `
                    <div name="${index}" id="entrar" class="tarjetaMateria_button"
                    style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
                        <h5>Abrir</h5>
                    </div>
                `;
            }
            actividadesHtml += `
                <div name="${index}" id="comentarios" class="tarjetaMateria_button"
                style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
                    <h5>Comentarios</h5>
                </div>
            `;

            actividadesHtml += `
                </div>
            </div>
            `;
        } else {
            if (disponible == true) {
                actividadesHtml += `
                <div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color};">
                    <div class="tarjeta_nombre" style="color: ${color};">
                `;

                actividadesHtml += `
                    <div class="tituloTarjetas">
                        <h3>${nombre}</h3>
                    </div>
                    </div>
                    <div>
                        <h5 class="textoTarjetas" style="color: ${color};">${descripcion}</h5>
                    </div>
                    <div>
                        <h5 class="textoTarjetas" style="color: ${color};">${objetivo}</h5>
                    </div>
                    <div><h5 style="color: ${color};" class="textoBox">Intentos restantes: ${calificacion.intentos}</h5></div>
                <div class="botonesActividad">
                `;

                if (calificacion.intentos !== intentos) {
                    actividadesHtml += `
                    <div><h5 style="color: ${color};" class="textoBox">Tu calificación final es: ${calificacion.calificacion}</h5></div>
                    `;
                }

                if (calificacion.intentos > 0 && calificacion.calificacion !== 10) {
                    actividadesHtml += `
                    <div name="${index}" id="entrar" class="tarjetaMateria_button"
                    style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
                        <h5>¡JUGAR!</h5>
                    </div>
                    `;

                } else if (calificacion.intentos === 0 || calificacion.calificacion === 10) {
                    actividadesHtml += `
                    <div><h5 style="color: ${color};" class="textoBox">Gracias por Jugar</h5></div>
                    `;
                }

                actividadesHtml += `
                    <div name="${index}" id="comentarios" class="tarjetaMateria_button"
                    style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
                        <h5>Comentarios</h5>
                    </div>
                </div>

                </div>
                `;
            } else {
                actividadesHtml += `
                <div class="tarjetaMateria" style="background-color: ${fondo}; border: 5px solid ${color}; display: none;">
                `;

                actividadesHtml += `
                <div class="botonesActividad">
                    <div name="${index}" id="comentarios" class="tarjetaMateria_button"
                    style="background-color: ${fondo}; border: 5px solid ${color}; color:${color};">
                        <h5>Comentarios</h5>
                    </div>
                </div>

                </div>
                `;
            }
        }

    });
    tarjetas.innerHTML = actividadesHtml;

    const btnEntrar = document.querySelectorAll('#entrar');
    console.log(btnEntrar);
    const btnComentarios = document.querySelectorAll('#comentarios');
    let aux = 0;

    switch (rol) {
        case "PRO_ROLE":
            actividades.forEach(({ juego }, index) => {
                if (!juego) {
                    btnComentarios[index].style.visibility = "hidden";
                }
            });
            btnComentarios.forEach((btn, index) => {
                if (!actividades[index].disponible)
                    btnEntrar[aux++].addEventListener('click', () => {
                        localStorage.setItem('actividad', actividades[index]._id);
                        window.location.replace(`${baseUrl}escritorios/actividad/seleccion`);
                    });
            });

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
                    dibujarPopAlerta('eliminar', `actividad/id/`, actividades[index]._id);
                });
            });
            break;
        case "EST_ROLE":
            btnComentarios.forEach((btn, index) => {
                console.log(actividades[index]);
                if (actividades[index].disponible == true) {
                    if (actividades[index].calificacion.intentos > 0 && actividades[index].calificacion.calificacion !== 10)
                        btnEntrar[aux++].addEventListener('click', () => {
                            localStorage.setItem('juego', actividades[index].juego._id);
                            localStorage.setItem('actividad', actividades[index]._id);
                            localStorage.setItem('intentos', actividades[index].calificacion.intentos);
                            window.location.replace(`${juegosUrl}juegos/${actividades[index].tipoJuego}/jugar`);
                        });
                }
            });
            break;
        default:
            break;
    }

    btnComentarios.forEach((btn, index) => {
        btn.addEventListener('click', async() => {
            console.log(actividades[index]._id);
            const mensajesAct = await obtenerMensajes(actividades[index]._id);
            console.log(mensajesAct);
            dibujarPopComentarios(mensajesAct, index);
            showPopComentarios();
        });
    });

}
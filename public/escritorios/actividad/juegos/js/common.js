const obtenerInfo = async() => {
    const actData = await obtenerAct();

    materia.innerHTML = actData.materia.nombre.toUpperCase();
    actividad.innerHTML = actData.nombre.toUpperCase();
    tipoJ.innerHTML = localStorage.getItem('tipoJ').toUpperCase();
}
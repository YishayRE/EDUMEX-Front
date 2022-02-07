const obtenerArray = async(arrayPath) => {
    const token = localStorage.getItem('token') || '';

    const resp = await fetch(baseApi + arrayPath, {
        method: 'GET',
        headers: { 'x-token': token }
    });

    const respuesta = await resp.json();

    return respuesta;
}
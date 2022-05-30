const codigoJuego = async() => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + 'juego/codigo/', {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: localStorage.getItem('juego') }
    });

    const respuesta = await resp.json();
    console.log(respuesta);
    if (respuesta.msg) {
        throw new Error(respuesta.msg);
    }

    const codigo = document.querySelector('#codigo');
    console.log(codigo);
    codigo.innerHTML = respuesta.codigo;
    return respuesta.tiempo;
}

const obtenerRespuestas = async() => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + 'juego/respuestas/', {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: localStorage.getItem('juego') }
    });

    const respuesta = await resp.json();

    if (respuesta.msg) {
        throw new Error(respuesta.msg);
    }
    return respuesta;
}
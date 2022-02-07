let uid = '';
let rol = '';
let fecha = '';

const tieneJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if(token.length <= 10){
        throw new Error('No existe token');
    }

    const resp = await fetch(baseApi + 'auth', {
        method: 'GET',
        headers: {'x-token': token}
    });
    const respuesta = await resp.json();
    
    localStorage.removeItem('token');

    if(!respuesta.usuario){
        throw new Error(respuesta.msg);
    }
}

const validarJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if (token.length <= 10) {
        window.location = `${baseUrl}`;
    }

    const resp = await fetch(baseApi + 'auth/' + token, {
        method: 'GET',
        headers: { 'x-token': token }
    });

    const respuesta = await resp.json();

    if (!respuesta.usuario) {
        localStorage.removeItem('token');
        window.location = `${baseUrl}`;
    }

    uid = respuesta.webToken.uid;
    rol = respuesta.webToken.rol;
    fecha = respuesta.webToken.exp;
}
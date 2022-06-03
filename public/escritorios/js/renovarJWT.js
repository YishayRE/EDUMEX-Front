function checarExpiracion(exp) {
    const fechaExp = new Date(exp * 1000);
    const actual = Date.now();
    const fechaAhorita = new Date(actual);

    if (fechaExp > fechaAhorita) {
        renovarJWT();
    }
}

const renovarJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if (token.length <= 10) {
        throw new Error('No hay token en el servidor');
    }
    const resp = await fetch(baseApi + "auth", {
        method: 'GET',
        headers: { 'x-token': token }
    });
    const { usuario: userDB, token: tokenDB } = await resp.json();

    localStorage.setItem('token', tokenDB);
}
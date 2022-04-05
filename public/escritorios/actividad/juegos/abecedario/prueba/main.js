const codigoJuego = async() => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + 'juego/id/', {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: localStorage.getItem('juego') }
    });

    const respuesta = await resp.json();
    console.log(respuesta);
    if(respuesta.msg){
        throw new Error(respuesta.msg);        
    }

    const codigo = document.querySelector('#codigo');

    codigo.innerHTML = respuesta;
}
    
const main = async() => {
    await validarJWT();
    await codigoJuego();
}

main();
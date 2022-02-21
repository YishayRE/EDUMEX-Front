const obtenerArray = async(arrayPath) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + arrayPath, {
        method: 'GET',
        headers: { 'x-token': token, user: uid }
    });

    const respuesta = await resp.json();
    
    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta("No tienes materias, crea una");
        throw new Error(respuesta.msg);        
    }

    return respuesta;
}
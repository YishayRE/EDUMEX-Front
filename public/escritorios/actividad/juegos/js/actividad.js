const obtenerAct = async() => {
    const token = localStorage.getItem('token') || '';
    const actId = localStorage.getItem('actividad') || '';

    const resp = await fetch(`${actApi}getAct/${actId}`, {
        method: 'GET',
        headers: { 'x-token': token, user: uid }
    });

    const respuesta = await resp.json();
    
    if(respuesta.msg){
        hiddenLoad();
        throw new Error(respuesta.msg);        
    }
    
    return respuesta;
}
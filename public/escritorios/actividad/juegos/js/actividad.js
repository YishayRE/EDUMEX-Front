const obtenerAct = async() => {
    const token = localStorage.getItem('token') || '';
    const actId = localStorage.getItem('actividad') || '';

    const resp = await fetch(`${baseApi}actividad/getAct/id/`, {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: actId}
    });

    const respuesta = await resp.json();

    console.log(respuesta);
    
    if(respuesta.msg){
        hiddenLoad();
        throw new Error(respuesta.msg);        
    }
    
    return respuesta;
}
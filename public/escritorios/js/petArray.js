const obtenerArray = async(arrayPath) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + arrayPath, {
        method: 'GET',
        headers: { 'x-token': token, user: uid }
    });

    const respuesta = await resp.json();
    
    if(respuesta.msg){
        hiddenLoad();
        if(arrayPath.startsWith('grupo')){
            dibujarPopAlerta("No tienes grupos, crea uno");
        }else if(arrayPath.startsWith('materia')){
            dibujarPopAlerta("No tienes materias, agrega una");
        }else if(arrayPath.startsWith('actividad')){
            dibujarPopAlerta("No tienes actividades, agrega una");
        }
        throw new Error(respuesta.msg);        
    }
    return respuesta;
}
const obtenerArray = async(arrayPath, idT) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + arrayPath + 'id', {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: idT }
    });

    const respuesta = await resp.json();
    
    if(respuesta.msg){
        hiddenLoad();
        switch (rol) {
            case "PRO_ROLE":
                if(arrayPath.startsWith('grupo')){
                    dibujarPopAlerta("No tienes grupos, crea uno");
                }else if(arrayPath.startsWith('materia')){
                    dibujarPopAlerta("No tienes materias, agrega una");
                }else if(arrayPath.startsWith('actividad')){
                    dibujarPopAlerta("No tienes actividades, agrega una");
                }
                break;
            case "EST_ROLE":
                if(arrayPath.startsWith('inscrito')){
                    dibujarPopAlerta("Todavia no estás inscrito en un grupo");
                }else if(arrayPath.startsWith('materia')){
                    dibujarPopAlerta("Tu profesor no ha agregado materias");
                }else if(arrayPath.startsWith('actividad')){
                    dibujarPopAlerta("Tu profesor no ha agregado actividades");
                }
                break;
            default:
                break;
        }
        throw new Error(respuesta.msg);        
    }
    return respuesta;
}
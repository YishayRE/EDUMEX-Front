const obtenerArray = async(arrayPath, idT) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + arrayPath + 'id/', {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: idT }
    });

    const respuesta = await resp.json();
    console.log(respuesta);
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

const obtenerEstudiantes = async(idG) => {
    showLoad();
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + "inscrito/inscritos/", {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: idG }
    });
    const respuesta = await resp.json();
    console.log(respuesta);
    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta("No se pudo obtener a los estudiantes del grupo");
        throw new Error(respuesta.msg);
    }
    hiddenLoad();
    return respuesta;
}

const obtenerMensajes = async(idAct) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetch(baseApi + "comentario/id/", {
        method: 'GET',
        headers: { 'x-token': token, user: uid, id: idAct }
    });

    const respuesta = await resp.json();
    console.log(respuesta);
    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }
    console.log(respuesta);
    return respuesta;
}

const mandarComentario = async(formData) =>{
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(formData);

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    const resp = await fetch(baseApi + "comentario/id/", requestOptions);

    const respuesta = await resp.json();
    console.log(respuesta);

    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }

    return respuesta;
}
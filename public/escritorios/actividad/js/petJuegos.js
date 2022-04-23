const crearJuego = async(idAct) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("idAct", idAct);
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({});

    console.log(raw);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(juegosApi, requestOptions);
      
    const respuesta = await resp.json();
    console.log(respuesta);

    let errores = '';
    
    if(respuesta.errors){
        respuesta.errors.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        hiddenLoad();
        dibujarPopAlerta(errores);
        throw new Error(errores);        
    }

    return respuesta;   
}

const terminarJuego = async(formData = {}, idT, esJuego = '') => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("idAct", localStorage.getItem('actividad'));
    myHeaders.append("Content-Type", "application/json");
    
    console.log(localStorage.getItem('actividad'));
    let raw = JSON.stringify(formData);
//mandar tipo de juego
    console.log(raw);
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(juegosApi + 'id/terminar/', requestOptions);
      
    const respuesta = await resp.json();
    console.log(respuesta);

    let errores = '';
    
    if(respuesta.msg){
        respuesta.msg.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        hiddenLoad();
        dibujarPopAlerta(errores);
        throw new Error(errores);        
    }

   // window.location.replace(`${materiaUrl}`);
}

const jugarJuego = async(respuestas = []) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("idAct", localStorage.getItem('actividad'));
    myHeaders.append("Content-Type", "application/json");
    
    console.log(localStorage.getItem('actividad'));
    let raw = JSON.stringify(formData);
    console.log(raw);
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(juegosApi + 'responder/', requestOptions);
      
    const respuesta = await resp.json();
    console.log(respuesta);

    let errores = '';
    
    if(respuesta.msg){
        respuesta.msg.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        hiddenLoad();
        dibujarPopAlerta(errores);
        throw new Error(errores);        
    }

   // window.location.replace(`${materiaUrl}`);
}
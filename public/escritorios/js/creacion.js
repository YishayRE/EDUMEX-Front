const creacion = async(formData = {}, route = '', idT) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("Content-Type", "application/json");
    console.log(formData);
    let raw = JSON.stringify(formData);
    console.log('Estoy en creacion');
    console.log(raw);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(baseApi + route, requestOptions);
      
    const respuesta = await resp.json();
    let errores = '';
    
    if(respuesta.errors){
        respuesta.errors.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        hiddenLoad();
        dibujarPopAlerta(errores);
        throw new Error(errores);        
    }
    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }

    localStorage.setItem(route, respuesta);
    location.reload();
}

/*
    const resp = await fetch(baseApi + route, {
        method: 'POST',
        body: {"nombre":"Miguel","saludo":"rextvb","usuario":"61df3a762ad26ca9d64b23d4"},
        headers: { 'x-token': token, user: uid }
    });
    const respuesta = await resp.json();
    console.log(respuesta);
    let errores = '';
    
    if(respuesta.errors){
        respuesta.errors.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        console.error(errores);        
        dibujarPopAlerta(errores);
        return;
    }

    return respuesta;
}
*/
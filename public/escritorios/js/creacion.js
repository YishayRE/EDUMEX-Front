const creacion = async(formData = {}, route = '') => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify(formData);

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

    localStorage.setItem(route, respuesta);
    window.location = `../${route}`;
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
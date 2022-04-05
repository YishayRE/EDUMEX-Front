const actTarjeta = async(formData = {}, route = '', idT, esJuego = '') => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify(formData);

    console.log(raw);
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(baseApi + route + 'id/', requestOptions);
      
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
    if(esJuego){
        window.open(`${juegosUrl}juegos/${esJuego}/prueba/`);
    }else{
        location.reload();    
    }
}
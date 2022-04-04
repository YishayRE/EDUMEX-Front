const activarGrupo = async(datoGrupo = {}, grupoId = '') => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", grupoId);
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify(datoGrupo);

    console.log(raw);
    
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const resp = await fetch(baseApi + 'grupo/activar/id', requestOptions);
      
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

    //location.reload(); 
    return respuesta;   
}
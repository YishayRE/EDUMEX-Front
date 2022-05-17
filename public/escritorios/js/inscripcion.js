const inscripcion = async(formData = {}, route = '') => {
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

    console.log(respuesta);
    
    if(respuesta.msg){
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);        
    }

    localStorage.setItem(route, respuesta);
    //window.location = `../${route}`;
    location.reload();
}
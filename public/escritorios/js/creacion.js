const creacion = async(formData = {}, route = '') => {
    const token = localStorage.getItem('token') || '';
    console.log(JSON.stringify(formData));
    const resp = await fetch(baseApi + route, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'x-token': token, user: uid }
    });
    const respuesta = await resp.json();
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
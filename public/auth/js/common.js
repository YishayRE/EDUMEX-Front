const iniciar = async(formData) => {
    const resp = await fetch(baseApi + 'auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    });
    const {msg, token} = await resp.json();

    if(msg){
        console.error(msg);            
        dibujarPopAlerta(msg);
        return; 
    }

    if(token){
        localStorage.setItem('token', token);
        window.location = `${baseUrl}/escritorios/inicial`;
    }
    return;
}

const registrar = async(formData) => {
    const resp = await fetch(baseApi + 'usuario', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    });
    const respuesta = await resp.json();

    console.log(respuesta);
    let errores = '';
    let errors = [];

    
    if(respuesta.msg){
        dibujarPopAlerta(respuesta.msg);
        throw new Error (respuesta.msg);
    }

    if(respuesta){
        await iniciar(formData);
    }

    return;
}
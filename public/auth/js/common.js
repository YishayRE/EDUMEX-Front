const iniciar = async(formData) => {
    const resp = await fetch(baseApi + 'auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    });
    const {msg, token} = await resp.json();

    if(msg){
        console.error(msg);
        return;
    }

    if(token){
        localStorage.setItem('token', token);
        window.location = `${baseUrl}/escritorios/inicial`;
    }

    console.error('No se pudo iniciar sesión, reintente por favor');
    return;
}

const registrar = async(formData) => {
    const resp = await fetch(baseApi + 'usuarios', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    });
    const {errors, usuario} = await resp.json();
    let errores = '';
    
    if(errors){
        errors.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        console.error(errores);
        return;
    }

    if(usuario){
        await iniciar(formData);
    }

    console.error('No se pudo crear el usuario, reintenta por favor');
    return;
}

/*
fetch(baseApi + 'usuarios', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
        .then (({errors, usuario}) => {
            if(errors){
                errors.forEach(err => {
                    console.error(err.msg);
                });
                hiddenLoad();
                throw new Error('');
            }
            if(usuario){
                fetch(baseApi + 'auth/login', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {'Content-Type': 'application/json'}
                })
                .then(resp => resp.json())
                .then (({msg, token}) => {
                    if(msg){
                        hiddenLoad();
                        throw new Error(msg); 
                    }
                    localStorage.setItem('token',token);
                    window.location = '../../escritorios/escritorio_inicial';
                })
                .catch(err => {
                    hiddenLoad();
                    throw new Error(err);
                })
            }
        })
    .catch(err => {
        hiddenLoad();
        throw new Error(err);
    })
*/
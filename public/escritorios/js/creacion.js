const creacion = async(formData = {}, route = '', idT) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(formData);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const resp = await fetch(baseApi + route, requestOptions);

    const respuesta = await resp.json();
    let errores = '';

    if (respuesta.errors) {
        respuesta.errors.forEach((err, index) => {
            errores += `${index}. ${err.msg}\n`;
        });
        hiddenLoad();
        dibujarPopAlerta(errores);
        throw new Error(errores);
    }
    if (respuesta.msg) {
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }

    localStorage.setItem(route, respuesta);
    location.reload();
}
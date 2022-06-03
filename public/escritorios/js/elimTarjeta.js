const elimTarjeta = async(route = '', idT) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("Content-Type", "application/json");
    let raw = '';

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const resp = await fetch(baseApi + route, requestOptions);

    const respuesta = await resp.json();
    let errores = '';

    if (respuesta.msg) {
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }
    if (route == "inscrito/id/") {
        return respuesta;
    } else {
        location.reload();
    }

}
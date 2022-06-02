const descargarArchivo = async(idT, route) => {
    const token = localStorage.getItem('token') || '';
    let myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("user", uid);
    myHeaders.append("id", idT);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const resp = await fetch(baseApi + route + "calificaciones/", requestOptions);

    /*try {
        const respuesta = await resp.json();

        let errores = '';
        
        
    } catch (error) {*/
    const respuesta = await resp.status;
    console.log(respuesta);
    if (respuesta === 200) {
        const file = await resp.blob();
        const url = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = "Calificaciones.xlsx"
        document.body.appendChild(a);
        a.click();
        a.remove();
        return "Tu documento está listo";
    } else if (respuesta === 406) {
        dibujarPopAlerta("Fallo al crear el archivo")
        return "Fallo al crear el archivo";
    }
    if (respuesta.msg) {
        hiddenLoad();
        dibujarPopAlerta(respuesta.msg);
        throw new Error(respuesta.msg);
    }
}
const subirImagen = async(urlImagen, fileInput) => {
    showLoad();
    console.log(urlImagen);
    console.log(fileInput);

    let myHeaders = new Headers();
    myHeaders.append("x-token", localStorage.getItem("token"));
    myHeaders.append("user", uid);

    if(urlImagen && urlImagen.includes("cloudinary")){
        console.log("Si contiene");
        myHeaders.append("imagen", urlImagen);
    }else{
        console.log("no contiene");
    }
    let formdata = new FormData();
    formdata.append("imagen", fileInput);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

    const resp = await fetch(baseApi + "upload/", requestOptions);

    const respuesta = await resp.json();

    if(respuesta.msg)
      throw new Error (respuesta.msg);
    
    console.log(respuesta);
    hiddenLoad();
    return respuesta;
}
const generarHtml = () => {
    const ejeX = document.querySelector("#ejeX");
    const ejeY = document.querySelector("#ejeY");
    const cargaImage = document.querySelector("#cargaImagen");
    const urlImagen = cargaImage.src;

    if (!urlImagen || !urlImagen.includes("cloudinary")) {
        dibujarPopAlerta("No contiene imagen");
        throw new Error("No contiene imagen");
    }

    const alto = cargaImage.naturalHeight;
    const ancho = cargaImage.naturalWidth;
    const piezasX = parseInt(ejeX.value);
    const piezasY = parseInt(ejeY.value);
    const avanceX = Math.floor(ancho / piezasX);
    const avanceY = Math.floor(alto / piezasY);
    const urlDiv = urlImagen.split("/");
    const imagesDiv = [];

    let altoPieza = avanceY;
    let anchoPieza = avanceX;
    const altMax = Math.floor(600 / piezasY);
    const anchMax = Math.floor(1000 / piezasX);

    while (altoPieza > altMax || anchoPieza > anchMax) {
        altoPieza = Math.floor(altoPieza / 2);
        anchoPieza = Math.floor(anchoPieza / 2);
    }

    while (altoPieza < (altMax / 2) && anchoPieza < (anchMax / 2)) {
        altoPieza = altoPieza * 2;
        anchoPieza = anchoPieza * 2;
    }

    console.log(altMax, anchMax);
    console.log(altoPieza, anchoPieza);

    const altoImg = altoPieza * piezasY;
    const anchoImg = anchoPieza * piezasX;

    let html3 = `
    <svg width="${(anchoPieza + anchoImg)}" height="${(altoImg + 50)}" id="entorno">
    <g id="fondo"><image xlink:href="${urlImagen}" width="${anchoImg}" height="${altoImg}" x="${anchoPieza}" y="50"></g>`;
    //../../../../../images/fondoRompe.jpg
    for (let i = 0; i < piezasY; i++)
        for (let j = 0; j < piezasX; j++) {
            let urlPieza = "";
            urlDiv.forEach(url => {
                if (url == "upload")
                    urlPieza += `${url}/x_${(j * avanceX)},y_${(i * avanceY)},w_${avanceX},h_${avanceY},c_crop/`;
                else
                    urlPieza += `${url}/`;
            });
            imagesDiv.push(urlPieza.substring(0, urlPieza.length - 1));
        }

    let respuesta = "";
    let atributos = [];

    imagesDiv.forEach(url => {
        let uId = uuid.v4();
        respuesta += uId;
        atributos.push(`<g class="padre" id="${uId}"><image xlink:href="${url}" class="movil" style="width:${anchoPieza}px; height:${altoPieza}px;"></g>`);
    });

    while (atributos.length !== 1) {
        let posicion = Math.floor((Math.random() * (atributos.length)));

        html3 += atributos[posicion];

        atributos.splice(posicion, 1);
    }

    html3 += atributos[0];

    html3 += `
    </svg>
    <audio id="win" src="https://raw.githubusercontent.com/NestorPlasencia/PikaPuzzle/master/media/win.mp3"></audio>`;

    return [html3, [respuesta]];
    console.log(respuesta);
    console.log(html3);
}
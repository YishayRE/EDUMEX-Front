const formJ = document.querySelector('#formJ');


const html2 = `</div>
</body>
</html>`;

/*let html3 = `<header class="stick" id="navBar">
</header>
<div id="contenidoJuego">`;*/



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
    const numPiezas = piezasX * piezasY;
    const avanceX = Math.floor(ancho / piezasX);
    const avanceY = Math.floor(alto / piezasY);
    const urlDiv = urlImagen.split("/");
    const imagesDiv = [];
    let html3 = `
    <svg width="${(ancho + avanceX)}" height="${(alto + avanceY)}" id="entorno">
    <g id="fondo"><image xlink:href="${urlImagen}" width="${ancho}" height="${alto}" x="${avanceX}" y="${avanceY}"></g>`;
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

    imagesDiv.forEach((url, index) => {
        html3 += `
            <g class="padre" id="${index}"><image xlink:href="${url}" class="movil" style="width:${avanceX}; height:${avanceY};"></g>
        `;
    });

    html3 += `
    </svg>
    <audio id="win" src="https://raw.githubusercontent.com/NestorPlasencia/PikaPuzzle/master/media/win.mp3"></audio>`;

    console.log(html3);

    // window.open(``);

    /*arrayJ.forEach((opcionJ, index) => {
        html3 += `<div id="$elemento${index}" class="reactivoAbecedario">`;
        if(opcionJ[0])
            html3 += `
            <img src="${opcionJ[0]}" alt="imagenJ" class="logo">
            `;
        html3 += `
            <h3>Escribe la ${opcionJ[1]}</h3>
        `;
        html3 += `
            <input type="text" name="resp${index}" id="${opcionJ[2]}">
        </div>
        `;
    });*/

    /*console.log(size);
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < 3; y++) {
            console.log(arrayJ[x][y]);
        }
    }*/
    let body = html3;
    html3 = '';
    return `${body}
    </div>`;
}
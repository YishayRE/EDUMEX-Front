const formJ = document.querySelector('#formJ');


const html2 = `</div>
</body>
</html>`;

const generarHtml = () => {
    let html3 = "";
    const imagenes = formJ.querySelectorAll("img");
    const formulario = dataForm(formJ);
    if (Object.keys(formulario).length < 10) {
        dibujarPopAlerta("Debe agregar minimo dos reactivos");
        throw new Error("Debe agregar minimo dos reactivos");
    }
    const valoresBien = validarVaciosMemoria(formulario);
    console.log(valoresBien);
    if (valoresBien.length === 0) {
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos");
    } else {
        const htmlAux = [];
        const respuesta = [];
        for (let i = 0; i < valoresBien.length / 3; i++) {
            const triple = i * 3;
            const uIdUno = uuid.v4();
            const uIdDos = uuid.v4();
            let cod = "";
            respuesta.push([uIdUno, uIdDos]);
            console.log(valoresBien[triple]);
            switch (valoresBien[triple]) {
                case "PP":
                    cod = `<div class="elementosMemorama" id="${uIdUno}">
                        <div class="txtMemorama">
                            <div class="fondoMemo"  >
                                <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                            </div>
                            <div class="caraMemo"  >
                                <label class="textoMemorama">${valoresBien[triple + 1]}</label>
                            </div>
                        </div>
                    </div>`;
                    htmlAux.push(cod);
                    cod = `<div class="elementosMemorama" id="${uIdDos}">
                        <div class="txtMemorama">
                            <div class="fondoMemo" >
                                <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                            </div>
                            <div class="caraMemo"  >
                                <label class="textoMemorama">${valoresBien[triple + 2]}</label>
                            </div>
                        </div>
                    </div>
                    `;
                    htmlAux.push(cod);
                    console.log(htmlAux.length);
                    break;
                case "PI":
                    cod = `<div class="elementosMemorama" id="${uIdUno}">
                        <div class="txtMemorama">
                            <div class="fondoMemo"  >
                                <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                            </div>
                            <div class="caraMemo">
                                <label class="textoMemorama">${valoresBien[triple + 1]}</label>
                            </div>
                        </div>
                    </div>`;
                    htmlAux.push(cod);
                    cod = `<div class="elementosMemorama" id="${uIdDos}">
                        <div class="imgMemorama">
                            <div class="fondoMemo" >
                                <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                            </div>
                            <div class="caraMemo"  >
                                <img src="${valoresBien[triple + 2]}" alt="imagenJ" class="imagenParMemorama">
                            </div>
                        </div>
                    </div>
                    `;
                    htmlAux.push(cod);
                    break;
                case "II":
                    cod = `<div class="elementosMemorama" id="${uIdUno}">
                    <div class="imgMemorama">
                        <div class="fondoMemo">
                            <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                        </div>
                        <div class="caraMemo"  >
                            <img src="${valoresBien[triple + 1]}" alt="imagenJ" class="imagenParMemorama">
                        </div>
                    </div>
                    </div>
                    `;
                    htmlAux.push(cod);
                    cod = `<div class="elementosMemorama" id="${uIdDos}">
                    <div class="imgMemorama">
                        <div class="fondoMemo" >
                            <img src="${baseUrl}images/logoPNG.png" alt="imagenJ" class="imagenParMemorama">
                        </div>
                        <div class="caraMemo"  >
                            <img src="${valoresBien[triple + 2]}" alt="imagenJ" class="imagenParMemorama">
                        </div>
                    </div>
                    </div>
                    `;
                    htmlAux.push(cod);
                    break;
            }

        }
        while (htmlAux.length !== 1) {
            let posicion = Math.floor((Math.random() * (htmlAux.length)));

            html3 += htmlAux[posicion];

            htmlAux.splice(posicion, 1);
        }

        html3 += htmlAux[0];

        console.log(html3);
        console.log(respuesta);

        let body = html3;
        html3 = '';
        const respuestaString = respuesta.join("/?");
        console.log(respuestaString);
        return [`<form id="contenidoJuego">${body}</form>`, [respuestaString]];
    }
    return false;
}
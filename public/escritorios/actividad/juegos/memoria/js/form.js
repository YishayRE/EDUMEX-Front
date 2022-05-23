const formJ = document.querySelector('#formJ');


const html2 = `</div>
</body>
</html>`;

let html3 = `<header class="stick" id="navBar">
</header>
<div id="contenidoJuego">`;

const generarHtml = () => {
    const imagenes = formJ.querySelectorAll("img");
    console.log(imagenes);
    const formulario = dataForm(formJ);
    console.log(formulario);
    const valoresBien = validarVaciosMemoria(formulario);
    console.log(valoresBien);

    if (!valoresBien.estaCompleto) {
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos")
    } else {
        let auxImagenes = 0;
        let respuestas = [];

        const size = Object.keys(formulario).length / 4;
        let arrayJ = [
            []
        ];
        let j = 0;
        let i = 0;

        for (const el in formulario) {
            if (i === 4) {
                i = 0;
                j++;
                arrayJ[j] = [];
            }
            if (Object.hasOwnProperty.call(formulario, el)) {
                const element = formulario[el];
                arrayJ[j][i] = element;
                i++;
            }
        }

        console.log(arrayJ);
        arrayJ.forEach((opcionJ, index) => {
            html3 += `<div id="elemento${index}" class="reactivoTamano">`;
            if (opcionJ[1] == "Palabra") {
                html3 += `
                <div class="elementosMemorama">
                    <div class="imgMemorama">
                        <div class="fondoMemo">
                            <img src="${imagenes[index + auxImagenes].currentSrc}" alt="imagenJ" class="imagenParMemorama">
                        </div>
                    </div>
                `;
                auxImagenes++;
                //if(imagenes[index + auxImagenes].currentSrc.includes("upload.png"))
                html3 += `
                    <div class="txtMemorama">
                        <div class="fondoMemo">
                            <label class="textoMemorama">${opcionJ[2]}</label>
                        </div>
                    </div>
                </div>
                `;
                // respuestas.push(opcionJ[2]);
            } else if (opcionJ[1] == "Imagen") {
                html3 += `
                <div class="elementosMemorama">
                    <div class="imgMemorama">
                        <div class="fondoMemo">
                            <img src="${imagenes[index + auxImagenes].currentSrc}" alt="imagenJ" class="imagenParMemorama">
                        </div>
                    </div>
                `;
                auxImagenes++;
                html3 += `
                    <div class="imgMemorama">
                        <div class="fondoMemo">
                            <img src="${imagenes[index + auxImagenes].currentSrc}" alt="imagenJ" class="imagenParMemorama">
                        </div>
                    </div>
                </div>
                `;
            }
            html3 += `
            </div>
            `;
            respuestas.push(opcionJ[2]);
        });

        let body = html3;
        html3 = '';
        return [`<form id="contenidoJuego">${body}</form>`, respuestas];
    }
    return false;
}
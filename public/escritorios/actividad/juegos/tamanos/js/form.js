const formJ = document.querySelector('#formJ');

const html2 = `<form id="contenidoJuego">`;

let html3 = ``;

const generarHtml = () => {
    const imagenes = formJ.querySelectorAll("img");
    console.log(imagenes);
    const formulario = dataForm(formJ);
    console.log(formulario);
    const valoresBien = validarVacios(formulario);
    console.log(valoresBien);

    if (!valoresBien.estaCompleto) {
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos")
    } else {
        let respuestas = [];
        let flag = true;
        let auxImagenes = 0;

        /*elementosForm = Object.entries(formulario);
        elementosForm.forEach((elemento, index) => {
            if(elemento[1] == "Tamaño"){
                
            }else if(elemento[1] == "Forma"){

            }
        });*/
        const size = Object.keys(formulario).length / 3;
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
            html3 += `
                <div>
                    <h3 class="tituloPregunta">${opcionJ[1]}</h3>
                </div>
            `;
            if (opcionJ[1] == "Tamaño") {
                html3 += `
                <div class="elementosTamanos">
                <div class="imgTam">
                    <img src="${imagenes[index + auxImagenes].currentSrc}" alt="imagenJ" class="imagenReactivoTamano">
                    <img src="${imagenes[index + auxImagenes + 1].currentSrc}" alt="imagenJ" class="imagenReactivoTamano">
                </div>
                `;
                html3 += `
                <div class="imgTam">
                    <h3 class="textoTamano">Lo que se ve en la imagen de la izquierda es:</h3>
                </div>
                `;
                html3 += `
                <div class="divSelect">
                    <select class="selectTamano" name="opcion${index}" id="opcion${index}">
                        <option value="Mayor que" selected>Mayor que</option>
                        <option value="Menor que">Menor que</option>
                        <option value="Igual">Igual</option>
                    </select>
                </div>
                `;
                auxImagenes++;
                html3 += `
                <div class="imgTam">
                    <h3 class="textoTamano">Respecto a la imagen de la derecha</h3>
                </div>
                </div>
                `;
                console.log(`index final: ${auxImagenes}`)
            } else if (opcionJ[1] == "Forma") {
                html3 += `
                <div class="textoForma">
                    <h3 class="textoAdivinanza">La forma de la imagen      ¿Qué figura geométrica representa?</h3>
                </div>
                `;
                html3 += `
                <div class="elementosFormas">
                    <div>
                        <img src="${imagenes[index + auxImagenes].currentSrc}" alt="imagenJ" class="imagenReactivoForma">
                    </div>
                `;
                auxImagenes++;
                html3 += `
                </div>
                <div class="divRespuesta">
                    <select class="selectTamano" name="opcion${index}" id="opcion${index}">
                        <option value="Cuadrado">Cuadrado</option>
                        <option value="Circulo">Circulo</option>
                        <option value="Triángulo">Triángulo</option>
                        <option value="Rectángulo">Rectángulo</option>
                        <option value="Trapecio">Trapecio</option>
                        <option value="Paralelogramo">Paralelogramo</option>
                        <option value="Pentágono">Pentágono</option>
                        <option value="Hexágono">Hexágono</option>
                        <option value="Rombo">Rombo</option>
                        <option value="Cubo">Cubo</option>
                        <option value="Pirámide">Pirámide</option>
                        <option value="Cono">Cono</option>
                        <option value="Cilindro">Cilindro</option>
                        <option value="Esfera">Esfera</option>
                    </select>
                </div>
                `;
            }
            html3 += `
            </div>
            `;
            respuestas.push(opcionJ[2]);
        });

        console.log(respuestas);
        let body = html3;
        html3 = '';
        return [`<form id="contenidoJuego">${body}</form>`, respuestas];
    }
    return false;
}
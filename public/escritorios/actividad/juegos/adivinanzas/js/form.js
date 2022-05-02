const formJ = document.querySelector('#formJ');

const html2 = `<form id="contenidoJuego">`;

let html3 = ``;

const generarHtml = () => {
    const imagenes = formJ.querySelectorAll("img");
    const formulario = dataForm(formJ);
    console.log(formulario);
    const valoresBien = validarVacios(formulario);

    if(!valoresBien.estaCompleto){
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos")
    }else{
        const size = Object.keys(formulario).length / 3;
        let arrayJ = [[]];
        let respuestas = [];
        let j = 0;
        let i = 0;

        for (const el in formulario) {
            if(i === 3){
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

        arrayJ.forEach((opcionJ, index) => {
            html3 += `<div id="elemento${index}" class="reactivoAdivinanza">`;
            html3 += `
                <h3 class="textoAdivinanza">Adivinanza ${index+1}: ${opcionJ[1]}</h3>
            `;
            html3 += `
            <div>
                <img src="${imagenes[index].currentSrc}" alt="imagenJ" class="imagenReactivo">
            </div>
            `;
            html3 += `
                <div>
                    <input class="campoRespuesta" type="text" name="resp${index}">
                </div>
            </div>
            `;
            respuestas.push(opcionJ[2]);
        });
    
        let body = html3;
        html3 = '';
        return [`<form id="contenidoJuego">${body}</form>`,respuestas];
        }
    return false; 
}
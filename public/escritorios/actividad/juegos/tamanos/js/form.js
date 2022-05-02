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

    if(!valoresBien.estaCompleto){
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos")
    }else{
        const size = Object.keys(formulario).length / 3;
        let arrayJ = [[]];
        let respuestas = [];
        let j = 0;
        let i = 0;

        for (const el in formulario) {
            if(i === 4){
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
                <h3 class="textoAdivinanza">¿Cuál es su ${opcionJ[1]}?</h3>
            `;
            if(index === 0){
                html3 += `
                <div>
                    <img src="${imagenes[index].currentSrc}" alt="imagenJ" class="imagenReactivo">
                    <img src="${imagenes[index + 1].currentSrc}" alt="imagenJ" class="imagenReactivo">
                </div>
                `;
                
            }else{
                console.log(index);
                html3 += `
                <div>
                    <img src="${imagenes[index + 1].currentSrc}" alt="imagenJ" class="imagenReactivo">
                    <img src="${imagenes[index + 2].currentSrc}" alt="imagenJ" class="imagenReactivo">
                </div>
                `;
            }
            html3 += `
                <div>
                    <input class="campoRespuesta" type="text" name="resp${index}">
                </div>
            </div>
            `;
            respuestas.push(opcionJ[2]);
        });
        
        console.log(respuestas);
        let body = html3;
        html3 = '';
        return [`<form id="contenidoJuego">${body}</form>`,respuestas];
        }
    return false; 
}
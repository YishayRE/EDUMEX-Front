const formJ = document.querySelector('#formJ');

const html2 = `<form id="contenidoJuego">`;

let html3 = ``;

const generarHtml = () => {
    const formulario = dataForm(formJ);
    const valoresBien = validarVacios(formulario);

    if(!valoresBien.estaCompleto){
        dibujarPopAlerta("Falta ingresar valores en los campos de los reactivos")
    }else{
        let flag = false;

        let elementosForm = Object.entries(formulario);
        console.log(elementosForm);

        elementosForm.forEach((elemento, index) => {
            if(elemento[1] == "Sucesion"){
                let arrayCadena = elementosForm[index + 1][1].split(",");
                let arrayRespuesta = elementosForm[index + 2][1].split(",");
                let comasEncontradas = (elementosForm[index + 1][1].match(/\,/g) || []).length;
                let comasRespuesta = (elementosForm[index + 2][1].match(/\,/g) || []).length;

                if(comasEncontradas === 0){
                    dibujarPopAlerta("La sucesión debe estar separada por comas");
                    throw new Error("La sucesión debe estar separada por comas");
                }
                if(comasEncontradas < 4){
                    dibujarPopAlerta("La sucesión debe de ser de 5 elementos");
                    throw new Error("La sucesión debe de ser de 5 elementos");
                }
                arrayCadena.forEach((elemento, index) => {
                    if(elemento == ""){
                        dibujarPopAlerta(`El elemento ${index + 1} no fue escrito en la sucesión`);
                        throw new Error(`El elemento ${index + 1} no fue escrito en la sucesión`);
                    }
                });

                if(comasRespuesta < 3){
                    dibujarPopAlerta("La respuesta debe de ser de 4 elementos");
                    throw new Error("La respuesta debe de ser de 4 elementos");
                }
                arrayRespuesta.forEach((elemento, index) => {
                    if(elemento == ""){
                        dibujarPopAlerta(`El elemento ${index + 1}  de la respuesta no fue escrito en la sucesión`);
                        throw new Error(`El elemento ${index + 1} de la respuesta no fue escrito en la sucesión`);
                    }
                });
            }
        });
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
            html3 += `<div id="elemento${index}" class="reactivoNumeros">`;
            html3 += `
                <h3>La ${opcionJ[0]} es ${opcionJ[1]}</h3>
            `;
            if(opcionJ[0] == "Operacion"){
                html3 += `
                <h3>¿Cuál es su resultado?</h3>
                `;
            }else{
                html3 += `
                <h3>¿Qué numeros siguen?</h3>
                `;
            }
            html3 += `
                <input type="text" class="campoRespuesta" name="resp${index}">
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
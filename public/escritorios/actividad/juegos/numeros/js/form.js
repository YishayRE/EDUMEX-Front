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
        console.log("Ya esta lleno todo");
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
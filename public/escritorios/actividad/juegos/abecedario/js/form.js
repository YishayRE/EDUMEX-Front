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
        let respuestas = [];
        let flag = true;

        let elementosForm = Object.entries(formulario);

        elementosForm.forEach((elemento, index) => {
            if(elemento[1] == "Palabra"){
                let arrayCadena = elementosForm[index + 1][1].split(" ");
                console.log(arrayCadena.length);
                if(arrayCadena.length > 1){
                    dibujarPopAlerta('Los reactivos "Palabra" solo admiten una palabra');
                    flag = false;
                }else if(arrayCadena.length === 1){
                    respuestas.push(arrayCadena[0]);
                    flag = true;
                }
            }
        });

        if(flag == true){
            const size = Object.keys(formulario).length / 3;
            let arrayJ = [[]];
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
                html3 += `<div id="elemento${index}" class="reactivoAbecedario">`;
                
                if(opcionJ[1] == "Oración"){
                    html3 += `
                    <h3 class="textoTitulo" >Ordena la siguiente oración</h3>
                    `;
                    let arrayRespuesta = opcionJ[2].split(" ");
                    respuestaRevuelta = arrayRespuesta.sort(()=> Math.random() - 0.5);
                    textoReactivo = respuestaRevuelta.join(' ');
                    console.log(textoReactivo);
                    html3 += `
                    <h3 class="textoOracion">${textoReactivo}</h3>
                    `;
                    respuestas.push(opcionJ[2]);
                }else{
                    html3 += `
                    <h3 class="textoTitulo">Escribe la palabra que se ve en la imágen</h3>
                    `;
                }
                html3 += `
                <div>
                    <img src="${imagenes[index].currentSrc}" alt="imagenJ" class="imagenReactivo">
                </div>
                    `;
                html3 += `
                    <input type="text" class="campoRespuesta" name="resp${index}">
                </div>
                `;
            });

            let body = html3;
            html3 = '';
            return [`<form id="contenidoJuego">${body}</form>`,respuestas];
        }
    } 
    return false; 
}
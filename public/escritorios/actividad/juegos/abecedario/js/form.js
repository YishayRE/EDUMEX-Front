const formJ = document.querySelector('#formJ');


const html2 = `</div>
</body>
</html>`;

let html3 = `
<form id="contenidoJuego">
`;

const generarHtml = () => {
    const formulario = dataForm(formJ);
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
        html3 += `<div id="elemento${index}" class="reactivoAbecedario">`;
        if(opcionJ[0])
            html3 += `
            <img src="${opcionJ[0]}" alt="imagenJ" class="logo">
            `;
        html3 += `
            <h3>Escribe la ${opcionJ[1]}</h3>
        `;
        html3 += `
            <input type="text" name="resp${index}">
        </div>
        `;
        respuestas.push(opcionJ[2]);
    });

    /*console.log(size);
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < 3; y++) {
            console.log(arrayJ[x][y]);
        }
    }*/
    let body = html3;
    html3 = '';
    return [`${body}</form>`,respuestas];
}
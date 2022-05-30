let tarjetaVolteada = 0;
const tarjetasDisponibles = [];
const tarjetasSeleccionadas = [];
const tarjetasElegidas = [];

const botonesPar = () => {
    const parTarjeta = document.querySelector("#botonesMemo");
    const aceptarPar = document.querySelector("#aceptar");
    const cancelarPar = document.querySelector("#cancelar");
    const tarjetasMemo = document.querySelectorAll(".elementosMemorama");

    tarjetasMemo.forEach(tarjeta => {
        tarjetasDisponibles.push(tarjeta);
    });

    aceptarPar.addEventListener("click", () => {
        let aux = 1;
        tarjetasSeleccionadas.forEach(tarjeta => {
            let bandera = 0;
            let i = 0;

            while (bandera === 0) {
                if (tarjeta.id == tarjetasDisponibles[i].id) {
                    bandera = 1;
                    tarjetasDisponibles.splice(i, 1);
                }

                i++;

                if (tarjetasDisponibles.length === i && bandera === 0)
                    bandera = 2;
            }

            if (bandera === 2) {
                aux = 0;
                cancelarPar.click();
            }
        });
        if (aux === 1) {
            let red = (Math.random() * 255);
            let green = (Math.random() * 255);
            let blue = (Math.random() * 255);

            tarjetasSeleccionadas[0].children.item(0).children.item(1).style.borderColor = `rgb(${red}, ${green}, ${blue})`;
            tarjetasSeleccionadas[1].children.item(0).children.item(1).style.borderColor = `rgb(${red}, ${green}, ${blue})`;

            tarjetasElegidas.push([tarjetasSeleccionadas[0].id, tarjetasSeleccionadas[1].id]);

            tarjetasSeleccionadas.pop();
            tarjetasSeleccionadas.pop();

            tarjetaVolteada = 0;

            parTarjeta.style.display = "none";

            if (tarjetasDisponibles.length === 0) {
                const btnNav = document.querySelector("#lista");
                btnNav.children[0].children[0].click();
            }
        }
    });

    cancelarPar.addEventListener("click", () => {
        tarjetasSeleccionadas.forEach(tarjeta => {
            tarjeta.children.item(0).children.item(0).style.display = "flex";
            tarjeta.children.item(0).children.item(1).style.display = "none";
        });
        tarjetasSeleccionadas.pop();
        tarjetasSeleccionadas.pop();
        tarjetaVolteada = 0;
        parTarjeta.style.display = "none";
    });
}

const funcTarjetas = () => {
    const tarjetasMemo = document.querySelectorAll(".elementosMemorama");
    tarjetasMemo.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            if (tarjeta.children.item(0).children.item(1).style.display !== "flex") {
                if (tarjetaVolteada > 1) {
                    dibujarPopAlerta("No puedes voltear más de dos tarjetas");
                    throw new Error("No puedes voltear más de dos tarjetas");
                }
                tarjetasSeleccionadas.push(tarjeta);

                tarjeta.children.item(0).children.item(0).style.display = "none";
                tarjeta.children.item(0).children.item(1).style.display = "flex";

                tarjetaVolteada++;

                if (tarjetaVolteada === 2) {
                    const parTarjeta = document.querySelector("#botonesMemo");
                    parTarjeta.style.display = "flex";
                }
            }
        });
    });
}
const obtenerTiempo = dateTo => {
    let now = new Date(),
        time = (new Date(dateTo) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));

    return {
        seconds,
        minutes,
        hours,
        days,
        time
    }
};

const cuentaRegresiva = (dateTo) => {
    const item = document.getElementById("tiempo");

    const timerUpdate = setInterval(() => {
        let currenTime = obtenerTiempo(dateTo);
        item.innerHTML = `
                        <label class="number">
                            ${currenTime.minutes}
                        </label>
                        <label class="number">
                            ${currenTime.seconds}
                        </label>
                        `;

        if (currenTime.time <= 1) {
            clearInterval(timerUpdate);
            const btnTerminar = document.querySelector("#est0");
            btnTerminar.click();
        }
    }, 1000);
};

const prepararConteo = (minutosCuenta) => {
    let date = new Date();
    let nuevaFecha = new Date(date);
    nuevaFecha.setMinutes(date.getMinutes() + minutosCuenta);

    cuentaRegresiva(nuevaFecha);
};
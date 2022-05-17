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
 
const cuentaRegresiva = (dateTo, element) => {
    const item = document.getElementById(element);
 
    const timerUpdate = setInterval( () => {
        let currenTime = obtenerTiempo(dateTo);
        item.innerHTML = `
            <div class="row">
                <div class="col-lg-2">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.minutes}
                        </div>
                        <div class="concept">
                            Minutos
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="countdown-container">
                        <div class="number">
                            ${currenTime.seconds}
                        </div>
                        <div class="concept">
                            Segundos
                        </div>
                    </div>
                </div>
            </div>`;
 
        if (currenTime.time <= 1) {
            clearInterval(timerUpdate);
            alert('Fin de la cuenta '+ element);
        }
    }, 1000);
};
var date = new Date();
var new_date3 = new Date(date);
new_date3.setMinutes(date.getMinutes() + 1);

document.getElementById('new_date3').innerHTML = new_date3;

cuentaRegresiva(new_date3, 'countdown1');
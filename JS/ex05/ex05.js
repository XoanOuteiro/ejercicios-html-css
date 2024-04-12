let intervalId;
let isAlarmSounding = false;
const audio = new Audio('alarm.mp3');

function startAlarm() {
    const ammount = document.getElementById('ammount').value;
    const targetTime = new Date(Date.now() + ammount * 1000); // target datetime

    document.getElementById('aceptar').disabled = true;

    intervalId = setInterval(() => {
        const currentTime = new Date();
        if (currentTime >= targetTime) {
            soundAlarm();
        } else {
            updateDisplay(targetTime - currentTime);
        }
    }, 250);
}

function soundAlarm() {
    clearInterval(intervalId);
    isAlarmSounding = true;
    document.getElementById('posponer').disabled = false;
    document.getElementById('parar').disabled = false;
    document.getElementById('display').innerText = 'Alarma sonando';
    audio.play();
}

function snoozeAlarm() {
    if (isAlarmSounding) {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(intervalId);

        const snoozeTime = new Date(Date.now() + 15000); // 15 seconds
        intervalId = setInterval(() => {
            const currentTime = new Date();
            if (currentTime >= snoozeTime) {
                soundAlarm();
            } else {
                updateDisplay(snoozeTime - currentTime);
            }
        }, 1000);

        document.getElementById('posponer').disabled = true;
    }
}

function stopAlarm() {
    if (isAlarmSounding) {
        clearInterval(intervalId);
        isAlarmSounding = false;
        document.getElementById('aceptar').disabled = false;
        document.getElementById('posponer').disabled = true;
        document.getElementById('parar').disabled = true;
        document.getElementById('display').innerText = 'Alarma detenida';
        audio.pause();
        audio.currentTime = 0;
    }
}

function updateDisplay(remainingTime) {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    document.getElementById('display').innerText = `Tiempo restante: ${minutes} minutos ${seconds} segundos`;
}

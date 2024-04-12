let countdown;
let audio = new Audio('no_tengo_audio_aqui.mp3'); 
let seconds = 0

function startAlarm() {
    seconds = document.getElementById("ammount").value;
    let display = document.getElementById("display");
    let aceptarBtn = document.getElementById("aceptar");
    let posponerBtn = document.getElementById("posponer");
    let pararBtn = document.getElementById("parar");

    display.textContent = `Alarma en ${seconds} segundos`;

    countdown = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            display.textContent = "La alarma está sonando";
            audio.loop = true;
            audio.play();
            clearInterval(countdown);
            aceptarBtn.disabled = false;
            posponerBtn.disabled = true;
            pararBtn.disabled = true;
        } else {
            display.textContent = `Alarma en ${seconds} segundos`;
        }
    }, 1000);

    aceptarBtn.disabled = true;
    posponerBtn.disabled = false;
    pararBtn.disabled = false;
}

function snoozeAlarm() {
    seconds += 10
}

function stopAlarm() {
    clearInterval(countdown);
    audio.pause();
    document.getElementById("display").textContent = "";
    document.getElementById("ammount").value = "";
    document.getElementById("aceptar").disabled = false;
    document.getElementById("posponer").disabled = true;
    document.getElementById("parar").disabled = true;
}
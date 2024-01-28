const credits = document.querySelector('#credits')
const closeCredits = document.querySelector('#btnCloseCredits')
closeCredits.addEventListener('click', () => {
    credits.style.display = 'none' })
    
    // let copyTextarea = document.querySelector('#btnCopy')
    // let clearTextarea = document.querySelector('#btnClear')
    // let copyAndClearTextarea = document.querySelector('#btnCopyClear')
    // let textarea = document.querySelector('#notes')
    // copyTextarea.onclick = function copyText () {
    //     notes.select().execCommand('copy');
    // }

const timerTypePomodoro = document.querySelector('#btnPomodoro');
const timerTypeShortBreak = document.querySelector('#btnShortBreak');
const timerTypeLongBreak = document.querySelector('#btnLongBreak');

// Função de mudar a classe do timer selecionado ( deixar o botão ativo)
let selectedTimer = 'pomodoro';

function changeSelectedTimer(timer) {
    if (timer === 'pomodoro') {
    timerTypePomodoro.classList.add('active');
    timerTypeShortBreak.classList.remove('active');
    timerTypeLongBreak.classList.remove('active');
} else if (timer === 'shortbreak') {
    timerTypePomodoro.classList.remove('active');
    timerTypeShortBreak.classList.add('active');
    timerTypeLongBreak.classList.remove('active');
} else if (timer === 'longbreak') {
    timerTypePomodoro.classList.remove('active');
    timerTypeShortBreak.classList.remove('active');
    timerTypeLongBreak.classList.add('active');
}
}

let timerValue = document.querySelector('#timerValue');

function secondsToMinutesSeconds(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const padMinutes = minutes.toString().padStart(2, "0");
    const padSeconds = seconds.toString().padStart(2, "0");
    return `${padMinutes}:${padSeconds}`;

}

function getTimerValue(timer) {
    return {
        pomodoro: 25 * 60,
        shortbreak: 5 * 60,
        longbreak: 15 * 60,

    }[timer];

}

function changeTimerValue(timer) {
    timerValue.textContent = secondsToMinutesSeconds(getTimerValue(timer));
}

function selectTimer(timer) {
    selectedTimer = timer;

    changeSelectedTimer(timer);
    changeTimerValue(timer);
}

function startTimer(timer) { 
    let seconds = getTimerValue(timer);

    const interval = setInterval(() => {
        seconds--;

        timerValue.textContent = secondsToMinutesSeconds(seconds);
        
        if (seconds === 0) {
            clearInterval(interval);
        }


    }, 1000);

}
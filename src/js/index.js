const timerTypePomodoro = document.querySelector('#btnPomodoro');
const timerTypeShortBreak = document.querySelector('#btnShortBreak');
const timerTypeLongBreak = document.querySelector('#btnLongBreak');
const btnPlay = document.querySelector('#btnPlay')
const btnPause = document.querySelector('#btnPause');
const btnRestart = document.querySelector('#btnRestart')
const initialTitle = document.title;

let interval;
let currentTimerValue = null;
let selectedTimer = 'pomodoro';
let timerRunning = false;

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
    if (timerRunning) {
        pauseTimer();
    }

    selectedTimer = timer;
    changeSelectedTimer(timer);
    changeTimerValue(timer);
    resetPageTitle();
}

function resetPageTitle() {
    document.title = initialTitle;
}

function startTimer(timer, initialTime) {
    if (!timerRunning) {
        timerRunning = true;

        let seconds = initialTime !== undefined ? initialTime : getTimerValue(timer);

        interval = setInterval(() => {
            seconds--;

            timerValue.textContent = secondsToMinutesSeconds(seconds);
            document.title = `${secondsToMinutesSeconds(seconds)} - Pomo&Chill`;

            if (seconds === 0) {
                clearInterval(interval);
                timerRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    timerRunning = false;
    if (currentTimerValue !== null) {
        currentTimerValue = secondsToMinutesSeconds(currentTimerValue)
            .split(':')
            .reduce((acc, val) => acc * 60 + parseInt(val), 0);
    }
}

function resumeTimer() {
    if (!timerRunning) {
        let initialTime = currentTimerValue !== null
            ? currentTimerValue
            : getTimerValue(selectedTimer);

        startTimer(selectedTimer, initialTime);
    }
}

function restartTimer() {
    pauseTimer();
    currentTimerValue = null;
    startTimer(selectedTimer);
}

timerTypePomodoro.addEventListener('click', () => selectTimer('pomodoro'));
timerTypeShortBreak.addEventListener('click', () => selectTimer('shortbreak'));
timerTypeLongBreak.addEventListener('click', () => selectTimer('longbreak'));
btnPlay.addEventListener('click', resumeTimer);
btnPause.addEventListener('click', pauseTimer);
btnRestart.addEventListener('click', restartTimer);
const roundProgressBar = document.querySelector('#roundProgressBar');
const roundProgressBarNumber = document.querySelector('#roundProgressBar .progressValue');
const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');

const audio = new Audio('alarm.mp3');

const pomodoroTimerInSeconds = 1500;
const shortBreakTimerInSeconds = 500;
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK ='SHORTBREAK';

let progressInterval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;

function formatNumberInStringMinute(number){
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    
    return `${minutes}:${seconds}`;
}

const startTimer = () => {
    progressInterval = setInterval(() => {
        timerValue--;
        setInfoRoundProgressBar();
    }, 1000);
}

const stopTimer = () => clearInterval(progressInterval);

const resetTimer = () =>{
    clearInterval(progressInterval);

    timerValue = (pomodoroType === TIMER_TYPE_POMODORO)
    ? pomodoroTimerInSeconds
    : shortBreakTimerInSeconds
    multiplierFactor = 360 /timerValue;
    
    setInfoRoundProgressBar();
}

function setInfoRoundProgressBar() {
    if(timerValue === 0){
        stopTimer();
        audio.play();
    }

    roundProgressBarNumber.textContent = `${formatNumberInStringMinute(timerValue) }`;
    // roundProgressBar.style.background = `conic-gradient(var(--color--whites) ${timerValue * multiplierFactor}deg, var(--color-transparent) 0deg)`;
}

const setPomodoroType = (type) =>{
    pomodoroType = type;

    if(type === TIMER_TYPE_POMODORO){
        buttonTypeShortBreak.classList.Remove("active");
        buttonTypePomodoro.classList.add("active");
    }else{
        buttonTypePomodoro.classList.remove("active");
        buttonTypeShortBreak.classList.add("active");
    }
}

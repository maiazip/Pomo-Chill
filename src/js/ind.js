// Close Credits Div
const closeCredits = document.querySelector("#btnCloseCredits");
const credits = document.querySelector("#credits");
closeCredits.addEventListener("click", () => {
    credits.style.display = "none" } );


    // Setting options time
    const pomodoroSeconds = 1500;
    const breakSeconds = 300;
    const longBreakSeconds = 900;

    
// define quais são os botões do timer, como constantes
const btnPomodoro = document.querySelector("#btnPomodoro");
const btnShortBreak = document.querySelector("#btnShortBreak");
const btnLongBreak = document.querySelector("#btnLongBreak");

// Botões selecionados
const btnSelectedPomodoro = "POMODORO";
const btnSelectedShortBreak = "SHORTBREAK";
const btnSelectedLongBreak = "LONGBREAK";

// transforma o valor numérico em texto
function numberToString(number){
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

let timerInterval;
let btnSelected = btnSelectedPomodoro;
let timerValue = pomodoroSeconds;
let multiplierFactor = 360 / timerValue;


const startTimer = () => {
    timerInterval = setInterval(() => {
        timerValue--;
    })
}



// função de iniciar o timer, com 3 opções usando o switch case 
function startTimer(timerType) {
clearInterval(timer);

switch (timerType) {
    case "pomodoro":
        minutes = 25;
        break;
        case "shortBreak":
            minutes = 5;
            break;
            case "longBreak":
                minutes = 15;
                default:
                    break;
}

seconds = 0;
updateTimerDisplay();
timer = setInterval(updateTimer, 1000);
}



    












    // const roundProgressBar = document.querySelector('#roundProgressBar');
    // const roundProgressBarNumber = document.querySelector('#roundProgressBar .progressValue');
    // const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
    // const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');
    
    // const audio = new Audio('alarm.mp3');
    
    // const pomodoroTimerInSeconds = 1500;
    // const shortBreakTimerInSeconds = 500;
    // const TIMER_TYPE_POMODORO = 'POMODORO';
    // const TIMER_TYPE_SHORT_BREAK ='SHORTBREAK';
    
    // let progressInterval;
    // let pomodoroType = TIMER_TYPE_POMODORO;
    // let timerValue = pomodoroTimerInSeconds;
    // let multiplierFactor = 360 / timerValue;
    
    
    
    // const startTimer = () => {
    //     progressInterval = setInterval(() => {
    //         timerValue--;
    //         setInfoRoundProgressBar();
    //     }, 1000);
    // }
    
    // const stopTimer = () => clearInterval(progressInterval);
    
    // const resetTimer = () =>{
    //     clearInterval(progressInterval);
    
    //     timerValue = (pomodoroType === TIMER_TYPE_POMODORO)
    //     ? pomodoroTimerInSeconds
    //     : shortBreakTimerInSeconds
    //     multiplierFactor = 360 /timerValue;
        
    //     setInfoRoundProgressBar();
    // }
    
    // function setInfoRoundProgressBar() {
    //     if(timerValue === 0){
    //         stopTimer();
    //         audio.play();
    //     }
    
    //     roundProgressBarNumber.textContent = `${formatNumberInStringMinute(timerValue) }`;
    //     // roundProgressBar.style.background = `conic-gradient(var(--color--whites) ${timerValue * multiplierFactor}deg, var(--color-transparent) 0deg)`;
    // }
    
    // const setPomodoroType = (type) =>{
    //     pomodoroType = type;
    
    //     if(type === TIMER_TYPE_POMODORO){
    //         buttonTypeShortBreak.classList.Remove("active");
    //         buttonTypePomodoro.classList.add("active");
    //     }else{
    //         buttonTypePomodoro.classList.remove("active");
    //         buttonTypeShortBreak.classList.add("active");
    //     }
    // }
    
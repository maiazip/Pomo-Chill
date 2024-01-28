document.addEventListener("DOMContentLoaded", function() {
    let timer;
    let minutes = 25;
    let seconds = 0;
    let isPaused = false;

    function setTimerType(timerType) {
        switch (timerType) {
            case 'pomodoro':
                minutes = 25;
                break;
            case 'shortBreak':
                minutes = 5;
                break;
            case 'longBreak':
                minutes = 15;
                break;
            default:
                break;
        }

        seconds = 0;
        isPaused = false;
        updateTimerDisplay();
    }

    function stopTimer() {
        clearInterval(timer);
        isPaused = true;
    }

    function resetTimer() {
        clearInterval(timer);
        minutes = 25;
        seconds = 0;
        isPaused = false;
        updateTimerDisplay();
    }

    function updateTimer() {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert(getTimerType() === 'pomodoro' ? "Pomodoro completed! Take a break." : "Break completed! Back to work.");
            resetTimer();
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }
    }

    function updateTimerDisplay() {
        const timerDisplay = document.querySelector('#timerValue');
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function getTimerType() {
        if (minutes === 25) {
            return 'pomodoro';
        } else if (minutes === 5) {
            return 'shortBreak';
        } else if (minutes === 15) {
            return 'longBreak';
        } else {
            return 'unknown';
        }
    }

    // Adicionando event listeners aos botões
    document.getElementById('#btnPomodoro').addEventListener('click', function() {
        setTimerType('pomodoro');
    });

    document.getElementById('#btnStop').addEventListener('click', function() {
        stopTimer();
    });

    document.getElementById('#btnReset').addEventListener('click', function() {
        resetTimer();
    });

    document.getElementById('#btnCloseCredits').addEventListener('click', function() {
        const credits = document.getElementById('credits');
        credits.style.display = 'none';
    });
});
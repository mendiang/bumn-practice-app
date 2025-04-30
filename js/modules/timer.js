// js/modules/timer.js

let questionTimerInterval = null;
let questionTimeLeft = 0;
let questionTickCallback = null;
let questionTimeUpCallback = null;

function startQuestionTimer(durationSeconds, tickCallback, timeUpCallback) {
    stopQuestionTimer(); // Hentikan timer sebelumnya jika ada

    questionTimeLeft = durationSeconds;
    questionTickCallback = tickCallback;
    questionTimeUpCallback = timeUpCallback;

    // Panggil tick pertama kali
    if (questionTickCallback) {
        questionTickCallback(questionTimeLeft);
    }

    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        if (questionTickCallback) {
            questionTickCallback(questionTimeLeft);
        }

        if (questionTimeLeft <= 0) {
            stopQuestionTimer(); // Hentikan interval
            if (questionTimeUpCallback) {
                questionTimeUpCallback(); // Panggil callback waktu habis
            }
        }
    }, 1000);
}

// Fungsi untuk menghentikan timer PER SOAL
function stopQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimerInterval = null;
}

// Fungsi format waktu (tetap sama)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
}

export { startQuestionTimer, stopQuestionTimer, formatTime };
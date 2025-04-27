// js/modules/timer.js

let timerInterval = null;
let timeLeft = 0;
let onTickCallback = null;
let onTimeUpCallback = null;

function startTimer(durationSeconds, tickCallback, timeUpCallback) {
    stopTimer(); // Pastikan timer sebelumnya berhenti
    timeLeft = durationSeconds;
    onTickCallback = tickCallback;
    onTimeUpCallback = timeUpCallback;

    // Panggil tick pertama kali untuk menampilkan waktu awal
    if (onTickCallback) {
        onTickCallback(timeLeft);
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        if (onTickCallback) {
            onTickCallback(timeLeft); // Update tampilan setiap detik
        }

        if (timeLeft <= 0) {
            stopTimer();
            if (onTimeUpCallback) {
                onTimeUpCallback(); // Panggil fungsi saat waktu habis
            }
        }
    }, 1000); // Interval 1 detik
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function getTimeLeft() {
    return timeLeft;
}

// Format waktu MM:SS (helper function internal atau bisa di utils.js)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
}


export { startTimer, stopTimer, getTimeLeft, formatTime };
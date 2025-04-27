// js/main.js
import { getQuizQuestions } from './modules/data.js';
import { startTimer, stopTimer, formatTime } from './modules/timer.js';
import * as ui from './modules/ui.js'; // Impor semua dari ui.js
import * as quiz from './modules/quiz.js'; // Impor semua dari quiz.js

// --- Konfigurasi ---
const QUIZ_DURATION_SECONDS = 60 * 1; // Contoh: 1 menit (60 detik * 1) - Sesuaikan!

// --- Elemen DOM ---
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');

// --- Fungsi Utama ---

function handleAnswerSelection(event) {
    // Cek apakah yang diklik adalah tombol pilihan
    if (event.target.matches('.option-button')) {
        const selectedIndex = parseInt(event.target.dataset.index);
        const currentQuestion = quiz.getCurrentQuestion(); // Dapatkan soal saat ini
        if (!currentQuestion) return; // Antisipasi jika soal tidak ada
        const result = quiz.submitAnswer(selectedIndex); // Proses jawaban
        ui.showFeedback(result.isCorrect, result.correctAnswer, selectedIndex, currentQuestion); // Tampilkan feedback
    }
}

function displayCurrentQuestion() {
    const question = quiz.getCurrentQuestion();
    if (question) {
        ui.displayQuestion(
            question,
            quiz.getCurrentQuestionNumber(),
            quiz.getTotalQuestions()
        );
    } else {
        // Seharusnya tidak terjadi jika alur benar, tapi sebagai fallback
        endQuiz();
    }
}

function handleNextQuestion() {
    const hasNext = quiz.moveToNextQuestion();
    if (hasNext) {
        displayCurrentQuestion();
    } else {
        endQuiz(); // Kuis selesai setelah soal terakhir dijawab
    }
}

function handleTimerTick(timeLeft) {
    ui.updateTimerDisplay(formatTime(timeLeft));
}

function handleTimeUp() {
    alert("Waktu Habis!"); // Beri notifikasi
    endQuiz();
}

function endQuiz() {
    stopTimer(); // Hentikan timer
    ui.displayResults(quiz.getScore(), quiz.getTotalQuestions());
    ui.showScreen('results');
}

function startQuiz() {
    quiz.resetQuiz(); // Pastikan state bersih
    quiz.loadQuestions(getQuizQuestions()); // Muat soal

    if (quiz.getTotalQuestions() === 0) {
        alert("Tidak ada soal yang dimuat!");
        return;
    }

    ui.showScreen('quiz');
    displayCurrentQuestion();
    startTimer(QUIZ_DURATION_SECONDS, handleTimerTick, handleTimeUp);
}

function restartQuiz() {
    stopTimer(); // Pastikan timer berhenti jika user restart dari halaman hasil
    ui.showScreen('start');
}

// --- Inisialisasi ---
function initializeApp() {
    // Tampilkan layar awal
    ui.showScreen('start');

    // Tambahkan event listeners
    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', handleNextQuestion);

    // Gunakan event delegation untuk tombol pilihan jawaban
    ui.optionsList.addEventListener('click', handleAnswerSelection);

    // Setup tombol restart (fungsi callback restartQuiz)
    ui.setupRestartButton(restartQuiz);
}

// Jalankan aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', initializeApp);
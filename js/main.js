// js/main.js
import { getQuizQuestions } from './modules/data.js';
import { startQuestionTimer, stopQuestionTimer, formatTime } from './modules/timer.js';
import * as ui from './modules/ui.js'; // Impor semua dari ui.js
import * as quiz from './modules/quiz.js'; // Impor semua dari quiz.js

// --- Konfigurasi ---
const SECONDS_PER_QUESTION = 60 ; // Waktu per soal dalam detik

// --- Elemen DOM ---
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');

// --- Fungsi Utama ---

function handleAnswerSelection(event) {
    // Cek apakah yang diklik adalah tombol pilihan
    if (event.target.matches('.option-button') && !event.target.disabled) {
        stopQuestionTimer(); // Hentikan timer segera setelah jawaban dipilih

        const selectedIndex = parseInt(event.target.dataset.index);
        const currentQuestion = quiz.getCurrentQuestion();
        if (!currentQuestion) return;

        const result = quiz.submitAnswer(selectedIndex, currentQuestion); // Kirim currentQuestion
        ui.showFeedback(result.isCorrect, result.correctAnswer, selectedIndex, currentQuestion);
    }
}

// Fungsi baru untuk menangani waktu habis per soal
function handleQuestionTimeUp() {
    console.log("Waktu habis untuk soal ini!");
    const currentQuestion = quiz.getCurrentQuestion();
    if (!currentQuestion) return;

    quiz.recordTimeout(currentQuestion); // Catat sebagai timeout di quiz.js
    // Tampilkan feedback waktu habis dan jawaban benar
    ui.showFeedback(
        false, // Anggap salah
        currentQuestion.answer,
        null, // Tidak ada index yang dipilih
        currentQuestion,
        "Waktu Habis! Jawaban yang benar ditandai." // Pesan khusus
    );
    // Tombol next sudah diaktifkan di dalam showFeedback
}

function displayCurrentQuestion() {
    const question = quiz.getCurrentQuestion();
    if (question) {
        ui.displayQuestion(
            question,
            quiz.getCurrentQuestionNumber(),
            quiz.getTotalQuestions()
        );
        // Mulai timer untuk soal ini
        startQuestionTimer(SECONDS_PER_QUESTION, handleTimerTick, handleQuestionTimeUp);
 }  else {
    // Jika tidak ada soal lagi (seharusnya tidak terjadi di sini)
    endQuiz();
 }
}

function handleNextQuestion() {
    stopQuestionTimer(); // Hentikan timer soal sebelumnya (jika masih jalan)
    
    const hasNext = quiz.moveToNextQuestion();
    if (hasNext) {
        displayCurrentQuestion(); // Tampilkan soal berikutnya & mulai timer 
    } else {
        endQuiz(); // Kuis selesai setelah soal terakhir dijawab
    }
}

function handleTimerTick(timeLeft) {
    ui.updateTimerDisplay(formatTime(timeLeft));
}

function endQuiz() {
    stopQuestionTimer(); // Pastikan timer berhenti
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
}

function restartQuiz() {
    stopQuestionTimer(); // Hentikan timer jika ada
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
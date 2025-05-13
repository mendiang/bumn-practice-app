// js/modules/ui.js
import { formatTime } from './timer.js'; 

// Dapatkan referensi elemen sekali saja
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const timerDisplay = document.getElementById('timer-display');
const timeWarningBar = document.getElementById('time-warning-bar'); // <-- Ambil elemen bar
const WARNING_THRESHOLD_SECONDS = 15; // Batas waktu untuk notifikasi
const passageTextElement = document.getElementById('passage-text'); // <-- Elemen baru
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackElement = document.getElementById('feedback'); // Area untuk feedback jawaban
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-button');
const explanationArea = document.getElementById('explanation-area'); // <-- Elemen baru
const explanationTextElement = document.getElementById('explanation-text'); // <-- Elemen baru
// === Akhir Elemen BARU ===

function showScreen(screenName) {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'none';

    if (screenName === 'start') {
        startScreen.style.display = 'block';
    } else if (screenName === 'quiz') {
        quizScreen.style.display = 'block';
    } else if (screenName === 'results') {
        resultsScreen.style.display = 'block';
    }
}

function updateTimerDisplay(timeLeft) {
    // Format waktu untuk ditampilkan
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft <= WARNING_THRESHOLD_SECONDS && timeLeft > 0) {
        // Waktu hampir habis, tambahkan kelas peringatan
        if (!timerDisplay.classList.contains('timer-warning')) {
            timerDisplay.classList.add('timer-warning');
            timeWarningBar.classList.add('active-warning'); // <-- Tambahkan kelas ke bar
        }
    } else {
        // Waktu masih cukup atau sudah habis (<=0), hapus kelas peringatan
        if (timerDisplay.classList.contains('timer-warning')) {
            timerDisplay.classList.remove('timer-warning');
            timeWarningBar.classList.remove('active-warning'); // <-- Hapus kelas dari bar
        }
    }
     // Jika waktu tepat 0 atau kurang, pastikan tidak ada warning lagi
     if(timeLeft <= 0) {
          timerDisplay.classList.remove('timer-warning');
          timeWarningBar.classList.remove('active-warning'); // <-- Pastikan dihapus saat 0
          // Mungkin tambahkan style lain untuk waktu habis? (Opsional)
          // timerDisplay.style.color = '#888'; // Contoh: jadi abu-abu
    }
}

// Modifikasi fungsi displayQuestion
function displayQuestion(questionData, questionNumber, totalQuestions) { 
    // Tampilkan atau sembunyikan teks bacaan
    if (questionData.passage) {
        passageTextElement.innerHTML = questionData.passage; // Gunakan innerHTML jika ada format
        passageTextElement.style.display = 'block';
    } else {
        passageTextElement.innerHTML = '';
        passageTextElement.style.display = 'none';
    }

    // === PERUBAHAN UTAMA: Menyisipkan badge ke dalam teks soal ===
    // Buat string HTML untuk badge
    const progressBadgeHTML = `<span id="question-progress-badge">${questionNumber}/${totalQuestions}</span>`;
    // Gabungkan badge dengan teks pertanyaan
    questionText.innerHTML = `${progressBadgeHTML} ${questionData.question}`;
    // ============================================================
    optionsList.innerHTML = ''; // Kosongkan pilihan sebelumnya
    feedbackElement.textContent = ''; // Kosongkan feedback
    feedbackElement.className = 'feedback';
    explanationArea.style.display = 'none'; // <-- Sembunyikan pembahasan
    explanationTextElement.textContent = ''; // <-- Kosongkan teks pembahasan
    nextButton.disabled = true; // Nonaktifkan tombol next sampai jawaban dipilih

    questionData.options.forEach((option, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.index = index; // Simpan index untuk identifikasi
        button.classList.add('option-button');
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

function showFeedback(isCorrect, correctAnswer, selectedIndex, questionData, feedbackMessage = null) {
    const buttons = optionsList.querySelectorAll('.option-button');
    const selectedButton = selectedIndex !== null ? buttons[selectedIndex] : null; // Handle jika index null (timeout)

    // Nonaktifkan semua tombol
    buttons.forEach(btn => btn.disabled = true);

    // Tampilkan feedback (bisa di-override oleh message)
    if (feedbackMessage) {
        feedbackElement.textContent = feedbackMessage;
        feedbackElement.className = 'feedback incorrect'; // Asumsi timeout/salah
        if (selectedButton) selectedButton.classList.add('incorrect'); // Highlight merah jika ada pilihan
   } else if (isCorrect) {
       feedbackElement.textContent = 'Jawaban Benar!';
       feedbackElement.className = 'feedback correct';
       if(selectedButton) selectedButton.classList.add('correct');
   } else {
       feedbackElement.textContent = `Jawaban Salah. Yang benar: ${correctAnswer}`;
       feedbackElement.className = 'feedback incorrect';
       if(selectedButton) selectedButton.classList.add('incorrect');
   }

    // Highlight jawaban benar jika user salah atau waktu habis
   if (!isCorrect || feedbackMessage) {
        const correctIndex = questionData.options.findIndex(opt => opt === correctAnswer);
        if (correctIndex > -1) {
             buttons[correctIndex].classList.add('correct-answer');
        }
   }

   // Tampilkan Pembahasan jika ada
   if (questionData.explanation) {
       explanationTextElement.innerHTML = questionData.explanation; // innerHTML jika ada format
       explanationArea.style.display = 'block';
   } else {
        explanationArea.style.display = 'none';
   }

    nextButton.disabled = false; // Aktifkan tombol next setelah jawaban dipilih
    // Nonaktifkan semua tombol pilihan setelah dipilih
    optionsList.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = true;
    });
}

function displayResults(score, totalQuestions) {
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = totalQuestions;
}

function setupRestartButton(callback) {
    // Pastikan listener hanya ditambah sekali
    restartButton.removeEventListener('click', callback);
    restartButton.addEventListener('click', callback);
}

export {
    showScreen,
    updateTimerDisplay,
    displayQuestion,
    showFeedback,
    displayResults,
    setupRestartButton,
    optionsList // Ekspor optionsList agar event listener bisa dipasang di main.js
};
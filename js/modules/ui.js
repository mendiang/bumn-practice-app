// js/modules/ui.js

// Dapatkan referensi elemen sekali saja
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const timerDisplay = document.getElementById('timer-display');
const passageTextElement = document.getElementById('passage-text'); // <-- Elemen baru
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackElement = document.getElementById('feedback'); // Area untuk feedback jawaban
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-button');

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

function updateTimerDisplay(timeString) {
    timerDisplay.textContent = timeString;
}

function displayQuestion(questionData, questionNumber, totalQuestions) {
    // Tampilkan atau sembunyikan teks bacaan
    if (questionData.passage) {
        passageTextElement.innerHTML = questionData.passage; // Gunakan innerHTML jika ada format
        passageTextElement.style.display = 'block';
    } else {
        passageTextElement.innerHTML = '';
        passageTextElement.style.display = 'none';
    }

    questionText.textContent = `(${questionNumber}/${totalQuestions}) ${questionData.question}`;
    optionsList.innerHTML = ''; // Kosongkan pilihan sebelumnya
    feedbackElement.textContent = ''; // Kosongkan feedback
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

function showFeedback(isCorrect, correctAnswer, selectedIndex, questionData) {
    const buttons = optionsList.querySelectorAll('.option-button');
    const selectedButton = buttons[selectedIndex];

    // Nonaktifkan semua tombol
    buttons.forEach(btn => btn.disabled = true);

    // Tambahkan kelas 'selected' ke tombol yang dipilih
    selectedButton.classList.add('selected');

    if (isCorrect) {
        feedbackElement.textContent = 'Jawaban Benar!';
        feedbackElement.className = 'feedback correct';
        selectedButton.classList.add('correct'); // Highlight hijau tombol benar
    } else {
        feedbackElement.textContent = `Jawaban Salah. Yang benar: ${correctAnswer}`;
        feedbackElement.className = 'feedback incorrect';
        selectedButton.classList.add('incorrect'); // Highlight merah tombol pilihan salah

        // Cari dan highlight jawaban yang benar
        const correctIndex = questionData.options.findIndex(opt => opt === correctAnswer);
        if (correctIndex > -1) {
         buttons[correctIndex].classList.add('correct-answer'); // Highlight khusus jawaban benar
        }
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
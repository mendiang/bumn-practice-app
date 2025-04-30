// js/modules/quiz.js

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Menyimpan jawaban pengguna { questionId, selected, correct }

function loadQuestions(questionData) {
    questions = questionData; // Simpan data soal
    // Acak urutan soal (opsional tapi bagus untuk latihan berulang)
    questions.sort(() => Math.random() - 0.5);
    resetQuiz(); // Pastikan state bersih saat memuat soal baru
}

function getCurrentQuestion() {
    if (currentQuestionIndex < questions.length) {
        return questions[currentQuestionIndex];
    }
    return null; // Kuis selesai
}

function submitAnswer(selectedIndex, currentQuestion) {
    if (!currentQuestion || selectedIndex === null || selectedIndex === undefined) 
        {
        return { isCorrect: false, correctAnswer: currentQuestion?.answer || null }; 
}

    const selectedAnswer = currentQuestion.options[selectedIndex];
    const correctAnswer = currentQuestion.answer;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
        score++;
    }

    userAnswers.push({
        questionId: currentQuestion.id,
        selected: selectedAnswer,
        isCorrect: isCorrect,
        timedOut: false 
    });

    return {isCorrect, correctAnswer}; 
}

// Fungsi baru untuk menandai jawaban timeout (jika diperlukan)
function recordTimeout(currentQuestion) {
    if (!currentQuestion) return;
    userAnswers.push({
       questionId: currentQuestion.id,
       selected: null, // Tidak ada jawaban dipilih
       isCorrect: false,
       timedOut: true
   });
   // Skor tidak bertambah
}

function moveToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        return true; // Masih ada soal berikutnya
    }
    return false; // Soal terakhir
}

function isQuizOver() {
    return currentQuestionIndex >= questions.length;
}

function getScore() {
    return score;
}

function getTotalQuestions() {
    return questions.length;
}

function getCurrentQuestionNumber() {
    return currentQuestionIndex + 1;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
}

export {
    loadQuestions,
    getCurrentQuestion,
    submitAnswer,
    recordTimeout, // <-- Ekspor fungsi baru
    moveToNextQuestion,
    isQuizOver,
    getScore,
    getTotalQuestions,
    getCurrentQuestionNumber,
    resetQuiz
};
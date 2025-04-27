const grammarQuestions = [
    {
        id: 'g1',
        type: 'grammar',
        question: "She ___ interested in the project since the beginning.",
        options: ["is", "has been", "was", "have been"],
        answer: "has been" // Jawaban yang benar
    },
    {
        id: 'g2',
        type: 'grammar',
        question: "If I ___ you, I would study harder for the BUMN test.",
        options: ["am", "was", "were", "be"],
        answer: "were"
    },
    {
        id: 'g3',
        type: 'grammar',
        question: "He is looking forward ___ you soon.",
        options: ["to seeing", "to see", "seeing", "see"],
        answer: "to seeing"
    },
    {
        id: 'g4',
        type: 'grammar',
        question: "This book is ___ than the other one.",
        options: ["more interesting", "interesting", "most interesting", "interestinger"],
        answer: "more interesting"
    }
    // Tambahkan lebih banyak soal di sini
];

const readingQuestions = [
    {
        id: 'r1q1',
        type: 'reading',
        passage: "The rapid advancement of technology has significantly transformed various aspects of human life. Communication has become instantaneous through smartphones and social media platforms. Automation is changing industries, requiring new skills from the workforce. While these changes bring convenience and efficiency, they also raise concerns about job displacement and digital privacy.",
        question: "What is the main topic of the passage?",
        options: ["The history of communication", "Concerns about digital privacy only", "The impact of technology on human life", "The importance of smartphones"],
        answer: "The impact of technology on human life"
    },
    {
        id: 'r1q2', // Pertanyaan lain dari bacaan yang sama
        type: 'reading',
        passage: "The rapid advancement of technology has significantly transformed various aspects of human life. Communication has become instantaneous through smartphones and social media platforms. Automation is changing industries, requiring new skills from the workforce. While these changes bring convenience and efficiency, they also raise concerns about job displacement and digital privacy.",
        question: "According to the passage, what is one concern raised by technological advancement?",
        options: ["Increased job opportunities", "Enhanced digital privacy", "Job displacement", "Slower communication"],
        answer: "Job displacement"
    },
     {
        id: 'r2q1',
        type: 'reading',
        passage: "Time management is crucial for success in any competitive examination. The BUMN recruitment test often includes multiple sections with strict time limits. Candidates who can allocate their time effectively across sections, answer questions accurately within the allotted time per question, and avoid getting stuck on difficult problems tend to perform better. Practicing timed simulations is an excellent way to improve this skill.",
        question: "Why is time management important for the BUMN test according to the passage?",
        options: ["It guarantees a high score.", "It helps candidates answer accurately under pressure.", "It eliminates difficult questions.", "It allows more time for reading passages."],
        answer: "It helps candidates answer accurately under pressure."
    },
    // Tambahkan lebih banyak soal reading di sini
];
// Fungsi untuk mendapatkan SEMUA soal (grammar + reading)
function getQuizQuestions() {
     // Gabungkan kedua jenis soal
     const allQuestions = [...grammarQuestions, ...readingQuestions];
     // Acak urutan semua soal
     allQuestions.sort(() => Math.random() - 0.5);
     return allQuestions;
}

export { getQuizQuestions };